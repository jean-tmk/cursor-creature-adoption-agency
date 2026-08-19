const repo = "cursor-creature-adoption-agency";
const isProduction = process.env.NODE_ENV === "production";
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: isProduction ? `/${repo}` : "",
  assetPrefix: isProduction ? `/${repo}/` : "",
};
export default nextConfig;
