/* eslint-disable react-refresh/only-export-components */
import * as React from "react"
import {
  THEME_STORAGE_KEY,
  useThemeStore,
  type ThemeMode,
} from "@/store/themeStore"

type ThemeProviderProps = {
  children: React.ReactNode
}

function applyThemeClass(theme: ThemeMode) {
  const root = document.documentElement
  root.classList.remove("light", "dark")
  root.classList.add(theme)
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const theme = useThemeStore((s) => s.theme)

  React.useLayoutEffect(() => {
    applyThemeClass(theme)
  }, [theme])

  React.useEffect(() => {
    const onStorage = (event: StorageEvent) => {
      if (event.storageArea !== localStorage) return
      if (event.key !== THEME_STORAGE_KEY) return
      const v = event.newValue
      if (v === "light" || v === "dark") {
        useThemeStore.setState({ theme: v })
      }
    }
    window.addEventListener("storage", onStorage)
    return () => window.removeEventListener("storage", onStorage)
  }, [])

  return <>{children}</>
}

/** Same shape as before for consumers; backed by Zustand. */
export function useTheme() {
  const theme = useThemeStore((s) => s.theme)
  const setTheme = useThemeStore((s) => s.setTheme)
  return { theme, setTheme }
}
