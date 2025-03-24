// src/components/blogs-client.jsx
"use client";

import { useEffect, useState, useCallback } from "react";
import { getPocketBaseClient } from "@/lib/pocketbase";
import { BlogCard } from "./blog-card";
import { SkeletonBlogCard } from "./skeleton-blog-card";

export default function BlogsClient() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const formatDate = useCallback((dateString) => {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "short", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }, []);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const pb = getPocketBaseClient();
        const res = await pb.collection("Blogs").getFullList({
          sort: "-created",
        });
        
        const formattedBlogs = res.map((blog) => ({
          ...blog,
          formattedDate: formatDate(blog.created),
        }));
        
        setBlogs(formattedBlogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [formatDate]);

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {loading ? (
            <>
              <SkeletonBlogCard />
              <SkeletonBlogCard />
              <SkeletonBlogCard />
            </>
          ) : (
            blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}