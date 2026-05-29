import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",         // ← generates static HTML in /out
  reactCompiler: true,
  trailingSlash: true,      // ← GitHub Pages needs /page/ → /page/index.html
  images: {
    unoptimized: true,      // ← GitHub Pages can't run Next.js image optimizer
  },
  basePath: "/MEHEXA",      // ← matches GitHub repo name for github.io/MEHEXA
};

export default nextConfig;
