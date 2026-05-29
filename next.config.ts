import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",         // ← generates static HTML in /out
  reactCompiler: true,
  images: {
    unoptimized: true,      // ← GitHub Pages can't run Next.js image optimizer
  },
  basePath: "/MEHEXA",   // ← replace with your GitHub repo name (e.g., "/mehexa-web")
};

export default nextConfig;
