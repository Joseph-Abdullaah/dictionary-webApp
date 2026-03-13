import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import type { Meaning } from "@/types/formatDataTypes"

function Meanings({ meanings }: { meanings: Meaning[] }) {

  return meanings.map((meaning, index) => (
    <section key={index} className="space-y-6">
      <div className="flex items-center gap-4">
        <span className="text-base font-semibold italic md:text-lg">
          {meaning.partOfSpeech}
        </span>
        <Separator className="flex-1" />
      </div>

      <div className="space-y-4">
        <p className="text-xs font-semibold tracking-[0.3em] text-muted-foreground uppercase">
          Meaning
        </p>
        <ul className="list-disc space-y-3 pl-5 text-sm leading-relaxed marker:text-primary md:text-base">
          {meaning.definitions.map((definition, index) => (
            <li key={index}>
              {definition.definition}
              <span className="block text-muted-foreground">
                {definition.example}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 flex flex-wrap items-baseline gap-3 text-sm md:text-base">
        <span className="text-muted-foreground">Synonyms</span>
        {meaning.synonyms.map((synonym, index) => (
          <Button
            variant="link"
            size="sm"
            className="px-0 font-semibold text-primary"
            key={index}
          >
            {synonym}
          </Button>
        ))}
      </div>
    </section>
  ))
}

export default Meanings
