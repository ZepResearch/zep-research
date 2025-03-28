import PocketBase from "pocketbase"

let pbInstance = null

export function getPocketBaseClient() {
  // For server-side rendering, always create a fresh instance
  if (typeof window === "undefined") {
    const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL || "http://127.0.0.1:8090")
    pb.autoCancellation(false)
    return pb
  }

  // For client-side, use the cached instance or create a new one
  if (!pbInstance) {
    pbInstance = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL || "http://127.0.0.1:8090")
    pbInstance.autoCancellation(false)

    // Try to load auth from localStorage directly
    try {
      const authData = localStorage.getItem("pocketbase_auth")
      if (authData) {
        const parsedData = JSON.parse(authData)
        // Make sure we have both token and model before trying to restore
        if (parsedData.token && parsedData.model) {
          pbInstance.authStore.save(parsedData.token, parsedData.model)
          console.log("Auth loaded from localStorage:", parsedData.model)
        }
      }
    } catch (error) {
      console.error("Failed to load auth from localStorage:", error)
    }

    // Keep localStorage in sync with auth changes
    pbInstance.authStore.onChange(() => {
      try {
        if (pbInstance.authStore.isValid) {
          localStorage.setItem(
            "pocketbase_auth",
            JSON.stringify({
              token: pbInstance.authStore.token,
              model: pbInstance.authStore.model,
            }),
          )
          console.log("Auth saved to localStorage")
        } else {
          localStorage.removeItem("pocketbase_auth")
          console.log("Auth removed from localStorage")
        }
      } catch (error) {
        console.error("Failed to save auth to localStorage:", error)
      }
    })
  }

  return pbInstance
}

// Utility functions for authentication
export const isUserAuthenticated = () => {
  const pb = getPocketBaseClient()
  return pb.authStore.isValid
}

export const getCurrentUser = () => {
  const pb = getPocketBaseClient()
  if (!pb.authStore.isValid) {
    console.log("Auth store is not valid when getting current user")
    return null
  }

  // Ensure we have a valid model
  if (!pb.authStore.model) {
    console.log("No auth model found when getting current user")
    return null
  }

  return pb.authStore.model
}

export const logout = () => {
  const pb = getPocketBaseClient()
  pb.authStore.clear()

  // Clear from localStorage as well
  if (typeof window !== "undefined") {
    localStorage.removeItem("pocketbase_auth")
    console.log("Auth cleared from localStorage during logout")
  }
}

