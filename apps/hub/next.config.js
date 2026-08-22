/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: false,
  reactStrictMode: true,
  transpilePackages: [
    "@portfolio/ui",
    "@portfolio/knowledge",
    "@portfolio/config",
  ],
};

module.exports = nextConfig;
