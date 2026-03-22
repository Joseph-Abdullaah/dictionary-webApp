import { create } from "zustand"

export const THEME_STORAGE_KEY = "dictionary-theme"

export type ThemeMode = "light" | "dark"

function readStoredTheme(): ThemeMode {
  if (typeof window === "undefined") return "light"
  const v = localStorage.getItem(THEME_STORAGE_KEY)
  if (v === "dark" || v === "light") return v
  return "light"
}

interface ThemeState {
  theme: ThemeMode
  setTheme: (theme: ThemeMode) => void
  toggleTheme: () => void
}

export const useThemeStore = create<ThemeState>((set, get) => ({
  theme: readStoredTheme(),
  setTheme: (theme) => {
    localStorage.setItem(THEME_STORAGE_KEY, theme)
    set({ theme })
  },
  toggleTheme: () => {
    const next: ThemeMode = get().theme === "dark" ? "light" : "dark"
    localStorage.setItem(THEME_STORAGE_KEY, next)
    set({ theme: next })
  },
}))
