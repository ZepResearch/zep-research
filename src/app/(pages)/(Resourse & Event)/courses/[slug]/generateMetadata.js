// app/courses/[slug]/generateMetadata.ts
import { getPocketBaseClient } from '@/lib/pocketbase';


// Initialize PocketBase
const pb = getPocketBaseClient();

// Helper function to create slug
const createSlug = (title) => {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

// Type for generateMetadata params


export async function generateMetadata({ params }) {
  // Fetch course data
  try {
    const records = await pb.collection('Course').getFullList({
      sort: '-created',
      requestKey: null
    });

    // Find the course that matches the URL slug
    const course = records.find(
      record => createSlug(record.title) === params.slug
    );

    if (!course) {
      return {
        title: 'Course Not Found',
        description: 'The requested course could not be found.'
      };
    }

    // Define structured data
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Course',
      'name': course.title,
      'description': course.description,
      'provider': {
        '@type': 'Organization',
        'name': 'Zep Research',
        'sameAs': [
          'https://www.facebook.com/profile.php?id=61561809783777',
          'https://www.instagram.com/zepresearch/',
          'https://x.com/Zepresearch',
          'https://www.linkedin.com/company/zep-research/'
        ]
      },
      'offers': {
        '@type': 'Offer',
        'price': course.price,
        'priceCurrency': 'USD',
        'availability': 'https://schema.org/InStock'
      },
      'image': `https://zep-research.pockethost.io/api/files/${course.collectionId}/${course.id}/${course.front_Img}`,
      'url': `https://zepresearch.com/courses/${course.id}`,
      'occupationalCredentialAwarded': 'Certificate',
      'occupationalCategory': course.Job_Roles.split(',').map((role) => role.trim())
    };

    return {
      title: `${course.title} Course | Zep Research`,
      description: `${course.description.slice(0, 155)}...`,
      keywords: `${course.title}, online course, professional training, ${course.Job_Roles}, zep research`,
      openGraph: {
        title: `${course.title} | Zep Research`,
        description: course.description,
        type: 'product',
        url: `https://zepresearch.com/courses/${course.id}`,
        images: [
          {
            url: `https://zep-research.pockethost.io/api/files/${course.collectionId}/${course.id}/${course.front_Img}`,
            width: 800,
            height: 600,
            alt: course.title,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: `${course.title} | Zep Research`,
        description: course.description,
        images: [`https://zep-research.pockethost.io/api/files/${course.collectionId}/${course.id}/${course.front_Img}`],
      },
      alternates: {
        canonical: `https://zepresearch.com/courses/${course.id}`,
      },
      other: {
        'price:amount': course.price,
        'price:currency': 'USD',
      },
      // Add structured data
      alternativeMetadata: {
        structuredData: jsonLd,
      }
    };
  } catch (error) {
    return {
      title: 'Error Loading Course',
      description: 'There was an error loading the course details.'
    };
  }
}