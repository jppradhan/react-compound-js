'use strict';

process.env.NODE_ENV = 'production';

const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const paths = require('./paths');
const getClientEnvironment = require('./env');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const publicPath = paths.servedPath;
const publicUrl = publicPath.slice(0, -1);
const env = getClientEnvironment(publicUrl);
const base = require('../config/webpack.base');
const DeclarationPlugin = require('declaration-bundler-webpack-plugin');

if (env.stringified['process.env'].NODE_ENV !== '"production"') {
  throw new Error('Production builds must have NODE_ENV=production.');
}

module.exports = {
  mode: 'production',
  bail: true,
  devtool: false,
  entry: [
    require.resolve('./polyfills'),
    paths.appIndexJs,
  ],
  output: {
    path: paths.appBuild,
    filename: 'index.js',
  },
  resolve: base.resolve,
  module: base.module,
  plugins: base.plugins.concat([
    new webpack.DefinePlugin(env.stringified),
    new UglifyJsPlugin({
      uglifyOptions: {
        parse: {
          ecma: 8,
        },
        compress: {
          ecma: 5,
          warnings: false,
          comparisons: false,
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
    }), // Note: this won't work without ExtractTextPlugin.extract(..) in `loaders`.
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new ForkTsCheckerWebpackPlugin({
      async: false,
      tsconfig: paths.appTsConfigProd,
      tslint: paths.appTsLint,
    }),
    new DeclarationPlugin({
      moduleName:'./src/index.d.ts',
      out:'index.d.ts',
    })
  ]),
  node: base.node,
};
