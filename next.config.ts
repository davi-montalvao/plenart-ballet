import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable styled-components SWC transform for proper SSR class names
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
