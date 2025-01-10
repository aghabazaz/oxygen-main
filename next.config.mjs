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

  async rewrites() {
    return [
      ...[
        "favicon.ico",
        "sw.js",
        "sitemap.xml",
        "robots.txt",
        "manifest.json",
      ].map((file) => ({
        source: `/${file}`,
        destination: `/${file}`,
      })),
      ...["api", "_next", "assets", "img"].map((dir) => ({
        source: `/${dir}/:path*`,
        destination: `/${dir}/:path*`,
      })),
      ...["fr", "es", "pt", "ru", "ja", "ko"].map((locale) => ({
        source: `/${locale}/:path*`,
        destination: `/${locale}/:path*`,
      })),
      {
        source: "/:path*",
        destination: "/en/:path*",
      },
    ];
  },

  async redirects() {
    return [
      {
        source: "/en",
        destination: "/",
        permanent: true,
      },
      {
        source: "/en/:path*",
        destination: "/:path*",
        permanent: true,
      },
    ];
  },
};
// module.exports = withNextIntl(nextConfig);
export default withNextIntl(nextConfig);
