const webpackMerge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')
const utils = require('./utils')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin')
const cdns = require('../config/cdn')

const webpackConfig = webpackMerge(baseWebpackConfig, {
  performance: {
    hints: false
  },
  output: {
    path: utils.resolve('../dist'),
    publicPath: '/',
    filename: utils.assetsPath('js/[name].[contenthash:7].js'),
    chunkFilename: utils.assetsPath('js/[name].[contenthash:7].js'),
  },
  mode: 'production',
  devtool: 'none',
  module: {
    rules: utils.cssLoaders({extract: true, sourceMap: false})
  },
  externals: cdns.externals,
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: utils.resolve('../dist/index.html'),
      template: 'index.html',
      inject: true
    }),
    new HtmlWebpackTagsPlugin({
      tags: utils.mergeLibs()
    })
  ],
  optimization: {
    namedChunks: true,
    moduleIds: 'hashed',
    minimizer: [
      new UglifyJsPlugin({
        parallel: true,
        sourceMap: false,
        uglifyOptions: {
          warnings: false,
          compress: {
            unused: true,
            drop_debugger: true,
            // drop_console: true,
          },
          output: {
            comments: false
          }
        }
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: { 
          discardComments: { removeAll: true }
        } 
      })
    ],
    splitChunks: {
      chunks: "all",
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 5,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        antdui: {
          priority: 3,
          test: /[\\/]node_modules[\\/](antd-mobile)[\\/]/,
          enforce: true,
          reuseExistingChunk: true
        },
        basic: {
          priority: 3, 
          test: /[\\/]node_modules[\\/](react|react-dom|react-router|react-router-dom|redux|react-redux|axios)[\\/]/,
          enforce: true,
          reuseExistingChunk: true
        },
        vendors: {
          minChunks: 1,
          priority: -10,
          test: /[\\/]node_modules[\\/]/,
          enforce: true,
          reuseExistingChunk: true
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    },
    runtimeChunk: {
      name: 'manifest'
    }
  }
})

if (process.env.npm_config_analyz) {
  webpackConfig.plugins.push(new BundleAnalyzerPlugin({
    analyzerMode: 'server',
    analyzerHost: '127.0.0.1',
    analyzerPort: 8888,
    openAnalyzer: true
  }))
}

module.exports = webpackConfig