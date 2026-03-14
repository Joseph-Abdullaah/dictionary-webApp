import { Skeleton } from "@/components/ui/skeleton"

function MeaningsSkeleton() {
  return (
    <section className="space-y-6">
      <div className="flex items-center gap-4">
        <Skeleton className="h-6 w-16 md:h-7 md:w-20" />
        <Skeleton className="h-px flex-1" />
      </div>

      <div className="space-y-4">
        <Skeleton className="h-4 w-16" />
        <div className="space-y-3">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-11/12" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      </div>

      <div className="mt-4 flex items-baseline gap-3">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-5 w-32" />
      </div>
    </section>
  )
}

export default MeaningsSkeleton
