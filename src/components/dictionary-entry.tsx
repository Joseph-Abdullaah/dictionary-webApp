import { Card, CardContent, CardFooter } from "@/components/ui/card"
import Word from "@/components/word"
import WordSkeleton from "@/components/word-skeleton"
import Meanings from "@/components/meanings"
import MeaningsSkeleton from "@/components/meanings-skeleton"
import Source from "@/components/source"
import SourceSkeleton from "@/components/source-skeleton"
import type { DictionaryWord } from "@/types/formatDataTypes"

type DictionaryEntryProps = DictionaryWord & { isLoading: boolean }

export function DictionaryEntry({
  isLoading,
  word,
  phonetic,
  audio,
  meanings,
  sourceUrls,
}: DictionaryEntryProps) {
  return (
    <Card className="gap-10 md:gap-12">
      <CardContent className="pt-0">
        {isLoading ? <WordSkeleton /> : <Word word={word} phonetic={phonetic} audio={audio} />}

        <div className="mt-8 space-y-10 md:mt-10">
          {isLoading ? <MeaningsSkeleton /> : <Meanings meanings={meanings} />}
        </div>
      </CardContent>

      <CardFooter className="border-t border-border/80 pt-4 md:pt-6">
        {isLoading ? <SourceSkeleton /> : <Source sourceUrls={sourceUrls} />}
      </CardFooter>
    </Card>
  )
}
