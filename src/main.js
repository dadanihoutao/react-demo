/* eslint-disable */
import Axios from '@/utils/request'
/* eslint-enable */
import React from 'react'
import ReactDom from 'react-dom'
import './assets/less/index.less'
import 'antd-mobile/dist/antd-mobile.css'
import AppRouter from '@/router/router'

class App extends React.Component {
  render () {
    return (
      <AppRouter />
    )
  }
}
ReactDom.render(<App/>,document.getElementById('app'))

/* eslint-disable */
if (module.hot) {
  module.hot.accept()
}
/* eslint-enable */
