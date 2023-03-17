/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.ctfassets.net",
      "assets.ctfassets.net",
      "auroralove-pocketbase.fly.dev",
    ],
  },
};

module.exports = nextConfig;
