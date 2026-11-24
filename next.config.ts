import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    serverActions: {
      // The Join form accepts a portfolio file of up to 4 MB (the default limit is 1 MB).
      // Vercel rejects request bodies over 4.5 MB, so this must stay at or below that.
      bodySizeLimit: "4.5mb",
    },
  },
};

export default nextConfig;
