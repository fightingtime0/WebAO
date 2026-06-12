/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export — deployable free on Vercel / any static host
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
