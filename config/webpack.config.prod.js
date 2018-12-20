'use strict';

process.env.NODE_ENV = 'production';

const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const paths = require('./paths');
const getClientEnvironment = require('./env');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const publicPath = paths.servedPath;
const shouldUseRelativeAssetPaths = publicPath === './';
const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false';
const publicUrl = publicPath.slice(0, -1);
const env = getClientEnvironment(publicUrl);
const base = require('../config/webpack.base');

if (env.stringified['process.env'].NODE_ENV !== '"production"') {
  throw new Error('Production builds must have NODE_ENV=production.');
}

module.exports = {
  mode: 'production',
  bail: true,
  devtool: false,
  entry: paths.components,
  output: {
    path: paths.appBuild,
    filename: (chunkData) => {
      const context = chunkData.chunk.entryModule.context;
      if (context) {
        const folderName = context.substring(context.lastIndexOf('/') + 1);
        return 'components/'+ folderName +'/[name].js'
      }
      return 'components/[name]/[name].js'
    },
    // publicPath: publicPath,
  },
  resolve: base.resolve,
  module: base.module,
  plugins: base.plugins.concat([
    new webpack.DefinePlugin(env.stringified),
    // new UglifyJsPlugin({
    //   uglifyOptions: {
    //     parse: {
    //       ecma: 8,
    //     },
    //     compress: {
    //       ecma: 5,
    //       warnings: false,
    //       comparisons: false,
    //     },
    //     mangle: {
    //       safari10: true,
    //     },
    //     output: {
    //       ecma: 5,
    //       comments: false,
    //       ascii_only: true,
    //     },
    //   },
    //   parallel: true,
    //   cache: true,
    //   sourceMap: false,
    // }), // Note: this won't work without ExtractTextPlugin.extract(..) in `loaders`.
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new ForkTsCheckerWebpackPlugin({
      async: false,
      tsconfig: paths.appTsConfigProd,
      tslint: paths.appTsLint,
    }),
    new CopyWebpackPlugin([
      {
        from: 'src/components/**/*.d.ts',
        to: 'dist',
        force: true,
      }
    ]),
  ]),
  node: base.node,
};
