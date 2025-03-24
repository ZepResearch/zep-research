// app/courses/[slug]/page.tsx
"use client";

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import PocketBase from 'pocketbase';
import { Skeleton } from "@/components/ui/skeleton";
import CourseHero from './component/CourseHero';
import CourseAbout from './component/CourseAbout';
import KnowInstrutor from './component/KnowInstructor';
import CareerCertificate from './component/Certificate';
import Syllbus from './component/Syllbus';
import CourseForm from './component/Form';
import ExclusiveOfferPopup from './component/ui/Popup';
import { getPocketBaseClient } from '@/lib/pocketbase';
import Head from 'next/head';

// Initialize PocketBase
const pb = getPocketBaseClient();


const CourseDetailSkeleton = () => {
    return (
      <div className="bg-white">
        <div className="mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-7 lg:grid-rows-1 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
            {/* Image Skeleton */}
            <div className="lg:col-span-4 lg:row-end-1">
              <div className="aspect-h-3 aspect-w-4 overflow-hidden rounded-lg">
                <Skeleton className="w-full h-full" />
              </div>
            </div>
  
            {/* Content Skeleton */}
            <div className="mx-auto mt-14 max-w-2xl sm:mt-16 lg:col-span-3 lg:row-span-2 lg:row-end-2 lg:mt-0 lg:max-w-none">
              <div className="flex flex-col-reverse">
                <div className="mt-4">
                  <Skeleton className="h-8 w-3/4 rounded" />
                </div>
              </div>
  
              <div className="mt-6 space-y-2">
                <Skeleton className="h-4 w-full rounded" />
                <Skeleton className="h-4 w-5/6 rounded" />
                <Skeleton className="h-4 w-4/6 rounded" />
              </div>
  
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
                <Skeleton className="h-12 rounded" />
                <Skeleton className="h-12 rounded" />
              </div>
  
              <div className="mt-10 border-t border-gray-200 pt-10">
                <Skeleton className="h-6 w-48 rounded mb-4" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-3/4 rounded" />
                  <Skeleton className="h-4 w-2/3 rounded" />
                  <Skeleton className="h-4 w-1/2 rounded" />
                </div>
              </div>
  
              <div className="mt-10 border-t border-gray-200 pt-10">
                <Skeleton className="h-6 w-32 rounded mb-4" />
                <Skeleton className="h-16 w-full rounded" />
              </div>
  
              <div className="mt-10 border-t border-gray-200 pt-10">
                <Skeleton className="h-6 w-32 rounded mb-4" />
                <div className="flex space-x-4">
                  {[1, 2, 3, 4, 5].map((_, index) => (
                    <Skeleton key={index} className="h-8 w-8 rounded-full" />
                  ))}
                </div>
              </div>
            </div>
  
            <div className="lg:col-span-7 mt-10">
              <Skeleton className="h-12 w-full rounded mb-4" />
              <Skeleton className="h-48 w-full rounded" />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default function CourseDetail() {
    const params = useParams();
    const slug = params?.slug ;
    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchCourse = async () => {
        try {
          setLoading(true);
          setError(null);
  
          // First, try to fetch all courses
          const records = await pb.collection('Course').getFullList({
            sort: '-created',
            requestKey: null
          });
  
          // Find the course that matches the URL slug
          const matchingCourse = records.find(
            record => createSlug(record.title) === slug
          );
  
          if (!matchingCourse) {
            throw new Error('Course not found');
          }
  
          setCourse(matchingCourse);
        } catch (error) {
          console.error("Error fetching course:", error);
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
  
      if (slug) {
        fetchCourse();
      }
    }, [slug]);
  
    if (loading) {
      return <CourseDetailSkeleton />;
    }
  
    if (error) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900">Error Loading Course</h2>
            <p className="mt-2 text-gray-600">{error}</p>
          </div>
        </div>
      );
    }
  
    if (!course) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900">Course Not Found</h2>
            <p className="mt-2 text-gray-600">The requested course could not be found.</p>
          </div>
        </div>
      );
    }
  
    return (
      <>
        {/* Use Next.js Head component for client-side metadata */}
        <Head>
          <title>{`${course.title} Course | Zep Research`}</title>
          <meta name="description" content={`${course.description.slice(0, 155)}...`} />
          <meta name="keywords" content={`${course.title}, online course, professional training, ${course.Job_Roles}, zep research`} />
        </Head>
  
        <section>
          <a
            href="https://wa.me/+85251359932"
            className="fixed w-[40px] h-[40px] sm:bottom-10 bottom-3 z-10 sm:right-10 right-3 rounded-full text-center text-4xl shadow-lg z-100 flex items-center justify-center md:w-[70px] md:h-[70px] md:bottom-5 md:right-5 md:text-2xl"
            aria-label="Get Course Information"
          >
            <Image src='/whatsapp.png' alt="WhatsApp" width={70} height={70} />
          </a>
  
          <CourseHero course={course} />
          <CourseAbout course={course} />
          <KnowInstrutor course={course} />
          <CareerCertificate course={course} />
          <Syllbus course={course} />
          <CourseForm />
          <ExclusiveOfferPopup course={course} />
        </section>
      </>
    );
  }
  
  const createSlug = (title) => {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };