import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: [
    "@ufc-cornerman/db",
    "@ufc-cornerman/research-engine",
  ],
};

export default nextConfig;
