import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  reactStrictMode: true,
  swcMinify: true,
  devIndicators: {
    buildActivity: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    domains: [
      "res.cloudinary.com",
      "images.pexels.com",
      "images.unsplash.com",
      "cdn.shopify.com",
      "cdn.pixabay.com",
      "images.unsplash.com",
    ],
  },
};

export default nextConfig;
