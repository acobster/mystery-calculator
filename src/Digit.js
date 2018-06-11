import React from 'react'

class Digit extends React.Component {
  render() {
    // digits are "significant" in the sense that they
    // represent the significant digit in a power of 2
    const _class = this.props.significant ?
      'digit significant-digit' :
      'digit'

    return (
      <span className={_class}>{this.props.digit}</span>
    )
  }
}

export default Digit
