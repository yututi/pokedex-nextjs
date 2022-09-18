const path = require("path")
const withLinaria = require('next-linaria');

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
module.exports = withLinaria(nextConfig)
