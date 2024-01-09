/** @type {import('next').NextConfig} */
const withImages = require("next-images");

const nextConfig = withImages({
  webpack(config, options) {
    return config;
  },
  images: {
    domains: ["images.unsplash.com"],
  },
});

module.exports = nextConfig;
