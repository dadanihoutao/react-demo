import React, {Component} from 'react'
import {connect} from 'react-redux'
import {reduceCount} from '@/redux/actions'

class ComC extends Component {
  subtraction = () => {
    console.log('减：', this.props)
    this.props.sendAction()
  }
  render () {
    return (
      <div className="comc-page">
        <button onClick={this.subtraction}> - </button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    sendAction: () => dispatch(reduceCount())
  }
}
export default connect(null, mapDispatchToProps)(ComC)
