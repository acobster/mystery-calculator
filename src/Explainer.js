import React from 'react'

import BasicInstructions from './BasicInstructions'
import DecimalExplainer from './DecimalExplainer'
import BinaryExplainer from './BinaryExplainer'
import BossExplainer from './BossExplainer'

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
               />,
    explainer: <BossExplainer
                 selectedPages={selectedPages}
                 number={number}
               />
  }

  return (
    <aside className="explainer">{explainersByMode[mode]}</aside>
  )
}
