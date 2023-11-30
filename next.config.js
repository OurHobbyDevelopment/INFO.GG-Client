/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/pages/PlayerSearch", // 원하는 페이지 경로로 변경하세요.
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

module.exports = {
  images: {
    domains: ["media.valorant-api.com"],
  },
};
