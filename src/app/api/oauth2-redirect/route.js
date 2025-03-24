import { NextResponse } from "next/server"
import { client } from "@/lib/pocketbase"

export async function GET(request) {
  const url = new URL(request.url)
  const code = url.searchParams.get("code")
  const state = url.searchParams.get("state")

  if (!code || !state) {
    return NextResponse.redirect(new URL("/login?error=missing_params", url.origin))
  }

  try {
    // Exchange the authorization code for an access token
    await client.collection("users").authWithOAuth2Code("google", code, state, `${url.origin}/api/oauth2-redirect`)

    // Redirect to dashboard on success
    return NextResponse.redirect(new URL("/dashboard", url.origin))
  } catch (error) {
    console.error("OAuth error:", error)
    return NextResponse.redirect(new URL("/login?error=oauth_failed", url.origin))
  }
}

