import { DictionaryHeader } from "@/components/dictionary-header.tsx"
import { DictionarySearch } from "@/components/dictionary-search.tsx"
import { DictionaryEntry } from "@/components/dictionary-entry.tsx"
import useDictionaryStore from "@/store/dictionaryStore"
import { useWordQuery } from "@/hooks/useWordQuery"
import { formatData } from "@/utils/formatData"
import EmptyState from "@/components/emptyState"
import ErrorState from "@/components/errorState"

function Container() {
  const { input, setInput, word } = useDictionaryStore()
  const setWord = useDictionaryStore((state) => state.setWord)
  const { data, isLoading, isError, error } = useWordQuery(word)
  const formatted = formatData(data)
  const displayWord = formatted?.word ?? ""
  const phonetic = formatted?.phonetic
  const audio = formatted?.audio
  const meanings = formatted?.meanings ?? []
  const sourceUrls = formatted?.sourceUrls ?? []
  const isSearchEmpty = !word

  return (
    <div className="flex min-h-svh justify-center bg-background px-4 py-8 text-foreground md:px-6">
      <div className="flex w-full max-w-3xl flex-col gap-8 md:gap-10">
        <DictionaryHeader />

        <section className="mt-2">
          <DictionarySearch input={input} setInput={setInput} setWord={() => setWord(input)} />
        </section>

        <main className="space-y-8 md:space-y-10">
          <section aria-label="Dictionary entry">
            {isError && !isSearchEmpty ? (
              <ErrorState error={error} />
            ) : isSearchEmpty ? (
              <EmptyState />
            ) : (
              <DictionaryEntry
                word={displayWord}
                phonetic={phonetic}
                audio={audio}
                meanings={meanings}
                sourceUrls={sourceUrls}
                isLoading={isLoading}
              />
            )}
          </section>
        </main>
      </div>
    </div>
  )
}

export default Container
