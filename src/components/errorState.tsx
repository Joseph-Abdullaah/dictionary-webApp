import { Card, CardContent } from "@/components/ui/card"

interface ErrorStateProps {
  title?: string
  message?: string
  resolution?: string
}

function ErrorState({ error }: { error: ErrorStateProps }) {
  return (
    <Card size="sm">
      <CardContent className="space-y-2">
        <p className="text-xl text-center font-semibold">{error.title ?? "Error"}</p>
        <p className="text-xs text-center text-muted-foreground">
          {error.message ?? "An unexpected error occurred"}
        </p>
        {error.resolution && (
          <p className="text-xs text-center text-muted-foreground">{error.resolution}</p>
        )}
      </CardContent>
    </Card>
  )
}

export default ErrorState
