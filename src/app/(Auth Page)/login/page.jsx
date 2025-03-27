"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { useToast } from "@/hooks/use-toast"
import Image from "next/image"
import logox from "../../../assets/whitelogo.svg"
import { getPocketBaseClient, isUserAuthenticated } from "@/lib/pocketbase"

export default function LoginForm() {
  const router = useRouter()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [googleLoading, setGoogleLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  })

  // Check if user is already authenticated
  useEffect(() => {
    if (isUserAuthenticated()) {
      router.push("/dashboard")
    }
  }, [router])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  const notifyAuthChange = () => {
    // Dispatch a custom event that the navbar can listen for
    if (typeof window !== "undefined") {
      console.log("Dispatching authStateChanged event")
      // Use a more reliable approach with CustomEvent
      const event = new CustomEvent("authStateChanged", {
        detail: { authenticated: true },
      })
      window.dispatchEvent(event)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const client = getPocketBaseClient()
      const authData = await client.collection("users").authWithPassword(formData.email, formData.password)

      console.log("Login successful, auth data:", authData)

      // Ensure the auth data is properly saved to localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem(
          "pocketbase_auth",
          JSON.stringify({
            token: client.authStore.token,
            model: client.authStore.model,
          }),
        )
      }

      // Notify components about auth state change
      notifyAuthChange()
      toast
      toast({
        title: "Login successful",
        description: "You have been logged in successfully.",
      })

      // Longer delay to ensure auth state propagates
      setTimeout(() => {
        router.push("/")
        router.refresh()
      }, 500)
    } catch (error) {
      console.error("Login error:", error)
      toast({
        title: "Login failed",
        description: error?.message || "Invalid email or password. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleLogin = async () => {
    setGoogleLoading(true)

    try {
      const client = getPocketBaseClient()

      // Define the redirect URL
      const redirectUrl = `${window.location.origin}/api/oauth2-redirect`

      // Initialize the OAuth2 flow
      const authData = await client.collection("users").authWithOAuth2({
        provider: "google",
        scopes: ["email", "profile"],
        createUser: true,
        redirectUrl: redirectUrl,
        urlCallback: (url) => {
          // Open the OAuth2 popup window
          const popup = window.open(url, "oauth", "width=600,height=800,top=100,left=100")

          if (!popup) {
            throw new Error("Popup blocked by browser. Please allow popups for this site.")
          }

          return new Promise((resolve) => {
            // Listen for messages from the popup window
            const handleMessage = (event) => {
              // Validate the origin
              if (event.origin !== window.location.origin) return

              // If we got a code or error from the OAuth process
              if (event.data?.code || event.data?.error) {
                window.removeEventListener("message", handleMessage)
                popup.close()
                resolve(event.data.url || "")
              }
            }

            window.addEventListener("message", handleMessage)
          })
        },
      })

      // Notify components about auth state change
      notifyAuthChange()

      // Check if authentication was successful
      if (client.authStore.isValid) {
        toast({
          title: "Google login successful",
          description: "You have been logged in with Google successfully.",
        })

        // Short delay to allow auth state to propagate
        setTimeout(() => {
          router.push("/dashboard")
          router.refresh()
        }, 100)
      }
    } catch (error) {
      console.error("Google login error:", error)

      let errorMessage = "Could not login with Google. Please try again."
      if (error?.message) {
        errorMessage = error.message
      }

      toast({
        title: "Google login failed",
        description: errorMessage,
        variant: "destructive",
      })
    } finally {
      setGoogleLoading(false)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-12 bg-base  inset-0  bg-white">
      <Card className="w-full max-w-md">
        <CardHeader className="flex flex-col items-center gap-2">
          <div
            className="flex size-16 shrink-0 items-center justify-center rounded-full border bg-gradient-to-r from-cyan-400 to-blue-500 shadow-sm"
            aria-hidden="true"
          >
            <Image src={logox || "/placeholder.svg"} alt="Logo" width={44} height={44} />
          </div>
          <CardTitle className="text-center">Welcome back</CardTitle>
          <CardDescription className="text-center">Enter your credentials to login to your account.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  placeholder="hi@yourcompany.com"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex justify-between gap-2">
              <div className="flex items-center gap-2">
                <Checkbox
                  id="remember"
                  name="remember"
                  checked={formData.remember}
                  onCheckedChange={(checked) => setFormData({ ...formData, remember: checked === true })}
                />
                <Label htmlFor="remember" className="font-normal text-muted-foreground">
                  Remember me
                </Label>
              </div>
              <a className="text-sm underline hover:no-underline" href="/forgot-password">
                Forgot password?
              </a>
            </div>
            <Button type="submit" className="w-full bg-gradient-to-r from-cyan-400 to-blue-500" disabled={isLoading}>
              {isLoading ? "Signing in..." : "Sign in"}
            </Button>
          </form>

          <div className="my-4 flex items-center gap-3 before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border">
            <span className="text-xs text-muted-foreground">Or</span>
          </div>

          {/* <Button variant="outline" className="w-full" onClick={handleGoogleLogin} disabled={googleLoading}>
            {googleLoading ? "Connecting..." : "Login with Google"}
          </Button> */}
        </CardContent>
      </Card>
    </div>
  )
}

