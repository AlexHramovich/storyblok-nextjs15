import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    inlineCss: true
  },
  images: {
    domains: ['focusreactive.com']
  }
};

export default nextConfig;
