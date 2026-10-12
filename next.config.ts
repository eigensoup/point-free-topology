import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
  async redirects() {
    return [
      // The profile used to live at the top level, before /legends/<slug>.
      { source: "/banaschewski", destination: "/legends/banaschewski", permanent: true },
      { source: "/lineage", destination: "/legends", permanent: true },
      // "People" became "Legends".
      { source: "/people", destination: "/legends", permanent: true },
      { source: "/people/:slug", destination: "/legends/:slug", permanent: true },
    ];
  },
};

export default nextConfig;
