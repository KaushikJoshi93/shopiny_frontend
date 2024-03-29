/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'img.freepik.com',
          },
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
          },
          {
            protocol: 'https',
            hostname: 'img.lovepik.com',
          },
          {
            protocol: 'https',
            hostname: 'images.pexels.com',
          },
        ],
      },
}

module.exports = nextConfig