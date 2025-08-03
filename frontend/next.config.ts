import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dxk1acp76n912.cloudfront.net',
      },
    ],
  },
};

export default nextConfig;
