/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  optimizeFonts: false,
  images: {
    domains: ['muzeibotev.com', 'localhost'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/bg/nachalo',
        permanent: true,
      }
    ]
  },
}

module.exports = nextConfig
