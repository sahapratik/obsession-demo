/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['yoursobsession.com', 'localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
  // Ensure proper TypeScript checking during build
  typescript: {
    ignoreBuildErrors: false,
  },
  // Ensure proper ESLint checking during build  
  eslint: {
    ignoreDuringBuilds: false,
  },
  // Output standalone for smaller builds
  output: 'standalone',
}

module.exports = nextConfig
