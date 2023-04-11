/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
  eslint: {
    tsconfigRootDir: __dirname,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  images: {
    domains: ["image.tmdb.org"],
  },
};

module.exports = nextConfig;
