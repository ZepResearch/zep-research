"use client"

import { useState, useEffect } from "react"
import * as pdfjsLib from "pdfjs-dist"
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const pdfjsWorkerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js"

export default function PdfPreview({ pdfFile, relevantPage = null }) {
  const [numPages, setNumPages] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const [pdfUrl, setPdfUrl] = useState(null)

  // Create a URL for the PDF file to use in the iframe
  useEffect(() => {
    if (!pdfFile) return

    // Create a blob URL from the file
    const url = URL.createObjectURL(pdfFile)
    setPdfUrl(url)

    // Get total page count for navigation controls
    const getPageCount = async () => {
      try {
        pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorkerSrc
        const arrayBuffer = await pdfFile.arrayBuffer()
        const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer })
        const pdfDocument = await loadingTask.promise
        setNumPages(pdfDocument.numPages)
      } catch (error) {
        console.error("Error getting page count:", error)
      } finally {
        setIsLoading(false)
      }
    }

    getPageCount()

    // Cleanup the URL when component unmounts
    return () => {
      if (url) URL.revokeObjectURL(url)
    }
  }, [pdfFile])

  // Update current page when relevant page changes from chat
  useEffect(() => {
    if (relevantPage !== null && relevantPage > 0 && relevantPage <= numPages) {
      setCurrentPage(relevantPage)
    }
  }, [relevantPage, numPages])

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const goToNextPage = () => {
    if (currentPage < numPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  if (!pdfFile) {
    return (
      <div className="h-full flex items-center justify-center bg-gray-50 dark:bg-gray-900 text-gray-500 dark:text-gray-400">
        No PDF loaded
      </div>
    )
  }

  return (
    <div className="flex flex-col h-full">
      {/* PDF Controls */}
      <div className="p-3 border-b dark:border-gray-700 flex items-center justify-between">
        <h3 className="font-medium">Document Preview</h3>
        <div className="flex items-center space-x-1">
          <Button
            variant="outline"
            size="icon"
            onClick={goToPreviousPage}
            disabled={currentPage <= 1 || isLoading}
            className="h-8 w-8"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-sm px-2">{isLoading ? "Loading..." : `${currentPage} / ${numPages || "?"}`}</span>
          <Button
            variant="outline"
            size="icon"
            onClick={goToNextPage}
            disabled={currentPage >= numPages || isLoading}
            className="h-8 w-8"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* PDF Viewer */}
      <div className="flex-grow relative bg-gray-100 dark:bg-gray-900">
        {isLoading ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <Loader2 className="h-8 w-8 text-blue-600 dark:text-blue-400 animate-spin mb-2" />
            <p className="text-sm text-gray-600 dark:text-gray-400">Loading document...</p>
          </div>
        ) : (
          <iframe src={`${pdfUrl}#page=${currentPage}`} className="w-full h-full border-0" title="PDF Preview" />
        )}
      </div>
    </div>
  )
}

