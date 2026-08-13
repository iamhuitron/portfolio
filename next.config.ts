import type { NextConfig } from "next";

// Staying on the "previous" (non-Cache-Components) caching model for now —
// it's the simpler mental model and all GitHub data fetches below opt in
// to caching explicitly via `next: { revalidate }`. Flip on
// `cacheComponents: true` later if you want per-segment `"use cache"` +
// Suspense-based partial prerendering; not needed for a site this size.
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "raw.githubusercontent.com" },
      { protocol: "https", hostname: "camo.githubusercontent.com" },
      { protocol: "https", hostname: "user-images.githubusercontent.com" },
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
      { protocol: "https", hostname: "github.com" },
    ],
  },
};

export default nextConfig;
