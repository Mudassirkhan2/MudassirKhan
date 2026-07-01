/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'queue.simpleanalyticscdn.com',
        },
        {
          protocol: 'https',
          hostname: 'cdn.jsdelivr.net',
        },
      ],
    },
    turbopack: {
      root: __dirname,
    },
  }

  module.exports = nextConfig