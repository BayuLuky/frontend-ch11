/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://backend-binarch11.herokuapp.com/api/:path*',
      },
    ]
  },
}

module.exports = nextConfig
