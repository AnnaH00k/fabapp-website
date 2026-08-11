import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/fabapp",
  assetPrefix: "/fabapp",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
