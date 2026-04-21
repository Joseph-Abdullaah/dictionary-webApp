import { Card, CardContent } from "@/components/ui/card"
import type { DictionaryApiError } from "@/types/formatDataTypes"

interface ErrorStateProps {
  error: DictionaryApiError | null
}

function ErrorState({ error }: ErrorStateProps) {
  return (
    <Card size="sm">
      <CardContent className="space-y-2">
        <p className="text-xl text-center font-semibold">{error?.title ?? "Error"}</p>
        <p className="text-xs text-center text-muted-foreground">
          {error?.message ?? "An unexpected error occurred"}
        </p>
        {error?.resolution && (
          <p className="text-xs text-center text-muted-foreground">{error.resolution}</p>
        )}
      </CardContent>
    </Card>
  )
}

export default ErrorState
