import { DictionaryHeader } from "@/components/dictionary-header.tsx"
import { DictionarySearch } from "@/components/dictionary-search.tsx"
import { DictionaryEntry } from "@/components/dictionary-entry.tsx"
import useDictionaryStore from "@/store/dictionaryStore"
import { useWordQuery } from "@/hooks/useWordQuery"
import { formatData } from "@/utils/formatData"
import EmtyState from "@/components/emtyState"
import ErrorState from "@/components/errorState"

function Container() {
  const { searchInput, setSearchInput } = useDictionaryStore()
  const { data, isLoading, isError, error } = useWordQuery(searchInput)
  const formatted = formatData(data)
  const word = formatted?.word ?? ""
  const phonetic = formatted?.phonetic
  const audio = formatted?.audio
  const meanings = formatted?.meanings ?? []
  const sourceUrls = formatted?.sourceUrls ?? []
  const isSearchEmpty = !searchInput.trim()

  return (
    <div className="flex min-h-svh justify-center bg-background px-4 py-8 text-foreground md:px-6">
      <div className="flex w-full max-w-3xl flex-col gap-8 md:gap-10">
        <DictionaryHeader />

        <section className="mt-2">
          <DictionarySearch value={searchInput} onChange={setSearchInput} />
        </section>

        <main className="space-y-8 md:space-y-10">
          <section aria-label="Dictionary entry">
            {isError && !isSearchEmpty ? (
              <ErrorState error={error} />
            ) : isSearchEmpty ? (
              <EmtyState />
            ) : (
              <DictionaryEntry
                word={word}
                phonetic={phonetic}
                audio={audio}
                meanings={meanings}
                sourceUrls={sourceUrls}
                isLoading={isLoading}
              />
            )}
          </section>
        </main>

        <p className="text-[11px] text-muted-foreground">
          Press{" "}
          <kbd className="rounded-md border bg-muted px-1.5 py-0.5 font-mono text-[10px]">
            d
          </kbd>{" "}
          to toggle dark mode.
        </p>
      </div>
    </div>
  )
}

export default Container
