import type { RawEntry, CleanWord, CleanMeaning, CleanDefinition } from "@/types/formatDataTypes"

/**
 * Transform the messy DictionaryAPI response (array) into a single CleanWord object.
 * Returns null if response can't be parsed.
 */
export function formatData(raw: unknown): CleanWord | null {
  if (!Array.isArray(raw) || raw.length === 0) return null

  const entry = raw[0] as RawEntry
  if (!entry) return null

  // word (required)
  const word = entry.word ?? (typeof entry.phonetic === "string" ? entry.phonetic : undefined)
  if (!word) return null

  // phonetic text: prefer top-level `phonetic`, fall back to first phonetics.text
  const phonetic =
    typeof entry.phonetic === "string"
      ? entry.phonetic
      : entry.phonetics?.find((p) => !!p?.text)?.text

  // audio: prefer first phonetic with audio
  const audio = entry.phonetics?.find((p) => !!p?.audio)?.audio

  // meanings
  const meaningsRaw = Array.isArray(entry.meanings) ? entry.meanings : []
  const meanings: CleanMeaning[] = meaningsRaw.map((m) => {
    const part = m.partOfSpeech ?? "unknown"

    const defsRaw = Array.isArray(m.definitions) ? m.definitions : []
    const definitions: CleanDefinition[] = defsRaw.map((d) => ({
      definition: d.definition ?? "",
      example: d.example,
      synonyms: Array.isArray(d.synonyms) ? d.synonyms : [],
      antonyms: Array.isArray(d.antonyms) ? d.antonyms : [],
    }))

    // merge meaning-level synonyms (if present) with synonyms from individual definitions (optional)
    const meaningSynonyms = Array.isArray(m.synonyms) ? m.synonyms : []

    return {
      partOfSpeech: part,
      definitions,
      synonyms: meaningSynonyms,
    }
  })

  // sourceUrls (some responses include this at root)
  const sourceUrls = Array.isArray(entry.sourceUrls) ? entry.sourceUrls : []

  // license if present
  const license = entry.license ? { name: entry.license.name, url: entry.license.url } : undefined

  const clean: CleanWord = {
    word,
    phonetic: phonetic ?? undefined,
    audio: audio ?? undefined,
    meanings,
    sourceUrls,
    license,
  }

  return clean
}
