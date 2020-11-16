import React from 'react'
import {connect} from 'react-redux'
import {addNumber} from '@/redux/actions'

class ComA extends React.Component {
  
  handleClick = () => {
    console.log('ComA:', this.props)
    this.props.sendAction()
  }

  addNumber = () => {
    console.log('ComA:', this.props)
    this.props.addNumber()
  }


  render () {
    return (
      <div>
        <button onClick={this.handleClick}> + </button>
        <button onClick={this.addNumber}>+aaa</button>
      </div>
    )
  }
}
/*
这个函数要有一个返回值，返回值是一个对象
*/
// const mapDispatchToProps = dispatch => {
//   return {
//     sendAction: () => {
//       // 利用 dispatch 发送一个 action
//       // 传递action 对象我们要定义一个type 属性
//       dispatch({type: 'add_action'})
//     }
//   }
// }
// // A 是发送方，所以要实现 connect 第二个参数
// export default connect(null, mapDispatchToProps)(ComA)

const mapDispatchToProps = (dispatch) => {
  return {
    sendAction: () => {
      dispatch({type: 'add_action'})
    },
    addNumber: () => {
      dispatch(addNumber())
    }
  }
}

export default connect(null, mapDispatchToProps)(ComA)
