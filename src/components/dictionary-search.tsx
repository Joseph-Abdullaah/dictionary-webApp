import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group"
import { SearchIcon } from "lucide-react"

interface DictionarySearchProps {
  value: string
  onChange: (value: string) => void
}


export function DictionarySearch( { value, onChange}: DictionarySearchProps) {
  return (
    <InputGroup className="h-18 rounded-2xl bg-card px-1.5 py-1.5 shadow-md shadow-black/5 dark:shadow-black/40">
      <InputGroupInput
        placeholder="Search for any word…"
        aria-label="Search for a word"
        className="h-10 border-0 bg-transparent text-lg md:text-2xl font-semibold placeholder:text-muted-foreground focus-visible:ring-0"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <InputGroupAddon align="inline-end" className="pr-1.5">
        <InputGroupButton
          size="icon-sm"
          variant="default"
          className="rounded-2xl bg-primary text-primary-foreground hover:bg-primary/80"
        >
          <SearchIcon size={64} className="h-4 w-4" />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  )
}

