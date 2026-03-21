import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group"
import { SearchIcon } from "lucide-react"

interface DictionarySearchProps {
  input: string
  setInput: (value: string) => void
  setWord: () => void
}

export function DictionarySearch({
  input,
  setInput,
  setWord,
}: DictionarySearchProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setWord()
    }
  }

  return (
    <InputGroup className="h-18 rounded-2xl bg-card px-1.5 py-1.5 shadow-md shadow-black/5 dark:shadow-black/40">
      <InputGroupInput
        placeholder="Search for any word…"
        aria-label="Search for a word"
        className="h-10 border-0 bg-transparent text-lg font-semibold placeholder:text-muted-foreground focus-visible:ring-0 md:text-2xl"
        value={input}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <InputGroupAddon align="inline-end" className="pr-1.5">
        <InputGroupButton
          size="icon-sm"
          variant="default"
          className="rounded-2xl bg-primary text-primary-foreground hover:bg-primary/80"
          onClick={setWord}
        >
          <SearchIcon size={64} className="h-4 w-4" />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  )
}
