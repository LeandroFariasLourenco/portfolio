/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  sassOptions: {
    includePaths: ['./src/styles'],
    prependData: `@import "./index";`
  },
  images: {
    minimumCacheTTL: 31622400,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.github.com',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'd255kommyg5uck.cloudfront.net',
        port: '',
        pathname: '/**'
      },
    ]
  },
}

module.exports = nextConfig
