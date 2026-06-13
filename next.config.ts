// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',           // This is the important line
  images: {
    unoptimized: true,        // Required for static export
  },
  trailingSlash: true,        // Helps with routing on Netlify
};

export default nextConfig;