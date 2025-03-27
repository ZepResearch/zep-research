"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { upgradeUserToPremium } from "@/lib/message-limit"
import { CreditCard, Check, Zap } from "lucide-react"

export default function PaymentPage() {
  const [isProcessing, setIsProcessing] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const router = useRouter()

  const handleUpgrade = async () => {
    setIsProcessing(true)

    try {
      // In a real app, you would process payment here
      // For this example, we'll just simulate a successful payment
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // After successful payment, upgrade the user to premium
      const success = await upgradeUserToPremium()

      if (success) {
        setIsSuccess(true)
        setTimeout(() => {
          router.push("/ResearchChatbot/Chatbot")
        }, 2000)
      } else {
        alert("Failed to upgrade account. Please try again.")
      }
    } catch (error) {
      console.error("Payment error:", error)
      alert("Payment processing failed. Please try again.")
    } finally {
      setIsProcessing(false)
    }
  }

  // Modify the handleContinueWithLimit function to not reset the counter
  const handleContinueWithLimit = async () => {
    // Instead of resetting the counter, just redirect back to the chatbot
    router.push("/ResearchChatbot/Chatbot")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Upgrade Your Experience</CardTitle>
          <CardDescription>
            You've reached your free message limit. Upgrade to continue with unlimited messages.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {isSuccess ? (
            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg text-center space-y-2">
              <div className="mx-auto w-12 h-12 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center">
                <Check className="h-6 w-6 text-green-600 dark:text-green-300" />
              </div>
              <h3 className="font-medium text-green-800 dark:text-green-300">Payment Successful!</h3>
              <p className="text-sm text-green-600 dark:text-green-400">
                Your account has been upgraded to premium. Redirecting...
              </p>
            </div>
          ) : (
            <>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                <h3 className="font-medium flex items-center mb-2">
                  <Zap className="h-5 w-5 mr-2 text-blue-500" />
                  Premium Benefits
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-blue-500" />
                    Unlimited messages with your PDFs
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-blue-500" />
                    Priority processing for faster responses
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-blue-500" />
                    Advanced PDF analysis features
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-blue-500" />
                    Save chat history for future reference
                  </li>
                </ul>
              </div>

              <div className="border rounded-lg p-4 flex justify-between items-center">
                <div>
                  <h3 className="font-medium">Premium Plan</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Unlimited access</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">$9.99</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">per month</p>
                </div>
              </div>
            </>
          )}
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          {!isSuccess && (
            <>
              <Button className="w-full" onClick={handleUpgrade} disabled={isProcessing}>
                {isProcessing ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Upgrade Now
                  </span>
                )}
              </Button>
              <Button variant="outline" className="w-full" onClick={handleContinueWithLimit}>
                Continue with limited access
              </Button>
            </>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}

