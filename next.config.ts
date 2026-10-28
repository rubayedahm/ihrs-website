import type { NextConfig } from "next";

// Set when hosting from a sub-folder (e.g. GitHub Pages: "/ihrs-website").
// Leave empty once a custom domain such as ihrsglobal.org is connected.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

// Static export: the build produces plain HTML/CSS/JS in `out/`, which can be
// hosted on GitHub Pages, Vercel, Netlify, Cloudflare Pages or any web server.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  images: { loader: "custom", loaderFile: "./src/lib/image-loader.ts" },
};

export default nextConfig;
