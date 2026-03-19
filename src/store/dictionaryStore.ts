import { create } from "zustand"

interface DictionaryState {
    Input: string
    word: string
    setInput: (searchInput: string) => void
    setWord: (word: string) => void
}

const useDictionaryStore = create<DictionaryState>((set) => ({
    Input: "",
    word: "",
    setInput: (Input) => set({ Input }),
    setWord: (word) => set({ word }),
}))

export default useDictionaryStore;