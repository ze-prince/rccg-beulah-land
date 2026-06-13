// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: false,        // Allow Next.js to optimize images (better performance)
    domains: ['www.google.com'], // For Google Maps embed
  },
  compress: true,              // Enable compression
  trailingSlash: true,         // Helps with routing
};

export default nextConfig;