// components/skeleton-blog-card.jsx
import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonBlogCard() {
  return (
    <div className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-100 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-200 via-gray-100/40" />
      <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-200/10" />
      <Skeleton className="h-6 w-3/4 mb-2" />
      <Skeleton className="h-4 w-1/2" />
    </div>
  );
}