import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "user-images.githubusercontent.com",
      "cdn.prod.website-files.com"
    ],
  },
};

export default nextConfig;
