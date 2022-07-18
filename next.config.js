const path = require("path")

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    config.resolve.alias['@'] = path.join(__dirname, '.')
    return config
  },
  experimental: {
    concurrentFeatures: true,
  },
}
module.exports = nextConfig
