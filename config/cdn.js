/**
 * 测试环境和生产环境，使用 CDN 引入
 * antd-mobile js 不支持全局引入，只能按需加载，(测试以后js文件还是会被打包进去)
 * 这里先注释掉，只留下全局引入 antd-mobile.min.css 文件
 * antd-mobile.min.css 开发环境也是 CDN 自动注入到index.html 文件中，main.js 中无需再引入
 */

// npm run build 时排除的第三方资源
exports.externals = {
  'react': 'React',
  'react-dom': 'ReactDOM',
  'react-router-dom': 'ReactRouterDOM',
  'redux': 'Redux',
  'react-redux': 'ReactRedux',
  // 'antd-mobile': 'antd-mobile'
}

// CDN 资源链接
exports.libs = {
  js: [
    'https://cdn.bootcdn.net/ajax/libs/react/16.14.0/umd/react.production.min.js',
    'https://cdn.bootcdn.net/ajax/libs/react-dom/16.14.0/umd/react-dom.production.min.js',
    'https://cdn.bootcdn.net/ajax/libs/react-router-dom/5.2.0/react-router-dom.min.js',
    'https://cdn.bootcdn.net/ajax/libs/redux/4.0.5/redux.min.js',
    'https://cdn.bootcdn.net/ajax/libs/react-redux/7.2.2/react-redux.min.js',
    // 'https://cdn.bootcdn.net/ajax/libs/antd-mobile/2.3.4/antd-mobile.min.js'
  ],
  css: [
    'https://cdn.bootcdn.net/ajax/libs/antd-mobile/2.3.4/antd-mobile.min.css'
  ]
}