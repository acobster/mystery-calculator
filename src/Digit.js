import React from 'react'

class Digit extends React.Component {
  render() {
    const _class = this.props.significant ?
      'digit significant-digit' :
      'digit'
    return (
      <span className={_class}>{this.props.digit}</span>
    )
  }
}

export default Digit
