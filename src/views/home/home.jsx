import React from 'react'
// import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import './Home.less'
import ComA from '@/components/home/ComA'
import ComB from '@/components/home/ComB'
import ComC from '@/components/home/ComC'
import {settmData} from '@/redux/actions'


class HomeIndex extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
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
  componentDidMount () {
    console.log('home.init:', this.props)
    if (!this.props.tmList.data.length) {
      this.init()
    }
  }
  // 初始化
  init () {
    let { params } = this.state
    this.$post('pick/tm_resource/list', params).then(res => {
      if (res.code === 200) {
        console.log('tmList:',this.props)
        this.props.setTmList(res.for_sale_data.data)
        this.setState({required: true})
      }
    })
  }
  render () {
    return (
      <div className="home-page">
        <ComA/>
        <ComB/>
        <ComC/>
        <br/>
        <hr></hr>
        {this.props.tmList.data.length > 0 ? <p>数据列表请求完成，发送action成功, blog 组件内查看</p> : ''}
      </div>
    )
  }
}
// export default withRouter(HomeIndex)
const mapDispatchToProps = dispatch => {
  return {
    setTmList: (action) => dispatch(settmData(action))
  }
}
const mapStateToProps = state => {
  console.log('HOME.mapState:', state)
  return state
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeIndex)
