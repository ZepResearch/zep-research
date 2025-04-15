import React from 'react'
import HeroAbout from './component/Hero'
import MissionVisionPage from './component/MissionVision'
import SDGPage from './component/SDGE'
import ObjectiveAboutpage from './component/Objective'
import CeoVision from './component/Ceo'


export const metadata = {
  title: "About | Zepresearch | International Journal Publication and Conference",
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
    url: "https://zepresearch.com/About",
    images: ["/og-image.jpg"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Zep Research | International Journal Publication",
    description: "Leading platform for international journal publications and conferences",
    images: ["/og-image.jpg"]
  },
  alternates: {
    canonical: "https://zepresearch.com/About"
  }
};
function page() {
  return (
    <div>
      <HeroAbout/>
      <MissionVisionPage/>
      <CeoVision/>
      <ObjectiveAboutpage/>
      <SDGPage/>
    </div>
  )
}

export default page
