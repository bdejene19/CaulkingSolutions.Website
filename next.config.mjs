/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fastly.picsum.photos",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "windowdepottylertx.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "energy.gov",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "contentgrid.homedepot-static.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
