/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.module.rules.push({
      exclude: /node_modules/,
      test: /\.svg$/,
      use: {
        loader: 'svg-react-loader',
      },
    });

    return config;
  },
};

module.exports = nextConfig;
