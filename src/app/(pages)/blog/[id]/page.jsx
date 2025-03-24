// src/app/(pages)/Blog/[id]/page.jsx
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { getPocketBaseClient } from "@/lib/pocketbase";
import BlogDetailClient from "../component/blog-detail-client";

// Generate metadata for the blog post
export async function generateMetadata({ params }) {
  const id = params?.id;
  
  try {
    const pb = getPocketBaseClient();
    const blog = await pb.collection("Blogs").getOne(id);
    
    return {
      title: `${blog.Title} | Zep Research Blog`,
      description: blog.Description || "Leading platform for international journal publications, academic conferences, and advanced courses in Data Science and AI.",
      keywords: `${blog.Title}, research journal, international publication, academic conference, ${blog.author}`,
      openGraph: {
        title: `${blog.Title} | Zep Research`,
        description: blog.Description,
        type: "article",
        url: `https://zepresearch.com/blogs/${blog.id}`,
        images: [
          {
            url: blog.imageUrl || "/og-image.jpg",
            width: 1200,
            height: 630,
            alt: blog.Title,
          },
        ],
        publishedTime: blog.created,
        authors: [blog.author],
      },
      twitter: {
        card: "summary_large_image",
        title: blog.Title,
        description: blog.Description,
        images: [blog.imageUrl || "/og-image.jpg"],
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Blog Post | Zep Research",
      description: "Leading platform for international journal publications",
    };
  }
}

// Fetch initial blog data server-side
export default async function BlogDetailPage({ params }) {
  const id = params?.id;
  
  try {
    // Validate that the blog exists
    const pb = getPocketBaseClient();
    await pb.collection("Blogs").getOne(id);
    
    // Pass the ID to the client component
    return (
      <Suspense fallback={
        <div className="bg-white px-6 py-32 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="space-y-4">
              <div className="h-12 bg-gray-200 rounded-md w-3/4 mb-4 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded-md w-1/4 mb-8 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded-md w-full animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded-md w-full animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded-md w-3/4 animate-pulse"></div>
            </div>
          </div>
        </div>
      }>
        <BlogDetailClient id={id} />
      </Suspense>
    );
  } catch (error) {
    console.error("Blog not found:", error);
    notFound();
  }
}