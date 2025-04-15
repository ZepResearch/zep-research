import React from 'react'
import ImageGallery from './Content'



export const metadata = {
  title: 'Gallery | International Journal Publication and Conference',
  description: 'Leading platform for international journal publications, academic conferences, and advanced courses in Data Science and AI.',
  keywords: 'research journal, international publication, academic conference, data science courses',
  openGraph: {
    title: 'Zep Research | International Journal Publication',
    description: 'Leading platform for international journal publications and conferences',
    type: 'website',
    url: 'https://zepresearch.com/Gallery',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zep Research OG Image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zep Research | International Journal Publication',
    description: 'Leading platform for international journal publications and conferences',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://zepresearch.com/Gallery',
  },
};



function page() {
  return (
    <div>
      <ImageGallery/>
    </div>
  )
}

export default page
