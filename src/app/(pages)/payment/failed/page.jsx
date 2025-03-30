"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, RefreshCw, HelpCircle, ArrowLeft } from "lucide-react"

export default function PaymentFailedPage() {
  const router = useRouter()
  const [errorCode, setErrorCode] = useState("unknown")
  const [errorMessage, setErrorMessage] = useState("An unexpected error occurred during payment processing.")
  
  // Extract error details from URL if available
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search)
      const code = urlParams.get('code')
      const message = urlParams.get('message')
      
      if (code) setErrorCode(code)
      if (message) setErrorMessage(decodeURIComponent(message))
    }
  }, [])

  const handleTryAgain = () => {
    router.push("/")
  }

  const handleContactSupport = () => {
    router.push("/contact")
  }

  const handleGoBack = () => {
    router.back()
  }

  // Map common error codes to user-friendly messages
  const getErrorExplanation = (code) => {
    const errorExplanations = {
      "insufficient_funds": "Your payment method has insufficient funds. Please try a different payment method.",
      "card_declined": "Your card was declined. Please contact your bank or try a different payment method.",
      "expired_card": "Your card has expired. Please update your payment information and try again.",
      "invalid_details": "The payment details you provided are invalid. Please check and try again.",
      "processing_error": "There was an error processing your payment. This is usually temporary.",
      "network_error": "A network error occurred. Please check your internet connection and try again."
    }
    
    return errorExplanations[code] || "There was an issue processing your payment. Please try again or contact support."
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-orange-50 dark:from-gray-950 dark:to-red-950 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-xl border-red-200 dark:border-red-900">
        <CardHeader className="text-center pb-2">
          <div className="mx-auto w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-4">
            <AlertCircle className="h-10 w-10 text-red-600 dark:text-red-400" />
          </div>
          <CardTitle className="text-2xl font-bold text-red-800 dark:text-red-300">Payment Failed</CardTitle>
          <CardDescription className="text-red-700 dark:text-red-400">
            We were unable to process your payment.
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="bg-white dark:bg-red-900/10 rounded-lg p-6 shadow-sm">
            <div className="space-y-4">
              <div className="border-b border-gray-100 dark:border-gray-800 pb-3">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Error Details</h3>
                <p className="text-lg font-medium">{errorMessage}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">What This Means</h3>
                <p className="mt-1 text-gray-600 dark:text-gray-300">
                  {getErrorExplanation(errorCode)}
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg">
            <div className="flex items-start">
              <HelpCircle className="h-5 w-5 mr-2 text-amber-600 dark:text-amber-400 mt-0.5" />
              <div>
                <h3 className="font-medium text-amber-800 dark:text-amber-300 text-sm">Need Help?</h3>
                <p className="text-xs text-amber-700 dark:text-amber-400 mt-1">
                  If you continue to experience issues, please contact our support team for assistance.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="flex flex-col space-y-2">
          <Button 
            className="w-full bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-600" 
            onClick={handleTryAgain}
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Try Again
          </Button>
          <div className="flex justify-between w-full gap-4">
            <Button variant="outline" className="w-1/2" onClick={handleGoBack}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </Button>
            <Button variant="outline" className="w-1/2" onClick={handleContactSupport}>
              <HelpCircle className="mr-2 h-4 w-4" />
              Contact Support
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}