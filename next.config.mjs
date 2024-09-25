import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
    INTERNAL_BASE_URL: process.env.INTERNAL_BASE_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "app.oxygenstones.com",
      },
    ],
  },
  output: "standalone",
  cacheMaxMemorySize: 1,
};
// module.exports = withNextIntl(nextConfig);
export default withNextIntl(nextConfig);
