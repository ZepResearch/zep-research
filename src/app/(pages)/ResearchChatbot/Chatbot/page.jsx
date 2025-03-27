"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { isUserAuthenticated } from "@/lib/pocketbase"
import { 
  ToastProvider, 
  ToastViewport, 
 
} from "@/components/ui/toast"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { ArrowLeft } from "lucide-react"
import Chat from "./components/chat"
import { Card } from "@/components/ui/card"
import FileUpload from "./components/FileUpload"
import PdfPreview from "./components/PdfPreview"

export default function ResearchChatbot() {
  const [pdfContent, setPdfContent] = useState(null)
  const [pdfFile, setPdfFile] = useState(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [fileName, setFileName] = useState("")
  const [relevantPage, setRelevantPage] = useState(1)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  useEffect(() => {
    // Check authentication status when component mounts
    const checkAuth = () => {
      const authenticated = isUserAuthenticated()
      
      if (!authenticated) {
        // Show shadcn toast notification
        toast({
          variant: "destructive",
          title: "Authentication Required",
          description: "Please log in to access the Research Chatbot",
        })
        
        // Redirect to login page
        router.push("/login")
      } else {
        setIsAuthenticated(true)

        // Check if user has reached their message limit
        const checkMessageLimit = async () => {
          try {
            const { hasReachedMessageLimit } = await import("@/lib/message-limit")
            const limitReached = await hasReachedMessageLimit()

            if (limitReached) {
              toast({
                variant: "warning",
                title: "Message Limit Reached",
                description: "You've reached your free message limit. Please upgrade to continue.",
              })

              // Redirect to payment page
              router.push("/payment")
            }
          } catch (error) {
            console.error("Error checking message limit:", error)
          }
        }

        checkMessageLimit()
      }
    }

    checkAuth()
  }, [router, toast])

  if (!isAuthenticated) {
    return null // Or a loading indicator
  }


  const handleRelevantPageFound = (page) => {
    if (page && !isNaN(page)) {
      setRelevantPage(page)
    }
  }

  return (
    <ToastProvider>
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 mt-12">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          {!pdfContent ? (
            <div className="max-w-3xl mx-auto pt-12">
              <div className="text-center mb-12">
                <h1 className="text-3xl font-bold tracking-tight mb-2">Research Paper Assistant</h1>
                <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">
                  Upload your research paper and chat with an AI that understands its content
                </p>
              </div>
              <FileUpload
                setPdfContent={setPdfContent}
                setPdfFile={setPdfFile}
                isProcessing={isProcessing}
                setIsProcessing={setIsProcessing}
                setFileName={setFileName}
              />
            </div>
          ) : (
            <div className="flex flex-col h-screen">
              <div className="flex items-center justify-between py-4">
                <div className="flex items-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      setPdfContent(null)
                      setPdfFile(null)
                    }}
                    className="mr-2"
                  >
                    <ArrowLeft className="h-5 w-5" />
                  </Button>
                  <h2 className="text-xl font-semibold truncate max-w-md">{fileName}</h2>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6  pb-6">
                {/* PDF Preview Panel */}
                <Card className="border-0 shadow-lg overflow-hidden bg-white dark:bg-gray-800 flex flex-col h-full">
                  <PdfPreview pdfFile={pdfFile} relevantPage={relevantPage} />
                </Card>

                {/* Chat Panel */}
                <Card className="border-0 shadow-lg overflow-hidden  dark:bg-gray-800 flex flex-col h-[650px]">
                  <Chat pdfContent={pdfContent} onRelevantPageFound={handleRelevantPageFound} />
                </Card>
              </div>
            </div>
          )}
        </div>
        <ToastViewport />
      </main>
    </ToastProvider>
  )
}