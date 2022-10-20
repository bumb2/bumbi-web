const withImages = require('next-images');

const nextConfig = {
  images: {
    domains: ['localhost', 'bumbi.dev'],
  },
  reactStrictMode: true,
  swcMinify: true,
  fileExtensions: ['jpg', 'jpeg', 'png', 'gif'],
  module: {
    rules: [
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[hash]-[name].[ext]',
            },
          },
        ],
      },
    ],
  },
};

module.exports = withImages(nextConfig);
