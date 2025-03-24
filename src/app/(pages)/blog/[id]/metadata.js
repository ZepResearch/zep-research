// app/blogs/[id]/metadata.js
import { getPocketBaseClient } from "@/lib/pocketbase";

export async function generateMetadata({ params }) {
  const id = params?.id;
  
  try {
    const pb = getPocketBaseClient();
    const blog = await pb.collection("Blogs").getOne(id);
    
    return {
      title: `${blog.Title} | Zep Research Blog`,
      description: blog.Description || "Leading platform for international journal publications, academic conferences, and advanced courses in Data Science and AI.",
      keywords: `${blog.Title}, research journal, international publication, academic conference, ${blog.author}`,
      openGraph: {
        title: `${blog.Title} | Zep Research`,
        description: blog.Description,
        type: "article",
        url: `https://zepresearch.com/blogs/${blog.id}`,
        images: [
          {
            url: blog.imageUrl || "/og-image.jpg",
            width: 1200,
            height: 630,
            alt: blog.Title,
          },
        ],
        publishedTime: blog.created,
        authors: [blog.author],
      },
      twitter: {
        card: "summary_large_image",
        title: blog.Title,
        description: blog.Description,
        images: [blog.imageUrl || "/og-image.jpg"],
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Blog Post | Zep Research",
      description: "Leading platform for international journal publications",
    };
  }
}