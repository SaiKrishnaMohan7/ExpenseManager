const merge = require('webpack-merge');
const baseConfig = require('./base.config');
const path = require('path');
const webpack = require('webpack');

module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, '../public'),
    publicPath: '/dist/',
    historyApiFallback: true,
    compress: true,
    port: 8080,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: 'inline-source-map',
});