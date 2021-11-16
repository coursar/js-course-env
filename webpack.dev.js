const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = webpackMerge.merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',

  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    open: true,
    port: 8888,
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
});
