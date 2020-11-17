const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')
const utils = require('./utils')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')

const HOST = utils.getIPAdress()

const devWebpackConfig = webpackMerge(baseWebpackConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: utils.cssLoaders({extract: false, sourceMap: true})
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: utils.resolve('../dist/index.html'),
      template: 'index.html'
    })
  ],
  devServer: {
    clientLogLevel: 'warning',
    // open: true,
    host: HOST || '127.0.0.1',
    historyApiFallback: true,
    hot: true,
    contentBase: false,
    compress: true,
    port: '8082',
    publicPath: '/',
    quiet: true,
    overlay: {
      warnings: false,
      errors: true
    },
    disableHostCheck: true,
    proxy: {
      // "/api": {
      //     secure: false,
      //     target: "http://www.baidu.com/"
      // }
    }
  }
})

// 这里还有点问题，回头再看看来
module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = devWebpackConfig.devServer.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      devWebpackConfig.devServer.port = port
      devWebpackConfig.plugins.push(new FriendlyErrorsWebpackPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`]
        },
        onErrors: utils.createNotifierCallback()
      }))
      resolve(devWebpackConfig)
    }
  })
})