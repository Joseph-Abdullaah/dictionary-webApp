import type { FontType } from "@/types/fontTypes"

export const fontClassMap: Record<FontType, string> = {
  sans: "font-sans",
  serif: "font-serif",
  mono: "font-mono",
} as const
