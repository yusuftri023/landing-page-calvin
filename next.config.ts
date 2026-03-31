import { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_BASE_URL: "https://protema-website.vercel.app/",
  },
};

export default nextConfig;
