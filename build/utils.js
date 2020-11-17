const path = require('path')
const os = require('os')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const packageConfig = require('../package.json')
const cdns = require('../config/cdn')

exports.mergeLibs = (type = '') => {
  let libs = []
  let keys = []
  if (type) {
    keys = [type]
  } else {
    keys = Object.keys(cdns.libs)
  }
  keys.forEach(key => {
    cdns.libs[key].forEach(item => {
      let obj = {
        type: key,
        append: false,
        publicPath: false,
        path: item
      }
      libs.push(obj)
    })
  })
  return libs
}

exports.resolve = (dir) => {
  return path.resolve(__dirname, dir)
}

exports.isDev = () => {
  return process.env.NODE_ENV === 'development';
}

exports.assetsPath = (_path) => {
  return path.posix.join('static', _path)
}

exports.createNotifierCallback = () => {
  const notifier = require('node-notifier')

  return (severity, errors) => {
    if (severity !== 'error') return
    const error = errors[0]
    const filename = error.file && error.file.split('!').pop()
    notifier.notify({
      title: packageConfig.name,
      message: severity + ': ' + error.name,
      subtitle: filename || '',
      icon: path.join(__dirname, '../', 'static/react.jpg') || ''
    })
  }
}

exports.cssLoaders = (options) => {
  options = options || {}
  const cssLoader = { 
    loader: 'css-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  function generateLoaders (loader, loaderOptions) {
    const loaders = [cssLoader, 'postcss-loader']
    if (loader) {
      loaders.push({
        loader: loader+'-loader',
        options: Object.assign({}, loaderOptions, {
            sourceMap: options.sourceMap
        })
      })
    }
    if (options.extract) {
      return [{
        loader: MiniCssExtractPlugin.loader,
        options: {
          hmr: process.env.NODE_ENV !== 'development',
          reloadAll: true
        }
      }].concat(loaders)
    } else {
      return ['style-loader'].concat(loaders)
    }
  }

  const object = {
    css: generateLoaders(),
    less: generateLoaders('less')
  }
  const output = []
  for (let key in object) {
    const loader = object[key]
    output.push({
        test: new RegExp('\\.' + key + '$'),
        use: loader
    })
  }
  return output
}

exports.getIPAdress = () => {
  let interfaces = os.networkInterfaces()
  for (var devName in interfaces) {
      let iface = interfaces[devName]
      for (let i = 0; i < iface.length; i++) {
          let alias = iface[i];
          if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
              return alias.address;
          }
      }
  }
}
