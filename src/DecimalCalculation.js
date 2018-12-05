import React from 'react'

class DecimalCalculation extends React.Component {
  render() {
    const powers = this.props.selectedPages.map(p => Math.pow(2, p))
    // sort numerically
    powers.sort((a, b) => (a - b))
    const left = powers.join(' + ')

    return (<p className="equation">{left} = {this.props.number}</p>)
  }
}

export default DecimalCalculation
