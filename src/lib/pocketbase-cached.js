import { cache } from "react"
import { getPocketBaseClient } from "@/lib/pocketbase"

// Cached function for fetching blogs list - deduplicates requests during render
export const getBlogs = cache(async (page = 1, perPage = 6) => {
  const pb = getPocketBaseClient()
  const res = await pb.collection("Blogs").getList(page, perPage, {
    sort: "-created",
  })
  return res
})

// Cached function for fetching single blog - deduplicates requests during render
export const getBlog = cache(async (id) => {
  const pb = getPocketBaseClient()
  const blog = await pb.collection("Blogs").getOne(id)
  return blog
})

// Format date helper
export function formatDate(dateString) {
  const date = new Date(dateString)
  const options = { year: "numeric", month: "short", day: "numeric" }
  return date.toLocaleDateString("en-US", options)
}
