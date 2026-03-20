import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "yellostone.com.pk",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;