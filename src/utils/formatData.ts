import type {
  CleanDefinition,
  CleanMeaning,
  CleanWord,
  License,
  RawEntry,
  RawLicense,
} from "@/types/formatDataTypes"

const isNonEmptyString = (value: unknown): value is string =>
  typeof value === "string" && value.trim().length > 0

const toStringArray = (value: unknown): string[] =>
  Array.isArray(value) ? value.filter(isNonEmptyString) : []

function normalizeLicense(license: RawLicense | undefined): License | undefined {
  if (!license) return undefined
  if (!isNonEmptyString(license.name) || !isNonEmptyString(license.url)) {
    return undefined
  }

  return {
    name: license.name,
    url: license.url,
  }
}

/**
 * Transform the messy DictionaryAPI response (array) into a single CleanWord object.
 * Returns null if response can't be parsed.
 */
export function formatData(raw: unknown): CleanWord | null {
  if (!Array.isArray(raw) || raw.length === 0) return null
  const firstEntry = raw[0]
  if (!firstEntry || typeof firstEntry !== "object") return null

  const entry = firstEntry as RawEntry
  if (!isNonEmptyString(entry.word)) return null

  const phonetic =
    isNonEmptyString(entry.phonetic)
      ? entry.phonetic
      : entry.phonetics?.find((phoneticItem) => isNonEmptyString(phoneticItem?.text))?.text

  const audio = entry.phonetics?.find((phoneticItem) => isNonEmptyString(phoneticItem?.audio))
    ?.audio

  const meaningsRaw = Array.isArray(entry.meanings) ? entry.meanings : []
  const meanings: CleanMeaning[] = meaningsRaw
    .map((meaning): CleanMeaning | null => {
      const definitionsRaw = Array.isArray(meaning.definitions) ? meaning.definitions : []
      const definitions: CleanDefinition[] = definitionsRaw
        .map((definition): CleanDefinition | null => {
          if (!isNonEmptyString(definition.definition)) return null

          return {
            definition: definition.definition,
            example: isNonEmptyString(definition.example) ? definition.example : undefined,
            synonyms: toStringArray(definition.synonyms),
            antonyms: toStringArray(definition.antonyms),
          }
        })
        .filter((definition): definition is CleanDefinition => definition !== null)

      if (definitions.length === 0) return null

      return {
        partOfSpeech: isNonEmptyString(meaning.partOfSpeech) ? meaning.partOfSpeech : "unknown",
        definitions,
        synonyms: toStringArray(meaning.synonyms),
      }
    })
    .filter((meaning): meaning is CleanMeaning => meaning !== null)

  const cleanWord: CleanWord = {
    word: entry.word,
    phonetic: isNonEmptyString(phonetic) ? phonetic : undefined,
    audio: isNonEmptyString(audio) ? audio : undefined,
    meanings,
    sourceUrls: toStringArray(entry.sourceUrls),
    license: normalizeLicense(entry.license),
  }

  return cleanWord
}
