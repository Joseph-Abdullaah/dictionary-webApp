import { create } from "zustand"

interface DictionaryState {
  input: string
  word: string
  setInput: (input: string) => void
  setWord: (word: string) => void
}

const useDictionaryStore = create<DictionaryState>((set) => ({
  input: "",
  word: "",
  setInput: (input) => set({ input }),
  setWord: (word) => set({ word }),
}))

export default useDictionaryStore
