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
  async rewrites () {
    return [
      {
        source: "/api/pokedex/:path*",
        destination: "https://pokeapi.co/api/v2/:path*"
      }
    ]
  },  
}
module.exports = withLinaria(nextConfig)
