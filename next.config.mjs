/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com/**",
      },
      {
        protocol: "http",
        hostname: "mars-1002/**",
      },
      {
        protocol: "http",
        hostname: "localhost/**",
      },
      {
        protocol: "https",
        hostname: "icon-library.com/**",
      },
    ],
  },
};

export default nextConfig;
