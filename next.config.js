/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable ESLint blocking the production build
  // (Warnings/errors will still show in dev mode)
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Disable type errors blocking the build
  typescript: {
    ignoreBuildErrors: true,
  },
  // Allow images from any domain (for now)
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;