import GallerySkeleton from "@/components/gallery/gallery-skeleton"

export default function Loading() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Image Gallery</h1>
      <GallerySkeleton />
    </main>
  )
}
