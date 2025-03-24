"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { getPocketBaseClient } from "@/lib/pocketbase"

export default function BlogDetailClient({ id }) {
  const [blog, setBlog] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchBlog() {
      try {
        const pb = getPocketBaseClient()
        const record = await pb.collection("Blogs").getOne(id)
        setBlog(record)
        console.log("Blog content:", record.Content) // Debug log
      } catch (error) {
        console.error("Error fetching blog:", error)
        setError("Failed to fetch the blog post. Please try again later.")
      } finally {
        setLoading(false)
      }
    }

    fetchBlog()
  }, [id])

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    const options = { year: "numeric", month: "long", day: "numeric" }
    return date.toLocaleDateString("en-US", options)
  }

  if (loading) {
    return (
      <div className="container max-w-3xl mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="h-12 bg-gray-200 rounded-md w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded-md w-1/4 mb-8"></div>
          <div className="h-64 bg-gray-200 rounded-lg mb-8"></div>
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 rounded-md w-full"></div>
            <div className="h-4 bg-gray-200 rounded-md w-full"></div>
            <div className="h-4 bg-gray-200 rounded-md w-3/4"></div>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container max-w-3xl mx-auto px-4 py-8">
        <div className="text-center mt-8 text-red-500">{error}</div>
      </div>
    )
  }

  if (!blog) {
    return (
      <div className="container max-w-3xl mx-auto px-4 py-8">
        <div className="text-center mt-8">Blog post not found.</div>
      </div>
    )
  }

  return (
    <div className="container max-w-3xl mx-auto px-4 py-8 mt-24">
      <h1 className="text-4xl font-bold mb-6">{blog.Title}</h1>
      <p className="text-lg mb-4">{blog.Description}</p>
      <div className="flex flex-row justify-between items-center text-sm sm:text-base">
        <p className="mt-6 leading-8 text-gray-500">{formatDate(blog.created)}</p>
        {blog.author && <p className="text-gray-500">Author: {blog.author}</p>}
      </div>
      <hr className="my-4 bg-background" />
      {blog.imageUrl && (
        <div className="relative w-full max-w-3xl mx-auto h-[400px] mb-8">
          <img
            src={blog.imageUrl || "/placeholder.svg"}
            alt={blog.Title}
            
            className="object-cover rounded-lg bg-white"
          />
        </div>
      )}

      {/* Blog content without prose classes */}
      <div className="blog-content mt-8 text-foreground" dangerouslySetInnerHTML={{ __html: blog.Content }} />

      {/* Add custom CSS for blog content */}
      <style jsx global>{`
        .blog-content h1, 
        .blog-content h2, 
        .blog-content h3, 
        .blog-content h4, 
        .blog-content h5, 
        .blog-content h6 {
          font-weight: bold;
          margin-top: 1.5em;
          margin-bottom: 0.5em;
        }
        
        .blog-content h1 {
          font-size: 2rem;
        }
        
        .blog-content h2 {
          font-size: 1.75rem;
        }
        
        .blog-content h3 {
          font-size: 1.5rem;
        }
        
        .blog-content p {
          margin-bottom: 1em;
          line-height: 1.7;
        }
        
        .blog-content ul, 
        .blog-content ol {
          margin-left: 1.5em;
          margin-bottom: 1em;
        }
        
        .blog-content li {
          margin-bottom: 0.5em;
        }
        
        .blog-content a {
          color: #0070f3;
          text-decoration: underline;
        }
        
        .blog-content img {
          max-width: 100%;
          height: auto;
          border-radius: 0.5rem;
          margin: 1.5em 0;
        }
        
        .blog-content blockquote {
          border-left: 4px solid #e2e8f0;
          padding-left: 1em;
          margin-left: 0;
          margin-right: 0;
          font-style: italic;
        }
        
        .blog-content pre {
          background-color: #f1f5f9;
          padding: 1em;
          border-radius: 0.5rem;
          overflow-x: auto;
          margin: 1.5em 0;
        }
        
        .blog-content code {
          background-color: #f1f5f9;
          padding: 0.2em 0.4em;
          border-radius: 0.25rem;
          font-size: 0.875em;
        }
      `}</style>
    </div>
  )
}

