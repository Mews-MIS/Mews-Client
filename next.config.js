/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
  webpack: (config) => {
    if (isServer) {
      // 서버 빌드에서 스토리북 코드를 제외합니다.
      config.module.rules.push({
        test: [/\.stories\.jsx?$/, /index\.js$/],
        use: {
          loader: "ignore-loader",
        },
      });
    }
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
