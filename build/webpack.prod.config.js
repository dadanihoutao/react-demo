const webpackMerge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')
const utils = require('./utils')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const webpackConfig = webpackMerge(baseWebpackConfig, {
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({
      filename: utils.resolve('./../dist/index.html'),
      template: 'index.html',
      inject: true,
      hash: true,
      minify: {
        removeComments: true, // 去注释
        collapseWhitespace: true, // 压缩空格
        removeAttributeQuotes: true // 去除属性 标签的 引号  例如 <p id="test" /> 输出 <p id=test/>
      }
    })
  ]
})

module.exports = webpackConfig