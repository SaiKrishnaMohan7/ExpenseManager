const merge = require('webpack-merge');
const baseConfig = require('./base.config');
const path = require('path');

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true,
        compress: true,
        port: 8080
  }
});