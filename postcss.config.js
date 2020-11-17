module.exports = {
  "plugins": [
    require('postcss-import'),
    require('postcss-url'),
    require('autoprefixer')({browsers: ['Android >= 4.0', 'iOS >= 7']}),
    require('postcss-pxtorem')({
      rootValue: 75, // 设计稿以宽度750px为例  开头大写的Px 不转换 => height: 100Px 
      selectorBlackList: ['am-'], // 排除，am-开头的class，不进行rem转换
      propList: ['*', '!font-weight', '!letter-spacing'], // 可以从px更改为rem的属性  感叹号开头的不转换
      mediaQuery: true, // 允许在媒体查询中转换px。
      minPixelValue: 0, // 设置要替换的最小像素值。
      exclude: /node_modules/i // 排除 node_modules 文件(node_modules 内文件禁止转换)
    })
  ]
}
