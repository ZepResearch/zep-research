// src/app/(pages)/Blog/component/blogs-client.jsx
"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { getPocketBaseClient } from "@/lib/pocketbase";
import { BlogCard } from "./blog-card";
import { SkeletonBlogCard } from "./skeleton-blog-card";

export default function BlogsClient() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const observerRef = useRef();
  const ITEMS_PER_PAGE = 6;

  const formatDate = useCallback((dateString) => {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "short", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }, []);

  const fetchBlogs = useCallback(async (pageNum) => {
    try {
      setLoadingMore(true);
      const pb = getPocketBaseClient();
      const res = await pb.collection("Blogs").getList(pageNum, ITEMS_PER_PAGE, {
        sort: "-created",
      });
      
      const formattedBlogs = res.items.map((blog) => ({
        ...blog,
        formattedDate: formatDate(blog.created),
      }));

      setBlogs(prev => pageNum === 1 ? formattedBlogs : [...prev, ...formattedBlogs]);
      setHasMore(res.items.length === ITEMS_PER_PAGE);
      
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  }, [formatDate]);

  useEffect(() => {
    fetchBlogs(1);
  }, [fetchBlogs]);

  // Setup the intersection observer for infinite scrolling
  const lastBlogElementRef = useCallback(node => {
    if (loading || loadingMore) return;
    
    if (observerRef.current) observerRef.current.disconnect();
    
    observerRef.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPage(prevPage => prevPage + 1);
      }
    }, { threshold: 0.5 });
    
    if (node) observerRef.current.observe(node);
  }, [loading, loadingMore, hasMore]);

  // Fetch more blogs when page changes
  useEffect(() => {
    if (page > 1) {
      fetchBlogs(page);
    }
  }, [page, fetchBlogs]);

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
            blogs.map((blog, index) => {
              if (blogs.length === index + 1) {
                // Add ref to last element for intersection observer
                return (
                  <div ref={lastBlogElementRef} key={blog.id}>
                    <BlogCard blog={blog} />
                  </div>
                );
              } else {
                return <BlogCard key={blog.id} blog={blog} />;
              }
            })
          )}
        </div>
        
        {loadingMore && (
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <SkeletonBlogCard />
            <SkeletonBlogCard />
            <SkeletonBlogCard />
          </div>
        )}
        
        {!hasMore && blogs.length > 0 && (
          <div className="mt-12 text-center text-gray-500">
            No more blogs to load
          </div>
        )}
      </div>
    </div>
  );
}