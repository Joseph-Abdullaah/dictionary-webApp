import { Skeleton } from "@/components/ui/skeleton"

function WordSkeleton() {
  return (
    <div className="flex items-start justify-between gap-6 pt-4 md:pt-6">
      <div className="space-y-2">
        <Skeleton className="h-10 w-40 md:h-12 md:w-48" />
        <Skeleton className="h-6 w-24 md:h-7 md:w-28" />
      </div>
      <Skeleton className="h-14 w-14 rounded-full" />
    </div>
  )
}

export default WordSkeleton
