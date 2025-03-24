import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // turbo: {
    //   rules: {
    //     "*.svg": {
    //       loaders: ["@svgr/webpack"],
    //       as: "*.js",
    //     },
    //   },
    // },
  },
  webpack: (config) => {
    // Add rule for SVG files
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        pathname: "/u/**",
      },
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;
