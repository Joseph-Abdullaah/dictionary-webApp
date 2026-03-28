import { create } from "zustand"
import type { FontType } from "@/types/fontTypes"

const FONT_STORAGE_KEY = "dictionary-font"

function readStoredFont(): FontType {
  if (typeof window === "undefined") return "sans"
  const v = localStorage.getItem(FONT_STORAGE_KEY)
  if (v === "serif" || v === "sans" || v === "mono") return v as FontType
  return "sans"
}

interface FontState {
  font: FontType
  setFont: (font: FontType) => void
}

export const useFontStore = create<FontState>((set) => ({
  font: readStoredFont(),
  setFont: (font: FontType) => {
    localStorage.setItem(FONT_STORAGE_KEY, font)
    set({ font })
  },
}))
