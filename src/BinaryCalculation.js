import React from 'react'
import Num from './Num'

class BinaryCalculation extends React.Component {
  render() {
    const addends = this.props.selectedPages.map((p) => {
      return (
        <div className="binary-addend" key={p}>
          <Num number={Math.pow(2, p)} mode="binary" />
        </div>
      )
    }, '')

    return (
      <div className="binary-calculation equation">
        <div className="binary-addends">
          {addends}
        </div>
        <div className="binary-sum">
          <Num number={this.props.number} mode="binary" />
        </div>
      </div>
    )
  }
}

export default BinaryCalculation
