"use client"


import { useState, useEffect, useRef } from "react"
import * as pdfjsLib from "pdfjs-dist"
import { X, HelpCircle, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

const pdfjsWorkerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js"




export default function FileUpload({
  setPdfContent,
  setPdfFile,
  isProcessing,
  setIsProcessing,
  setFileName,
}) {
  const [dragActive, setDragActive] = useState(false)
  const [error, setError] = useState("")
  const [uploadedFiles, setUploadedFiles] = useState([])
  const fileInputRef = useRef(null)

  useEffect(() => {
    pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorkerSrc
  }, [])

  const handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const formatFileSize = (bytes) => {
    if (bytes < 1024) return bytes + "B"
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + "KB"
    return (bytes / (1024 * 1024)).toFixed(1) + "MB"
  }

  const processPdf = async (file) => {
    if (file.type !== "application/pdf") {
      setError("Please upload a PDF file")
      return
    }

    setError("")
    setIsProcessing(true)
    setFileName(file.name)
    setPdfFile(file)

    // Add file to uploaded files list
    setUploadedFiles([
      {
        file,
        size: formatFileSize(file.size),
        status: "Uploaded",
      },
    ])

    try {
      // Read the file as ArrayBuffer
      const arrayBuffer = await file.arrayBuffer()

      // Load the PDF document
      const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer })
      const pdfDocument = await loadingTask.promise

      // Extract text from all pages
      let fullText = ""
      for (let i = 1; i <= pdfDocument.numPages; i++) {
        const page = await pdfDocument.getPage(i)
        const textContent = await page.getTextContent()
        const pageText = textContent.items.map((item) => item.str).join(" ")
        fullText += pageText + "\n\n"
      }

      // Set the extracted text
      setPdfContent(fullText)
    } catch (err) {
      console.error("Error processing PDF:", err)
      setError("Error processing PDF. Please try again.")
    } finally {
      setIsProcessing(false)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processPdf(e.dataTransfer.files[0])
    }
  }

  const handleChange = (e) => {
    e.preventDefault()
    if (e.target.files && e.target.files[0]) {
      processPdf(e.target.files[0])
    }
  }

  const handleRemoveFile = (index) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index))
    setPdfFile(null)
    setPdfContent("")
  }

  return (
    <div className="space-y-10 max-w-xl mx-auto drop-shadow-2xl bg-white p-12 rounded-3xl mt-12">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Upload files</h2>
      </div>

      <div
        className={`border-2 border-dashed rounded-lg p-8 ${
          dragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="relative flex">
            {/* Colorful document icons */}
            <div className="w-16 h-20 bg-green-200 rounded-lg absolute -left-4 -rotate-6 flex items-center justify-center">
              <div className="w-10 h-2 bg-green-300 mb-6"></div>
              <div className="w-10 h-2 bg-green-300 mb-2"></div>
              <div className="w-10 h-2 bg-green-300 mt-2"></div>
            </div>
            <div className="w-16 h-20 bg-blue-200 rounded-lg z-10 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full border-2 border-blue-300 flex items-center justify-center">
                <span className="text-blue-400 text-xl">+</span>
              </div>
            </div>
            <div className="w-16 h-20 bg-purple-200 rounded-lg absolute -right-4 rotate-6 flex items-center justify-center">
              <div className="w-10 h-2 bg-purple-300 mb-6"></div>
              <div className="w-10 h-2 bg-purple-300 mb-2"></div>
              <div className="w-10 h-2 bg-purple-300 mt-2"></div>
            </div>
          </div>

          <p className="text-base font-medium">Drag and drop files here</p>

          <button
            onClick={() => fileInputRef.current?.click()}
            className="text-blue-500 hover:text-blue-700 text-sm"
            disabled={isProcessing}
          >
            Or choose a file
          </button>

          <input
            ref={fileInputRef}
            type="file"
            id="file-upload"
            className="hidden"
            accept=".pdf,.doc,.docx"
            onChange={handleChange}
            disabled={isProcessing}
          />
        </div>
      </div>

      <div className="flex justify-between text-xs text-gray-500">
        <span>Accepted format only pdf</span>
        <span>Maximum file size: 5MB</span>
      </div>

      {/* Uploaded files list */}
      <div className="space-y-2">
        {uploadedFiles.map((file, index) => (
          <div key={index} className="flex items-center justify-between border rounded-lg p-3">
            <div className="flex items-center space-x-3">
              <div className="bg-red-100 text-red-800 p-2 rounded">
                <FileText size={16} />
              </div>
              <div>
                <p className="text-sm font-medium">{file.file.name}</p>
                <p className="text-xs text-gray-500">
                  {file.size} • {file.status}
                </p>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={() => handleRemoveFile(index)} disabled={isProcessing}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      {/* Action buttons */}
      <div className="flex justify-between items-center pt-2">
        <div className="flex space-x-2">
          <Button
            variant="default"
            disabled={isProcessing || uploadedFiles.length === 0}
            className="bg-black hover:bg-gray-800 text-white"
          >
            Save
          </Button>
          <Button variant="outline" disabled={isProcessing}>
            Cancel
          </Button>
        </div>
        <Button variant="ghost" size="sm" className="text-gray-500">
          <HelpCircle className="h-4 w-4 mr-1" />
          Help
        </Button>
      </div>
    </div>
  )
}

