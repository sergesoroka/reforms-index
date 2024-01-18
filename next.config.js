/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  i18n: {
    locales: ["en", "ua", "ru"],
    defaultLocale: "ua",
    localeDetection: false,
  },
  images: {
    remotePatterns: [
      {
        hostname: 'api-reforms.voxukraine.org'
      },
    ],
    domains: ["api-reforms.voxukraine.org","reforms.voxukraine.org","voxukraine.org", "kse.ua"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;
