/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'learn.microsoft.com',
          },
        ],
      },
}

module.exports = nextConfig
