"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Card, CardContent } from "@/components/ui/card"



export default function GalleryGrid({ images }) {
  const [selectedImage, setSelectedImage] = useState(null)

  if (!images.length) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No images found in the gallery.</p>
      </div>
    )
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image) => (
          <Card
            key={image.id}
            className="overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-lg"
            onClick={() => setSelectedImage(image)}
          >
            <CardContent className="p-0 relative aspect-square">
              <Image
                src={`${process.env.NEXT_PUBLIC_POCKETBASE_URL}/api/files/gallery/${image.id}/${image.image}`}
                alt={image.title || "Gallery image"}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAEtAJJXIDTjwAAAABJRU5ErkJggg=="
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              {image.title && (
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white font-medium truncate">{image.title}</h3>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          {selectedImage && (
            <>
              <DialogTitle  className="sr-only">{selectedImage.title || "Gallery Image"}</DialogTitle>
              <div className="relative aspect-[4/3] w-full max-h-[80vh]">
                <Image
                  src={`${process.env.NEXT_PUBLIC_POCKETBASE_URL}/api/files/gallery/${selectedImage.id}/${selectedImage.image}`}
                  alt={selectedImage.title || "Gallery image"}
                  fill
                  sizes="100vw"
                  priority
                  className="object-contain"
                />
                {selectedImage.title && (
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <h2 className="text-white text-xl font-medium">{selectedImage.title}</h2>
                    {selectedImage.description && <p className="text-white/80 mt-1">{selectedImage.description}</p>}
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
