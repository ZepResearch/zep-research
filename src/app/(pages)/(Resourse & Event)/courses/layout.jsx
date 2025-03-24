// app/courses/layout.tsx

export const metadata = {
  title: 'Courses | International Journal Publication and Conference',
  description: 'Leading platform for international journal publications, academic conferences, and advanced courses in Data Science and AI.',
  keywords: 'research journal, international publication, academic conference, data science courses',
  openGraph: {
    title: 'Zep Research | International Journal Publication',
    description: 'Leading platform for international journal publications and conferences',
    type: 'website',
    url: 'https://zepresearch.com',
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
    canonical: 'https://zepresearch.com',
  },
};

export default function CoursesLayout({
  children,
}) {
  return (
    <>
      {children}
    </>
  );
}