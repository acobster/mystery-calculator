import React from 'react'
import Num from './Num'

const BinaryCalculation = ({ number, selectedPages }) => {
  const addends = selectedPages.map((p) => {
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
        <Num number={number} mode="binary" />
      </div>
    </div>
  )
}

export default BinaryCalculation
