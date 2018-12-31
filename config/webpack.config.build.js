'use strict';

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const paths = require('./paths');
const base = require('../config/webpack.base');

module.exports = {
  mode: "development",
  devtool: false,
  entry: [
    require.resolve('./polyfills'),
    paths.appIndexJs,
  ],
  output: {
    pathinfo: true,
    filename: 'index.js',
    chunkFilename: '[name].chunk.js',
    libraryTarget: 'umd'
  },
  resolve: base.resolve,
  module: base.module,
  plugins: base.plugins.concat([
    new ForkTsCheckerWebpackPlugin({
      async: false,
      tsconfig: paths.appTsConfig,
      tslint: paths.appTsLint,
    }),
  ]),
  node: base.node,
  performance: {
    hints: false,
  },
};
