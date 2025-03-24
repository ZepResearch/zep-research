// app/courses/page.tsx
"use client";

import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import Link from 'next/link';
import Image from 'next/image';
import PocketBase from 'pocketbase';
import { Metadata } from 'next';
import { getPocketBaseClient } from '@/lib/pocketbase';

// Initialize PocketBase
const pb = getPocketBaseClient();

// Types

export default function Courses() {
  const [course, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        const records = await pb.collection('Course').getFullList({
          sort: '-created',
          requestKey: null
        });
        setCourses(records);
      } catch (error) {
        console.error("Error fetching courses:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const createSlug = (title) => {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="space-y-4">
          <Skeleton className="h-8 w-64 rounded" />
          <Skeleton className="h-4 w-48 rounded" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Error Loading Courses</h2>
          <p className="mt-2 text-gray-600">{error}</p>
        </div>
      </div>
    );
  }
  
  return (
    <section>
      <div className="bg-white py-4 sm:py-8 mt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Courses</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Join us for the Annual Technology Innovations Conference 2025, where industry leaders, innovators, and technology enthusiasts converge to explore the latest trends and breakthroughs shaping our world
            </p>
            <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20 pb-24">
              {course.map((course) => (
                <div key={course.id}>
                  <hr />
                  <Link 
                    href={`/courses/${createSlug(course.title)}`}
                    // In Next.js, we'll pass data differently
                  >
                    <article className="relative mt-8 isolate flex flex-col gap-8 lg:flex-row">
                      <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                        <Image
                          src={`https://zep-research.pockethost.io/api/files/${course.collectionId}/${course.id}/${course.front_Img}`}
                          alt={course.title}
                          fill
                          className="absolute inset-0 rounded-2xl bg-gray-50 object-fill"
                        />
                        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                      </div>
                      <div>
                        <div className="flex items-center gap-x-4 text-xs">
                          <div className="relative z-10 rounded-full bg-blue-200 px-3 py-1.5 font-medium text-gray-900">
                            {course.tag}
                          </div>
                        </div>
                        <div className="group relative max-w-xl">
                          <h3 className="mt-3 text-lg flex justify-between font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                            <span className="font-josefin-sans">
                              {course.title}
                            </span>
                            <span className="text-2xl font-josefin-sans">
                              ₹{course.price}
                            </span>
                          </h3>
                          <p className="mt-5 text-sm leading-6 text-gray-600 font-serif">{course.description}</p>
                        </div>
                        <div className="mt-6 flex border-t border-gray-900/5 pt-6 justify-between">
                          <div className="relative flex items-center gap-x-4">
                            {/* Instructor info would go here */}
                          </div>
                          <div className="flex gap-4 text-sm">
                            <Button variant="default" size="sm" className="text-xs font-normal">
                              know more
                            </Button>
                          </div>
                        </div>
                      </div>
                    </article>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}