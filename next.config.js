/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  experimental: {
    forceSwcTransforms: true,
  },
};

module.exports = nextConfig;
