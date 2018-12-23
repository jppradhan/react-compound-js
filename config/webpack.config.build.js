'use strict';

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const paths = require('./paths');
const base = require('../config/webpack.base');

module.exports = {
  mode: "production",
  devtool: false,
  entry: [
    require.resolve('./polyfills'),
    paths.appIndexJs,
  ],
  output: {
    pathinfo: true,
    filename: 'index.js',
    chunkFilename: '[name].chunk.js'
  },
  resolve: base.resolve,
  module: base.module,
  plugins: base.plugins.concat([
    new UglifyJsPlugin({
      uglifyOptions: {
        parse: {
          ecma: 8,
        },
        compress: {
          ecma: 5,
          warnings: false,
          comparisons: false,
          inline: 1,
        },
        mangle: {
          safari10: true,
        },
        output: {
          ecma: 5,
          comments: false,
          ascii_only: true,
        },
      },
      parallel: true,
      cache: true,
      sourceMap: false,
    }),
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
