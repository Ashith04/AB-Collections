import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Added experimental flag for security agent upgrade
  experimental: {
    agentUpgrade: "security",
  },
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
