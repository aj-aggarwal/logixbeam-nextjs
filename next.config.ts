import type { NextConfig } from "next";

// Determine if we're using GitHub Pages subdirectory or custom domain
const useSubdirectory = process.env.USE_SUBDIRECTORY === 'true'
const basePath = useSubdirectory ? '/logixbeam-nextjs' : ''

const nextConfig: NextConfig = {
  // Configure for static export (GitHub Pages)
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  basePath: basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
