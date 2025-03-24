// components/blog-card.jsx
import Link from "next/link";
import Image from "next/image";

export function BlogCard({ blog }) {
  return (
    <Link href={`/blog/${blog.id}`}>
      <article className="relative sm:h-[500px] h-auto isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
        <div className="absolute inset-0 -z-10 h-full w-full">
          <img 
            src={blog.imageUrl} 
            alt={blog.Title} 
             
            className="object-cover object-center w-full h-full" 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
        <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
        
        <h3 className="text-lg font-semibold leading-6 text-white">
          <span className="absolute inset-0" />
          {blog.Title}
        </h3>
        
        <div className="mt-3 flex flex-wrap justify-between gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
          <time dateTime={blog.created}>
            {blog.formattedDate}
          </time>
          <div className="-ml-4 flex items-center gap-x-4">
             <div className="flex gap-x-2.5">
              {blog.author}
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}