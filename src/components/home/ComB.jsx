import React from 'react'
import {connect} from 'react-redux'

class ComB extends React.Component {
  state = {
    aaa: 123
  }
  componentDidMount () {
    // this.setState({aaa: 444}, () => {
    //   console.log(this.state)
    // })
  }
  render () {
    console.log('ComB.render:', this.props)
    return (
      <div>
        <h1>{this.props.calculation.count}</h1>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('ComB:', state)
  return state
}

export default connect(mapStateToProps)(ComB)
