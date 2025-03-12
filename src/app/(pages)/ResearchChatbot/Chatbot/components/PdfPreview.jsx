"use client";

import { useState, useEffect, useRef } from 'react';
import * as pdfjsLib from 'pdfjs-dist';

const pdfjsWorkerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

export default function PdfPreview({ pdfFile, relevantPage = null }) {
  const [numPages, setNumPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [pdfUrl, setPdfUrl] = useState(null);
  const [highlightedText, setHighlightedText] = useState("");
  
  // Create a URL for the PDF file to use in the iframe
  useEffect(() => {
    if (!pdfFile) return;
    
    // Create a blob URL from the file
    const url = URL.createObjectURL(pdfFile);
    setPdfUrl(url);
    
    // Get total page count for navigation controls
    const getPageCount = async () => {
      try {
        const arrayBuffer = await pdfFile.arrayBuffer();
        const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
        const pdfDocument = await loadingTask.promise;
        setNumPages(pdfDocument.numPages);
      } catch (error) {
        console.error('Error getting page count:', error);
      }
    };
    
    getPageCount();
    setIsLoading(false);
    
    // Cleanup the URL when component unmounts
    return () => {
      if (url) URL.revokeObjectURL(url);
    };
  }, [pdfFile]);
  
  // Update current page when relevant page changes from chat
  useEffect(() => {
    if (relevantPage !== null && relevantPage > 0 && relevantPage <= numPages) {
      setCurrentPage(relevantPage);
    }
  }, [relevantPage, numPages]);
  
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  
  const goToNextPage = () => {
    if (currentPage < numPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  
  if (!pdfFile) {
    return (
      <div className="h-full flex items-center justify-center bg-gray-50 text-gray-500">
        No PDF loaded
      </div>
    );
  }
  
  return (
    <div className="h-full flex flex-col">
      {/* PDF Controls */}
      <div className="bg-gray-100 p-2 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <button 
            onClick={goToPreviousPage} 
            disabled={currentPage <= 1}
            className="px-2 py-1 bg-blue-600 text-white rounded disabled:bg-gray-400"
          >
            ←
          </button>
          <span>
            Page {currentPage} of {numPages || '?'}
          </span>
          <button 
            onClick={goToNextPage} 
            disabled={currentPage >= numPages}
            className="px-2 py-1 bg-blue-600 text-white rounded disabled:bg-gray-400"
          >
            →
          </button>
        </div>
      </div>
      
      {/* PDF Viewer */}
      <div className="flex-grow overflow-hidden bg-gray-200">
        {isLoading ? (
          <div className="h-full flex flex-col items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
            <p className="text-lg">Loading PDF preview...</p>
          </div>
        ) : (
          <iframe
            src={`${pdfUrl}#page=${currentPage}`}
            className="w-full h-full border-0"
            title="PDF Preview"
          />
        )}
      </div>
    </div>
  );
}