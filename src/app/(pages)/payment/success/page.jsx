"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Home, ArrowRight } from "lucide-react"

export default function PaymentSuccessPage() {
  const router = useRouter()
  const [countdown, setCountdown] = useState(5)
  const [redirectUrl, setRedirectUrl] = useState("/dashboard")

  // Extract query parameters and handle redirection
  useEffect(() => {
    // Get any query parameters that might have been passed
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search)
      const redirect = urlParams.get('redirect')
      
      // Set redirect URL from query parameter or use default
      if (redirect) {
        setRedirectUrl(redirect)
      }
    }
  }, [])

  // Separate useEffect for countdown and redirect
  useEffect(() => {
    let timer = null
    
    if (countdown > 0) {
      timer = setInterval(() => {
        setCountdown(prev => prev - 1)
      }, 1000)
    } else if (countdown === 0) {
      // Only redirect when countdown reaches 0
      router.push(redirectUrl)
    }
    
    return () => {
      if (timer) clearInterval(timer)
    }
  }, [countdown, redirectUrl, router])

  const handleGoHome = () => {
    router.push("/")
  }

  const handleContinue = () => {
    router.push(redirectUrl)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-xl border-green-200 dark:border-green-800">
        <CardHeader className="text-center pb-2">
          <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-800/30 rounded-full flex items-center justify-center mb-4">
            <CheckCircle className="h-10 w-10 text-green-600 dark:text-green-400" />
          </div>
          <CardTitle className="text-2xl font-bold text-green-800 dark:text-green-300">Payment Successful!</CardTitle>
          <CardDescription className="text-green-700 dark:text-green-400">
            Your transaction has been completed successfully.
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="bg-white dark:bg-green-900/10 rounded-lg p-6 shadow-sm">
            <div className="space-y-4">
              <div className="border-b border-gray-100 dark:border-gray-800 pb-3">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Transaction Details</h3>
                <p className="text-lg font-medium">Payment ID: #28794631</p>
              </div>
              
              <div className="border-b border-gray-100 dark:border-gray-800 pb-3">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Date</h3>
                <p className="text-lg font-medium">{new Date().toLocaleDateString()}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Status</h3>
                <div className="flex items-center mt-1">
                  <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                  <p className="font-medium text-green-700 dark:text-green-400">Completed</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              A confirmation email has been sent to your registered email address.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
              Redirecting in {countdown} seconds...
            </p>
          </div>
        </CardContent>
        
        <CardFooter className="flex justify-between space-x-4">
          <Button variant="outline" className="w-1/2" onClick={handleGoHome}>
            <Home className="mr-2 h-4 w-4" />
            Home
          </Button>
          <Button className="w-1/2 bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600" onClick={handleContinue}>
            Continue
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}