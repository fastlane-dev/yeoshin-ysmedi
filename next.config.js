/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["d3gurpvil0se70.cloudfront.net"],
  },
  async rewrites() {
    return [
      {
        destination: "https://d3gurpvil0se70.cloudfront.net/:path*",
        source: "/:path*",
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
  reactStrictMode: false,
  swcMinify: true,
};

module.exports = nextConfig;
