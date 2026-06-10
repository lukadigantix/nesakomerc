import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.nesa-komerc.com",
      },
    ],
  },
};

export default nextConfig;
