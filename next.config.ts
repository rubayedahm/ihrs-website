import type { NextConfig } from "next";

// Static export: the build produces plain HTML/CSS/JS in `out/`, which can be
// hosted on Vercel, Netlify, Cloudflare Pages, GitHub Pages or any web server.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
