/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      }
    ]
  },
  images: {
    domains: ['sleepercdn.com'] 
  }
}

module.exports = nextConfig