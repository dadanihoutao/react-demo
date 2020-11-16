import React from 'react'
import './home.less'
import { Button } from 'antd-mobile'

export default class HomeIndex extends React.Component {
  constructor (props) {
    super(props)
    this.data = {
      params: {
        page: 1,
        tmClass: '',
        goods: '',
        min_price: '',
        max_price: '',
        is_paginate: 1,
        id: '',
        term_start: '',
        chin_num: '',
        eng_num: '',
        is_strict: '',
        is_sole: '',
        order_price: '',
        search: ''
      }
    }
  }
  UNSAFE_componentWillMount () {
    console.log('首页')
    this.init()
  }
  // 初始化
  init () {
    console.log(2222444)
    let { params } = this.data
    this.$post('pick/tm_resource/list', params).then(res => {
      if (res.code === 200) {
        console.log(res)
      }
    })
  }
  render () {
    return (
      <div className="home-page">
        <p className="home-text">HomeIndex</p>
        <Button type="primary">按钮啊</Button>
      </div>
    )
  }
}
