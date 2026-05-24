import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  images: {
    qualities: [75, 100],
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/leistungen/verpackung",
        destination: "/leistungen/verpackung-material",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
