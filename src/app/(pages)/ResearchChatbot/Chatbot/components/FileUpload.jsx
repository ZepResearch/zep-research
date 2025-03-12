"use client";

import { useState, useEffect } from 'react';
import * as pdfjsLib from 'pdfjs-dist';

const pdfjsWorkerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

export default function FileUpload({ 
  setPdfContent, 
  setPdfFile, // Add this prop to store the file for preview
  isProcessing, 
  setIsProcessing, 
  setFileName 
}) {
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState("");
  
  useEffect(() => {
    pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorkerSrc;
  }, []);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const processPdf = async (file) => {
    if (file.type !== "application/pdf") {
      setError("Please upload a PDF file");
      return;
    }
    
    setError("");
    setIsProcessing(true);
    setFileName(file.name);
    setPdfFile(file); // Store the file for preview

    try {
      // Read the file as ArrayBuffer
      const arrayBuffer = await file.arrayBuffer();
      
      // Load the PDF document
      const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
      const pdfDocument = await loadingTask.promise;
      
      // Extract text from all pages
      let fullText = "";
      for (let i = 1; i <= pdfDocument.numPages; i++) {
        const page = await pdfDocument.getPage(i);
        const textContent = await page.getTextContent();
        const pageText = textContent.items.map(item => item.str).join(' ');
        fullText += pageText + "\n\n";
      }
      
      // Set the extracted text
      setPdfContent(fullText);
    } catch (err) {
      console.error('Error processing PDF:', err);
      setError("Error processing PDF. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };
  
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processPdf(e.dataTransfer.files[0]);
    }
  };
  
  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      processPdf(e.target.files[0]);
    }
  };
  
  return (
    <div className="w-full">
      <div 
        className={`border-2 border-dashed p-10 rounded-lg text-center ${
          dragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"
        } ${isProcessing ? "opacity-50" : ""}`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          type="file"
          id="file-upload"
          className="hidden"
          accept=".pdf"
          onChange={handleChange}
          disabled={isProcessing}
        />
        <label 
          htmlFor="file-upload" 
          className="cursor-pointer font-medium text-blue-600 hover:text-blue-800"
        >
          {isProcessing ? (
            <div className="flex flex-col items-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mb-2"></div>
              <p>Processing PDF...</p>
            </div>
          ) : (
            <>
              <p className="text-lg mb-2">Upload a research paper PDF to start chatting</p>
              <p className="text-gray-500 mb-4">Drag and drop or click to browse</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                Select PDF
              </button>
            </>
          )}
        </label>
      </div>
      {error && (
        <p className="text-red-500 mt-2">{error}</p>
      )}
    </div>
  );
}