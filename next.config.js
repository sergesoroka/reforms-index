/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  i18n: {
    locales: ["en", "ua", "ru"],
    defaultLocale: "ua",
    localeDetection: false,
  },
  images: {
    domains: ["api-reforms.voxukraine.org","reforms.voxukraine.org","vox-imore.ra-devs.tech", "voxukraine.org", "kse.ua"],
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
