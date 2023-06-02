/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ["d3gurpvil0se70.cloudfront.net", "drklwd0v967bd.cloudfront.net"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d3gurpvil0se70.cloudfront.net",
        port: "",
        pathname: "/thirds/**",
      },
      {
        protocol: "https",
        hostname: "drklwd0v967bd.cloudfront.net",
        port: "",
        pathname: "/upfiles/images/**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        destination: "https://ysmedi.click/:path*",
        source: "/proxy/:path*",
      },
    ];
  },
  reactStrictMode: false,
  async headers() {
    return [
      {
        // matching all API routes
        source: "/proxy/:path*",
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
};

module.exports = nextConfig;
