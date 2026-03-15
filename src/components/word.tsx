import { Button } from "@/components/ui/button"
import { PlayIcon } from "lucide-react"
import type { DictionaryWord } from "@/types/formatDataTypes"

function Word({
  word,
  phonetic,
  audio,
}: Pick<DictionaryWord, "word" | "phonetic" | "audio">) {
  const handlePlay = () => {
    const audioElement = new Audio(audio)
    audioElement.play()
  }

  return (
    <div className="flex items-start justify-between gap-6 pt-4 md:pt-6">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          {word}
        </h1>
        <p className="text-lg font-semibold text-primary md:text-xl">
          {phonetic}
        </p>
      </div>

      {audio && (
        <Button
          variant="default"
          size="icon-lg"
          className="h-14 w-14 rounded-full bg-primary/10 text-primary shadow-none hover:bg-primary/20"
          aria-label="Play pronunciation"
          onClick={handlePlay}
        >
          <PlayIcon className="h-6 w-6" />
        </Button>
      )}
    </div>
  )
}

export default Word
