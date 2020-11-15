import React from 'react'
import ReactDom from 'react-dom'
import './assets/less/reset.less'

import AppRouter from '@/router/router'

class App extends React.Component {
    render(){
        return (
          <AppRouter />
        )
    }
}
ReactDom.render(<App/>,document.getElementById("app"))