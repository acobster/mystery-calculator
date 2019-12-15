import React from 'react';

import Digit from './Digit.js'
import { powersOfTwo } from './util'

const toBinary = (n, power, showSignificance) => {
  // leftPad to ensure all binary nums are the same length
  const binaryStr = leftPad(n.toString(2), 6, '0')

  // map each digit to a Digit component,
  // for special markup depending on significance;
  // temporarily reverse digits so that the significant digit's
  // place corresponds with the page number
  return binaryStr.split('').reverse().map((digit, i) => {
    const significant = showSignificance && i === power

    return (
      <Digit
        digit={digit}
        significant={significant}
        key={i}
      />
    )
  }).reverse()
}

const leftPad = (str, totalDigits, padChar) => {
  if (str.length >= totalDigits) return str

  let padLength = totalDigits - str.length
  return Array(padLength).fill(padChar).join('') + str
}

const renderNumber = (number, power, mode) => {
  const modes = {
    mystery:   (n) => (n),
    decimal:   (n) => (n),
    binary:    (n) => (toBinary(n, power, false)),
    explainer: (n) => (toBinary(n, power, true)),
  }

  return modes[mode](number);
}

export default ({ mode, number, power }) => (
  <span className={`number ${mode}-mode power`}>
    {renderNumber(number, power, mode)}
  </span>
)