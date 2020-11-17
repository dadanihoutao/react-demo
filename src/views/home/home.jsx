import React from 'react'
import {withRouter} from 'react-router-dom'
import './Home.less'
import ComA from '@/components/home/ComA'
import ComB from '@/components/home/ComB'
import {Button} from 'antd-mobile'


class HomeIndex extends React.Component {
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
    // this.init()
  }
  // 初始化
  init () {
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
        <ComA/>
        <ComB/>
        <Button className="my-btn" type="primary">按钮啊</Button>
      </div>
    )
  }
}
export default withRouter(HomeIndex)
// export default HomeIndex
