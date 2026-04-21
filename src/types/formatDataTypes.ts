export interface RawLicense {
  name?: string
  url?: string
}

export interface RawPhonetic {
  text?: string
  audio?: string
  sourceUrl?: string
  license?: RawLicense
}

export interface RawDefinition {
  definition?: string
  example?: string
  synonyms?: string[]
  antonyms?: string[]
}

export interface RawMeaning {
  partOfSpeech?: string
  definitions?: RawDefinition[]
  synonyms?: string[]
  antonyms?: string[]
}

export interface RawEntry {
  word?: string
  phonetic?: string
  phonetics?: RawPhonetic[]
  meanings?: RawMeaning[]
  license?: RawLicense
  sourceUrls?: string[]
}

export interface License {
  name: string
  url: string
}

export interface Definition {
  definition: string
  example?: string
  synonyms: string[]
  antonyms: string[]
}

export interface Meaning {
  partOfSpeech: string
  synonyms: string[]
  definitions: Definition[]
}

export interface DictionaryWord {
  word: string
  phonetic?: string
  audio?: string
  meanings: Meaning[]
  sourceUrls: string[]
  license?: License
}

export type CleanDefinition = Definition
export type CleanMeaning = Meaning
export type CleanWord = DictionaryWord

export interface DictionaryApiError {
  title?: string
  message?: string
  resolution?: string
}
