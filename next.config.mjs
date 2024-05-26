/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { staleTimes: { static: 0, dynamic: 0 } },
};

export default nextConfig;
