import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/fabapp-website",
  assetPrefix: "/fabapp-website",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
