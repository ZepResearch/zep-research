"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import Link from "next/link"
import Image from "next/image"
import { getPocketBaseClient } from "@/lib/pocketbase"

// Initialize PocketBase
const pb = getPocketBaseClient()

export default function Courses() {
  const [course, setCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true)
        const records = await pb.collection("Course").getFullList({
          sort: "-created",
          requestKey: null,
        })
        setCourses(records)
      } catch (error) {
        console.error("Error fetching courses:", error)
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchCourses()
  }, [])

  const createSlug = (title) => {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "")
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="space-y-4">
          <Skeleton className="h-8 w-64 rounded" />
          <Skeleton className="h-4 w-48 rounded" />
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Error Loading Courses</h2>
          <p className="mt-2 text-gray-600">{error}</p>
        </div>
      </div>
    )
  }

  return (
    <section>
      <div className="bg-white py-4 sm:py-8 mt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Courses</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Join us for the Annual Technology Innovations Conference 2025, where industry leaders, innovators, and
              technology enthusiasts converge to explore the latest trends and breakthroughs shaping our world
            </p>
            <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20 pb-24">
              {course.map((course) => (
                <div key={course.id} className="relative">
                  <hr />
                  <Link href={`/courses/${createSlug(course.title)}`}>
                    <article className="relative mt-8 overflow-hidden rounded-2xl">
                      {/* Background image with gradient overlay */}
                      <div className="absolute inset-0 w-full h-full">
                        <Image
                          src={`https://zep-research.pockethost.io/api/files/${course.collectionId}/${course.id}/${course.front_Img}`}
                          alt={course.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/90 via-blue-800/80 to-blue-700/70"></div>
                      </div>

                      {/* 3D Geometric Elements */}
                      <div className="absolute top-10 right-40 w-16 h-16 rounded-full bg-cyan-300/30 blur-sm transform rotate-45 animate-pulse"></div>
                      <div className="absolute bottom-20 left-20 w-20 h-20 rounded-full bg-blue-400/20 blur-sm"></div>
                      <div className="absolute top-1/2 left-1/3 w-12 h-12 border-2 border-cyan-200/40 rounded-lg transform rotate-12"></div>
                      <div className="absolute bottom-10 right-1/4 w-8 h-8 border border-blue-200/30 rounded-full"></div>

                      {/* Content */}
                      <div className="relative flex p-8 md:p-10 min-h-[300px]">
                        <div className="flex-1 text-white z-10 max-w-[60%]">
                          <div className="flex items-center gap-x-4 text-xs mb-6">
                            <div className="relative z-10 rounded-full bg-cyan-300 px-3 py-1.5 font-medium text-blue-900">
                              {course.tag}
                            </div>
                          </div>

                          <h3 className="text-3xl font-bold mb-4 text-white">{course.title}</h3>

                          <p className="text-cyan-50/90 mb-6 line-clamp-3">{course.description}</p>

                          <div className="flex justify-between items-center mt-auto">
                            <span className="text-2xl font-bold text-white">₹{course.price}</span>
                            <Button
                              variant="default"
                              size="sm"
                              className="bg-cyan-400 hover:bg-cyan-500 text-blue-900 font-medium"
                            >
                              Know More
                            </Button>
                          </div>
                        </div>

                        {/* Instructor Section */}
                        <div className="hidden md:flex flex-col items-center justify-center ml-auto z-10 relative">
                          {course.author_Img && (
                            <div className="relative w-40 h-40 mb-4 overflow-hidden rounded-full border-4 border-white/20 shadow-lg">
                              <Image
                                src={`https://zep-research.pockethost.io/api/files/${course.collectionId}/${course.id}/${course.author_Img}`}
                                alt={course.author_name || "Instructor"}
                                fill
                                className="object-cover"
                              />
                            </div>
                          )}

                          {course.author_name && (
                            <h4 className="text-white text-xl font-bold text-center">{course.author_name}</h4>
                          )}

                          {course.author_role && (
                            <p className="text-cyan-100 text-sm font-medium text-center">{course.author_role}</p>
                          )}

                          
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
  )
}
