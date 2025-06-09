import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-gray-200", className)}
      {...props}
    />
  )
}

function SkeletonCard() {
  return (
    <div className="h-full overflow-hidden border rounded-lg bg-white">
      <Skeleton className="h-48 w-full rounded-none" />
      <div className="p-6 space-y-4">
        <Skeleton className="h-6 w-3/4" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-4/6" />
        </div>
        <div className="flex flex-wrap gap-2">
          <Skeleton className="h-6 w-16 rounded-full" />
          <Skeleton className="h-6 w-20 rounded-full" />
          <Skeleton className="h-6 w-14 rounded-full" />
        </div>
        <div className="pt-4 border-t">
          <Skeleton className="h-9 w-full" />
        </div>
      </div>
    </div>
  )
}

function SkeletonHero() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-sky-900">
      <div className="text-center space-y-8 max-w-4xl mx-auto px-4">
        <Skeleton className="h-8 w-48 mx-auto bg-white/20" />
        <div className="space-y-4">
          <Skeleton className="h-16 w-full bg-white/20" />
          <Skeleton className="h-16 w-5/6 mx-auto bg-white/20" />
        </div>
        <Skeleton className="h-6 w-3/4 mx-auto bg-white/10" />
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Skeleton className="h-12 w-48 bg-white/20" />
          <Skeleton className="h-12 w-48 bg-white/10" />
        </div>
      </div>
    </div>
  )
}

export { Skeleton, SkeletonCard, SkeletonHero } 