// export type RawPhonetic = {
//   text?: string
//   audio?: string
//   sourceUrl?: string
//   license?: { name?: string; url?: string }
// }

// export type RawDefinition = {
//   definition: string
//   example?: string
//   synonyms?: string[]
//   antonyms?: string[]
// }

// export type RawMeaning = {
//   partOfSpeech?: string
//   definitions?: RawDefinition[]
//   synonyms?: string[]
//   antonyms?: string[]
// }

// export type RawEntry = {
//   word?: string
//   phonetic?: string
//   phonetics?: RawPhonetic[]
//   meanings?: RawMeaning[]
//   license?: { name?: string; url?: string }
//   sourceUrls?: string[]
// }

// // Clean object your UI will use
// export type CleanDefinition = {
//   definition: string
//   example?: string
//   synonyms: string[]
//   antonyms: string[]
// }

// export type CleanMeaning = {
//   partOfSpeech: string
//   definitions: CleanDefinition[]
//   synonyms: string[] // aggregated meaning-level synonyms (if any)
// }

// export type CleanWord = {
//   word: string
//   phonetic?: string
//   audio?: string
//   meanings: CleanMeaning[]
//   sourceUrls: string[]
//   license?: { name?: string; url?: string }
// }


// types/api-dictionary.ts

// export type ApiDictionaryResponse = DictionaryWord[]

export interface DictionaryWord {
  word: string
  phonetic?: string
  audio?: string
  meanings: Meaning[]
  sourceUrls: string[]
  license?: License
}

export interface Meaning {
  partOfSpeech: string
  synonyms: string[]
  definitions: Definition[]
}

export interface Definition {
  definition: string
  example?: string
  synonyms: string[]
  antonyms: string[]
}

export interface License {
  name: string
  url: string
}