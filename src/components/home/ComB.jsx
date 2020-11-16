import React from 'react'
import {connect} from 'react-redux'

class ComB extends React.Component {
  render () {
    console.log('ComB.render:',this.props)
    return (
      <div>
        {this.props.reducer.conut}
        <h1>{this.props.counter.number}</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('ComB:', state)
  return state
}

export default connect(mapStateToProps)(ComB)
