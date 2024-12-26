// next.config.ts
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost"],
  },
};
module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
