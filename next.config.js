/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "localhost",
      "127.0.0.1",
      "img.icons8.com",
      "i.pinimg.com",
      "media4.giphy.com",
    ],
  },
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  ...nextConfig,
  swcMinify: true, // Ensure JS minification
  experimental: {
    optimizeCss: true, // Minify CSS
  },
});