import React from 'react';

import Num from './Num.js';
import { powersOfTwo } from './util'

const numbersByPage = powersOfTwo.reduce((pages, power, n) => {
  pages[n] = [];
  for (var i = power; i < 64; i++) {
    if ((i|power) === i) {
      pages[n].push(i);
    }
  }

  return pages;
}, {})


export default ({ number, mode, selected, onClick }) => {
  return (
    <div className={`page ${selected ? 'selected' : ''} ${mode}-mode`}
      onClick={onClick}>
      {numbersByPage[number].map((n) => (
        <Num
          key={n}
          number={n}
          mode={mode}
          power={number}
        />
      ))}
    </div>
  )
}