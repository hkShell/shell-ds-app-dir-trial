/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@sede-x/shell-ds-react-framework'],
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
