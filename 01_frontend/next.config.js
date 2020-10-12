
const path = require('path');

module.exports = {
  webpack: (config, { }) => {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          name: '[name].[ext]'
        }
      }
    });
    config.resolve.modules.push(path.resolve('./'));
    return config;
  }
};