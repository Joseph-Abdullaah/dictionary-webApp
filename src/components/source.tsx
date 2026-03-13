import { ExternalLinkIcon } from "lucide-react"
type SourceProps = {
  sourceUrls: string[]
}

function Source({ sourceUrls }: SourceProps) {
  const firstUrl = sourceUrls?.[0]

  return (
    <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground md:text-sm">
      <span className="tracking-[0.2em] uppercase">Source</span>
      <div className="flex items-center gap-1.5">
        {firstUrl ? (
          <>
            <a
              href={firstUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-xs text-foreground underline underline-offset-4 hover:text-primary md:text-sm"
            >
              {firstUrl}
            </a>
            <ExternalLinkIcon className="h-3.5 w-3.5 text-muted-foreground md:h-4 md:w-4" />
          </>
        ) : (
          <span className="text-xs text-foreground md:text-sm">No source</span>
        )}
      </div>
    </div>
  )
}

export default Source
