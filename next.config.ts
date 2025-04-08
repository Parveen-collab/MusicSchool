import type { NextConfig } from "next";
// import { PHASE_DEVELOPMENT_SERVER } from 'next/constants';


const nextConfig: NextConfig = {
  reactStrictMode: true,
  // swcMinify: true,
  images: {
    domains: ['source.unsplash.com', 'images.unsplash.com'],
  },
  /* config options here */
};

export default nextConfig;
