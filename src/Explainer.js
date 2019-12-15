import React from 'react'

import BasicInstructions from './BasicInstructions'
import DecimalExplainer from './DecimalExplainer'
import BinaryExplainer from './BinaryExplainer'

export default ({ selectedPages, number, mode }) => {
  const explainersByMode = {
    mystery:   <BasicInstructions />,
    decimal:   <DecimalExplainer
                  selectedPages={selectedPages}
                  number={number}
                />,
    binary:    <BinaryExplainer
                  selectedPages={selectedPages}
                  number={number}
                  mode={mode}
                />,
    explainer: <div>hey</div>
  }

  return (
    <aside className="explainer">{explainersByMode[mode]}</aside>
  )
}