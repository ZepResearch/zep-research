"use client";

import { useState } from 'react';
import Chat from './components/Chat';
import FileUpload from './components/FileUpload';
import PdfPreview from './components/PdfPreview';

export default function ResearchChatbot() {
  const [pdfContent, setPdfContent] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [fileName, setFileName] = useState("");
  const [relevantPage, setRelevantPage] = useState(1);

  const handleRelevantPageFound = (page) => {
    if (page && !isNaN(page)) {
      setRelevantPage(page);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-8">Research Paper PDF Chatbot</h1>
      
      {!pdfContent ? (
        <div className="w-full max-w-4xl">
          <FileUpload 
            setPdfContent={setPdfContent} 
            setPdfFile={setPdfFile}
            isProcessing={isProcessing} 
            setIsProcessing={setIsProcessing}
            setFileName={setFileName}
          />
        </div>
      ) : (
        <div className="w-full h-[80vh] flex flex-col md:flex-row gap-4">
          {/* PDF Preview Panel - Takes 50% width on larger screens */}
          <div className="w-full md:w-1/2 h-[40vh] md:h-full">
            <div className="h-full flex flex-col">
              <div className="bg-gray-100 p-2 rounded-t-lg flex justify-between items-center">
                <p className="font-medium truncate">
                  <span className="font-bold">{fileName}</span>
                </p>
                <button 
                  onClick={() => {
                    setPdfContent(null);
                    setPdfFile(null);
                  }}
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                >
                  Reset
                </button>
              </div>
              <div className="flex-grow border border-gray-300 rounded-b-lg overflow-hidden">
                <PdfPreview 
                  pdfFile={pdfFile}
                  relevantPage={relevantPage}
                />
              </div>
            </div>
          </div>
          
          {/* Chat Panel - Takes 50% width on larger screens */}
          <div className="w-full md:w-1/2 h-[40vh] md:h-full">
            <Chat 
              pdfContent={pdfContent}
              onRelevantPageFound={handleRelevantPageFound}
            />
          </div>
        </div>
      )}
    </main>
  );
}