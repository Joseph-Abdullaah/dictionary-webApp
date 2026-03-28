import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { MoonIcon } from "lucide-react"
import { useThemeStore } from "@/store/themeStore"
import { useFontStore } from "@/store/fontStore"
import type { FontType } from "@/types/fontTypes"

export function DictionaryHeader() {
  const theme = useThemeStore((s) => s.theme)
  const setTheme = useThemeStore((s) => s.setTheme)
  const font = useFontStore((s) => s.font)
  const setFont = useFontStore((s) => s.setFont)

  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-lg font-bold text-primary-foreground">
          D
        </div>
        <span className="text-lg font-semibold tracking-tight">Dictionary</span>
      </div>

      <div className="flex items-center gap-4 text-xs md:text-sm">
        <Select onValueChange={(value: string) => setFont(value as FontType)}>
          <SelectTrigger size="sm" className="min-w-24 justify-between">
            <SelectValue
              placeholder={
                font.charAt(0).toUpperCase() +
                font.slice(1).replace(/^[a-z]/, (m) => m.toUpperCase())
              }
            />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="serif">Serif</SelectItem>
            <SelectItem value="sans">Sans Serif</SelectItem>
            <SelectItem value="mono">Mono</SelectItem>
          </SelectContent>
        </Select>

        <Separator orientation="vertical" className="h-6" />

        <div className="flex items-center gap-3">
          <Switch
            size="default"
            aria-label="Toggle dark mode"
            checked={theme === "dark"}
            onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
          />
          <MoonIcon className="h-5 w-5 text-muted-foreground" />
        </div>
      </div>
    </header>
  )
}
