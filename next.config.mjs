/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        // hostname: "demo.vercel.store",
        hostname: "images.meesho.com",
      },
    ],
  },
};

export default nextConfig;
