/** @type {{eslint: {tsconfigRootDir: string}, images: {domains: string[]}, webpack: (function(*): *), reactStrictMode: boolean, serverless: boolean, compiler: {emotion: boolean}}} */
const nextConfig = {
  serverless: true,
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
