import React from 'react'
import Hero from './component/Hero'
import Testimonial from './component/Testimonial'
import Why from './component/Why'
import { UpComingConf } from '@/components/UpComingConf'


export const metadata = {
  title: "Conference | International Journal Publication and Conference",
  description: "Leading platform for international journal publications, academic conferences, and advanced courses in Data Science and AI.",
  keywords: [
    "research journal",
    "international publication",
    "academic conference",
    "data science courses"
  ],
  openGraph: {
    title: "Zep Research | International Journal Publication",
    description: "Leading platform for international journal publications and conferences",
    type: "website",
    url: "https://zepresearch.com/conference",
    images: ["/og-image.jpg"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Zep Research | International Journal Publication",
    description: "Leading platform for international journal publications and conferences",
    images: ["/og-image.jpg"]
  },
  alternates: {
    canonical: "https://zepresearch.com/conference"
  }
};

function page() {
  return (
    <div>
<Hero/>
<UpComingConf/>
<Testimonial/>
<Why/>
    </div>
  )
}

export default page
