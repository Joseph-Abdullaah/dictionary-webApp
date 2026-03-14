import { Skeleton } from "@/components/ui/skeleton"

function SourceSkeleton() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Skeleton className="h-4 w-16" />
      <div className="flex items-center gap-1.5">
        <Skeleton className="h-4 w-48" />
        <Skeleton className="h-3.5 w-3.5 md:h-4 md:w-4" />
      </div>
    </div>
  )
}

export default SourceSkeleton
