/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    domains: ['res.cloudinary.com','images.unsplash.com','plus.unsplash.com','zep-research.pockethost.io',''],
  },
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: ['pdf-parse']
  },
};

export default nextConfig;
