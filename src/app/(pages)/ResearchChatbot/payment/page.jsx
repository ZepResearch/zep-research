"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, PhoneCall, Mail, ExternalLink } from "lucide-react"

export default function PaymentPage() {
  const router = useRouter()

  const handleContactRedirect = () => {
    router.push("/contact")
  }

  const handleContinueWithLimit = () => {
    router.push("/ResearchChatbot/Chatbot")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">AI Credits Exhausted</CardTitle>
          <CardDescription>
            You've reached your free message limit. Contact us to upgrade for unlimited access.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
            <h3 className="font-medium flex items-center mb-4">
              <MessageCircle className="h-5 w-5 mr-2 text-blue-500" />
              Premium Access Benefits
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center">
                <div className="h-4 w-4 mr-2 rounded-full bg-blue-500 flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                Unlimited chatbot interactions
              </li>
              <li className="flex items-center">
                <div className="h-4 w-4 mr-2 rounded-full bg-blue-500 flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                Advanced research capabilities
              </li>
              <li className="flex items-center">
                <div className="h-4 w-4 mr-2 rounded-full bg-blue-500 flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                Priority support and assistance
              </li>
              <li className="flex items-center">
                <div className="h-4 w-4 mr-2 rounded-full bg-blue-500 flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                Enhanced document analysis features
              </li>
            </ul>
          </div>

          <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-lg space-y-4">
            <h3 className="font-medium">Contact Us For Premium Access</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Our team is ready to help you upgrade to premium access and answer any questions you might have about our services.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-sm">
                <PhoneCall className="h-4 w-4 mr-2 text-amber-600 dark:text-amber-400" />
                <span>Call us: +91 7848854815</span>
              </div>
              <div className="flex items-center text-sm">
                <Mail className="h-4 w-4 mr-2 text-amber-600 dark:text-amber-400" />
                <span>Email: info@zepresearch.com</span>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <Button className="w-full" onClick={handleContactRedirect}>
            <Mail className="mr-2 h-4 w-4" />
            Contact Us For Premium Access
          </Button>
          <Button variant="outline" className="w-full" onClick={handleContinueWithLimit}>
            Continue with limited access
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}