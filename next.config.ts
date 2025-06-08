import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Future-proofing for cross-origin dev requests
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: process.env.NODE_ENV === 'development' ? '*' : 'https://logixbeam.com',
          },
        ],
      },
    ]
  },
};

export default nextConfig;
