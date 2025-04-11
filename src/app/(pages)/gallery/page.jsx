import { Suspense } from "react"
import GalleryGrid from "@/components/gallery/gallery-grid"
import GallerySkeleton from "@/components/gallery/gallery-skeleton"
import { getGalleryImages } from "@/lib/pocketbase"

export const metadata = {
  title: "Image Gallery",
  description: "A beautiful gallery of optimized images",
}

export default async function GalleryPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Image Gallery</h1>
      <Suspense fallback={<GallerySkeleton />}>
        <GalleryContent />
      </Suspense>
    </main>
  )
}

async function GalleryContent() {
  const images = await getGalleryImages()

  return <GalleryGrid images={images} />
}
