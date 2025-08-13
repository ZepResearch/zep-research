/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'res.cloudinary.com',
      'images.unsplash.com',
      'plus.unsplash.com',
      'zep-research.pockethost.io',
    ],
  },
  experimental: {
    serverActions: {}, 
  },
};

export default nextConfig;
