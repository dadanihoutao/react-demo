import React from 'react'
import {connect} from 'react-redux'
import {addCount} from '@/redux/actions'
import './ComA.less'

class ComA extends React.Component {

  addition = () => {
    console.log('加：', this.props)
    this.props.sendAction()
  }

  render () {
    return (
      <div className="com-a">
        <button onClick={this.addition}> + </button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    sendAction: () => dispatch(addCount())
  }
}
export default connect(null, mapDispatchToProps)(ComA)
