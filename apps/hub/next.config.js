/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    "@portfolio/ui",
    "@portfolio/knowledge",
    "@portfolio/config",
  ],
};

module.exports = nextConfig;
