"use client"
import { useState, useEffect, useCallback, useRef } from "react"
import Image from "next/image"
import PocketBase from "pocketbase"
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react"

// Initialize PocketBase client outside component to avoid recreating
const pb = new PocketBase("https://zep-research.pockethost.io")

// Disable auto-cancellation
pb.autoCancellation(false)

const ImageGallery = () => {
  const [images, setImages] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [totalItems, setTotalItems] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedImage, setSelectedImage] = useState(null)
  
  // Use ref to track mounted state and prevent state updates after unmount
  const isMounted = useRef(true)
  const abortControllerRef = useRef(null)

  const itemsPerPage = 12

  // Get the correct file field name from record
  const getFileField = useCallback((record) => {
    // Common field names for images in PocketBase
    const possibleFields = ['image', 'file', 'photo', 'picture', 'media', 'avatar']
    
    for (const field of possibleFields) {
      if (record[field]) {
        return record[field]
      }
    }
    
    // If no common field found, try to find any field that looks like a filename
    for (const key in record) {
      if (typeof record[key] === 'string' && 
          (record[key].includes('.jpg') || 
           record[key].includes('.jpeg') || 
           record[key].includes('.png') || 
           record[key].includes('.gif') || 
           record[key].includes('.webp'))) {
        return record[key]
      }
    }
    
    return null
  }, [])

  // Optimized image URL construction
  const getImageUrl = useCallback((record) => {
    if (!record || !record.collectionId || !record.id) return null
    
    const fileField = getFileField(record)
    if (!fileField) return null
    
    return `${pb.baseUrl}/api/files/${record.collectionId}/${record.id}/${fileField}`
  }, [getFileField])

  // Get thumbnail URL with optimization
  const getThumbnailUrl = useCallback((record) => {
    const baseUrl = getImageUrl(record)
    return baseUrl ? `${baseUrl}?thumb=400x400` : null
  }, [getImageUrl])

  // Optimized fetch with proper cancellation handling
  const fetchImages = useCallback(async (page) => {
    // Cancel previous request if it exists
    if (abortControllerRef.current) {
      abortControllerRef.current.abort()
    }

    // Create new abort controller for this request
    abortControllerRef.current = new AbortController()

    try {
      setLoading(true)
      setError(null)

      const resultList = await pb.collection("gallery").getList(page, itemsPerPage, {
        sort: "-created", // Sort by newest first (use - for descending)
        requestKey: `gallery_page_${page}`, // Unique key for this request
        $cancelKey: `gallery_page_${page}`, // Alternative cancellation key
      })

      console.log("Fetched records:", resultList.items) // Debug log to see the data structure

      // Only update state if component is still mounted
      if (isMounted.current) {
        setImages(resultList.items)
        setTotalPages(resultList.totalPages)
        setTotalItems(resultList.totalItems)
      }
    } catch (err) {
      // Ignore cancellation errors
      if (err.isAbort || err.name === 'AbortError') {
        return
      }
      
      console.error("Error fetching images:", err)
      if (isMounted.current) {
        setError("Failed to load images. Please try again.")
      }
    } finally {
      if (isMounted.current) {
        setLoading(false)
      }
    }
  }, [itemsPerPage])

  // Load images on component mount and page change
  useEffect(() => {
    isMounted.current = true
    fetchImages(currentPage)

    return () => {
      isMounted.current = false
      // Cancel any pending requests on unmount
      if (abortControllerRef.current) {
        abortControllerRef.current.abort()
      }
    }
  }, [currentPage, fetchImages])

  // Handle page navigation with optimization
  const goToPage = useCallback((page) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      setCurrentPage(page)
      // Scroll to top when changing pages
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }, [currentPage, totalPages])

  // Memoized page numbers generation
  const pageNumbers = useCallback(() => {
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
  }, [currentPage, totalPages])()

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
      {totalItems > 0 && (
        <div className="text-center mb-6 text-sm text-muted-foreground">
          Showing {(currentPage - 1) * itemsPerPage + 1} -{" "}
          {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems} images
        </div>
      )}

      {/* Loading State */}
      {loading ? (
        <div className="flex justify-center items-center py-12">
          <Loader2 className="h-8 w-8 animate-spin" />
          <span className="ml-2">Loading images...</span>
        </div>
      ) : (
        <>
          {/* Image Grid */}
          {images.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
              {images.map((record) => {
                const thumbnailUrl = getThumbnailUrl(record)
                const fullImageUrl = getImageUrl(record)
                
                // Skip if no valid image URL
                if (!thumbnailUrl || !fullImageUrl) {
                  console.warn("Missing image URL for record:", record.id, record)
                  return null
                }

                return (
                  <Dialog key={record.id}>
                    <DialogTrigger asChild>
                      <div
                        className="relative aspect-square cursor-pointer hover:opacity-80 transition-opacity group overflow-hidden rounded-lg bg-gray-100"
                        onClick={() => setSelectedImage(record)}
                      >
                        <Image
                          src={thumbnailUrl}
                          alt={record.title || `Gallery image ${record.id}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                          loading="lazy"
                          unoptimized={false}
                          onError={(e) => {
                            console.error("Image load error for:", thumbnailUrl)
                            const target = e.target
                            target.src = fullImageUrl
                          }}
                        />
                        {/* Overlay on hover */}
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200" />
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl">
                      <DialogTitle className="sr-only">
                        {record.title || `Gallery image ${record.id}`}
                      </DialogTitle>
                      <div className="relative">
                        <Image
                          src={fullImageUrl}
                          alt={record.title || `Enlarged image ${record.id}`}
                          width={800}
                          height={600}
                          className="w-full h-auto object-contain max-h-[80vh]"
                          priority
                          unoptimized={false}
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
                )
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No images found in the gallery.</p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-2 flex-wrap gap-y-2">
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
              {pageNumbers[0] > 1 && (
                <>
                  <Button
                    variant={1 === currentPage ? "default" : "outline"}
                    size="sm"
                    onClick={() => goToPage(1)}
                  >
                    1
                  </Button>
                  {pageNumbers[0] > 2 && <span className="px-2">...</span>}
                </>
              )}

              {/* Page numbers */}
              {pageNumbers.map((pageNum) => (
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
              {pageNumbers[pageNumbers.length - 1] < totalPages && (
                <>
                  {pageNumbers[pageNumbers.length - 1] < totalPages - 1 && (
                    <span className="px-2">...</span>
                  )}
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
        </>
      )}
    </div>
  )
}

export default ImageGallery