import React from 'react'
import ReactDom from 'react-dom'
import Lockr from 'lockr'
import {Provider} from 'react-redux'
import 'amfe-flexible'
import './assets/less/index.less'
// 开发环境也使用自动注入 cdn 资源，这里注释
// import 'antd-mobile/dist/antd-mobile.css'
import AppRouter from '@/router/router'
import store from '@/redux/store'
import axios, {post, get, doDelete, patch, put} from '@/utils/request'

React.Component.prototype.$Lockr = Lockr
React.Component.prototype.$axios = axios
React.Component.prototype.$get = get
React.Component.prototype.$post = post
React.Component.prototype.$delete = doDelete
React.Component.prototype.$patch = patch
React.Component.prototype.$put = put

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <AppRouter/>
      </Provider>
    )
  }
}
ReactDom.render(<App/>,document.getElementById('app'))

/* eslint-disable */
if (module.hot) {
  module.hot.accept()
}
/* eslint-enable */
