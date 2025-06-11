import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configure for static export (GitHub Pages)
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
