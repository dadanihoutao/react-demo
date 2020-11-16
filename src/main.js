/* eslint-disable */
import Axios from '@/utils/request'
/* eslint-enable */
import React from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
import './assets/less/index.less'
import 'antd-mobile/dist/antd-mobile.css'
import AppRouter from '@/router/router'
import store from '@/redux/store'


class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <AppRouter/>
      </Provider>
      // <AppRouter/>
    )
  }
}
ReactDom.render(<App/>,document.getElementById('app'))

/* eslint-disable */
if (module.hot) {
  module.hot.accept()
}
/* eslint-enable */
