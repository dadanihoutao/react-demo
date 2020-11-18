import React from 'react'
import {connect} from 'react-redux'

class BlogIndex extends React.Component {
  render () {
    console.log('blog.render:', this.props)
    return (
      <div>
        <ul className="list">
          {this.props.tmList.data.length > 0 ?
            this.props.tmList.data.map(item => {
              return (<li className="item" key={item.id}>{item.name}</li>)
            }) :
            <li>暂无数据</li>}
        </ul>
      </div>
    )
  }
}
const mapStateToProps = state => {
  console.log('blog:', state)
  return state
}
export default connect(mapStateToProps)(BlogIndex)
