import type { NextConfig } from "next";

// Determine if we're using a custom domain or GitHub Pages subdirectory
const isGitHubPages = process.env.GITHUB_PAGES === 'true'
const basePath = isGitHubPages ? '/logixbeam-nextjs' : ''

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
