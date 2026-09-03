import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  basePath: "/mk-portfolio",
  assetPrefix: "/mk-portfolio/",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
