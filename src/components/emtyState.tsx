import { Card, CardContent } from "@/components/ui/card"
import { SearchIcon } from "lucide-react"

function EmptyState() {
  return (
    <Card size="default" className="items-center text-center">
      <CardContent className="space-y-3">
        <SearchIcon className="mx-auto h-12 w-12 text-muted-foreground" />
        <div className="space-y-1">
          <p className="text-base font-semibold">Start by searching</p>
          <p className="text-sm text-muted-foreground">
            Enter a word above and we&apos;ll show you the definition.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

export default EmptyState;