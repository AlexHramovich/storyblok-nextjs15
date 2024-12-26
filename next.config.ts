import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'focusreactive.com',
        pathname: '/**',
      },
    ],
  }
};

export default nextConfig;
