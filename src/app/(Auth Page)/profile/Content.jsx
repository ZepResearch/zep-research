"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import ProfileForm from "./component/profile-form"
import { getPocketBaseClient, isUserAuthenticated } from "@/lib/pocketbase"

export default function ProfilePage() {
  const router = useRouter()
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Use setTimeout to ensure client-side code runs after hydration
    const timer = setTimeout(() => {
      try {
        const pb = getPocketBaseClient()
        
        if (!pb.authStore.isValid) {
          console.log("User not authenticated, redirecting to home")
          router.push("/")
          return
        }
        
        console.log("Auth is valid, getting user data")
        setUserData(pb.authStore.model)
        setLoading(false)
      } catch (error) {
        console.error("Error in profile page:", error)
        router.push("/")
      }
    }, 100) // Small delay to ensure client-side execution
    
    return () => clearTimeout(timer)
  }, [router])

  if (loading) {
    return (
      <div className="container h-screen mx-auto py-24 max-w-3xl">
        <div className="flex justify-center items-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4">Loading your profile...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto max-w-3xl py-10 mt-20">
      <h1 className="text-3xl font-bold mb-6">Your Profile</h1>
      {userData && <ProfileForm initialData={userData} />}
    </div>
  )
}