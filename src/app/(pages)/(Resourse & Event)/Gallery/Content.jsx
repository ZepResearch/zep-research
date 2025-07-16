"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import PocketBase from "pocketbase"
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react"

// Initialize PocketBase client
const pb = new PocketBase("https://zep-research.pockethost.io")

const ImageGallery = () => {
  const [images, setImages] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [totalItems, setTotalItems] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedImage, setSelectedImage] = useState(null)

  const itemsPerPage = 12

  // Function to construct PocketBase image URL
  const getImageUrl = (record, filename = "") => {
    const imageFile = filename || record.image
    return `${pb.baseUrl}/api/files/${record.collectionId}/${record.id}/${record.field}`
  }

  // Function to get thumbnail URL (if you have different sizes)
  const getThumbnailUrl = (record) => {
    return `${getImageUrl(record)}?thumb=400x400`
  }

  // Fetch images from PocketBase
  const fetchImages = async (page) => {
    try {
      setLoading(true)
      setError(null)

      const resultList = await pb.collection("gallery").getList(page, itemsPerPage, {
        sort: "created", // Sort by newest first
        // You can add filters here if needed
        // filter: 'status = "published"',
      })

      setImages(resultList.items )
      setTotalPages(resultList.totalPages)
      setTotalItems(resultList.totalItems)
    } catch (err) {
      console.error("Error fetching images:", err)
      setError("Failed to load images. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  // Load images on component mount and page change
  useEffect(() => {
    fetchImages(currentPage)
  }, [currentPage])

  // Handle page navigation
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
      // Scroll to top when changing pages
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pages = []
    const maxVisiblePages = 5

    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2))
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1)

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1)
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i)
    }

    return pages
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <p className="text-red-500 mb-4">{error}</p>
          <Button onClick={() => fetchImages(currentPage)}>Try Again</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Image Gallery</h1>

      {/* Gallery Stats */}
      <div className="text-center mb-6 text-sm text-muted-foreground">
        Showing {(currentPage - 1) * itemsPerPage + 1} - {Math.min(currentPage * itemsPerPage, totalItems)} of{" "}
        {totalItems} images
      </div>

      {/* Loading State */}
      {loading ? (
        <div className="flex justify-center items-center py-12">
          <Loader2 className="h-8 w-8 animate-spin" />
          <span className="ml-2">Loading images...</span>
        </div>
      ) : (
        <>
          {/* Image Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {images.map((record) => (
              <Dialog key={record.id}>
                <DialogTrigger asChild>
                  <div
                    className="relative aspect-square cursor-pointer hover:opacity-80 transition-opacity group"
                    onClick={() => setSelectedImage(record)}
                  >
                    <Image
                      src={getThumbnailUrl(record) || "/placeholder.svg"}
                      alt={record.title || `Gallery image ${record.id}`}
                      fill
                      className="object-cover rounded-lg"
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                      loading="lazy"
                      onError={(e) => {
                        // Fallback to original image if thumbnail fails
                        const target = e.target 
                        target.src = getImageUrl(record)
                      }}
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 rounded-lg" />
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <DialogTitle className="sr-only">{record.title || `Gallery image ${record.id}`}</DialogTitle>
                  <div className="relative">
                    <Image
                      src={getImageUrl(record) || "/placeholder.svg"}
                      alt={record.title || `Enlarged image ${record.id}`}
                      width={800}
                      height={600}
                      className="w-full h-auto object-contain max-h-[80vh]"
                      priority
                    />
                    {/* Image info */}
                    {(record.title || record.description) && (
                      <div className="mt-4 text-center">
                        {record.title && <h3 className="text-lg font-semibold">{record.title}</h3>}
                        {record.description && (
                          <p className="text-sm text-muted-foreground mt-1">{record.description}</p>
                        )}
                      </div>
                    )}
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-2">
              {/* Previous Button */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4" />
                Previous
              </Button>

              {/* First page */}
              {getPageNumbers()[0] > 1 && (
                <>
                  <Button variant={1 === currentPage ? "default" : "outline"} size="sm" onClick={() => goToPage(1)}>
                    1
                  </Button>
                  {getPageNumbers()[0] > 2 && <span className="px-2">...</span>}
                </>
              )}

              {/* Page numbers */}
              {getPageNumbers().map((pageNum) => (
                <Button
                  key={pageNum}
                  variant={pageNum === currentPage ? "default" : "outline"}
                  size="sm"
                  onClick={() => goToPage(pageNum)}
                >
                  {pageNum}
                </Button>
              ))}

              {/* Last page */}
              {getPageNumbers()[getPageNumbers().length - 1] < totalPages && (
                <>
                  {getPageNumbers()[getPageNumbers().length - 1] < totalPages - 1 && <span className="px-2">...</span>}
                  <Button
                    variant={totalPages === currentPage ? "default" : "outline"}
                    size="sm"
                    onClick={() => goToPage(totalPages)}
                  >
                    {totalPages}
                  </Button>
                </>
              )}

              {/* Next Button */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}

          {/* Empty state */}
          {images.length === 0 && !loading && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No images found in the gallery.</p>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default ImageGallery
