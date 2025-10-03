// src/app/(pages)/Blog/page.jsx

import { Suspense } from "react";
import BlogsClient from "./component/blogs-client";
import { SkeletonBlogCard } from "./component/skeleton-blog-card";

export const metadata = {
  title: "Blogs | Zep Research | International Journal Publication and Conference",
  description: "Leading platform for international journal publications, academic conferences, and advanced courses in Data Science and AI.",
  keywords: "research journal, international publication, academic conference, data science courses, Blogs",
   alternates: {
    canonical: "https://www.zepresearch.com/blog", // replace with your actual domain
  },
  openGraph: {
    title: "Zep Research | International Journal Publication",
    description: "Leading platform for international journal publications and conferences",
    type: "website",
    url: "https://zepresearch.com",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zep Research",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zep Research | International Journal Publication",
    description: "Leading platform for international journal publications and conferences",
    images: ["/og-image.jpg"],
  },
};

export default function BlogsPage() {
  return (
    <Suspense fallback={
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="h-8 bg-gray-200 rounded-md w-3/4 mx-auto mb-4 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded-md w-1/2 mx-auto animate-pulse"></div>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <SkeletonBlogCard />
            <SkeletonBlogCard />
            <SkeletonBlogCard />
          </div>
        </div>
      </div>
    }>
      <BlogsClient />
    </Suspense>
  );
}