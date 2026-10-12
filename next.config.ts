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
      // The profile used to live at the top level, before /people/<slug>.
      { source: "/banaschewski", destination: "/people/banaschewski", permanent: true },
      { source: "/lineage", destination: "/people", permanent: true },
    ];
  },
};

export default nextConfig;
