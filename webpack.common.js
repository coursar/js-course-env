// CJS -> require + module.exports
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Config Webpack'а
module.exports = {
  target: 'web',
  // entry: src/index.js
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
  ],
};
