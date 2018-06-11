import React from 'react';

import Digit from './Digit.js'

class Num extends React.Component {
  toBinary(n) {
    // leftPad to ensure all binary nums are the same length
    const binaryStr = leftPad(n.toString(2), 6, '0')

    // map each digit to a Digit component,
    // for special markup depending on significance;
    // reverse digits so that the significant digit's place
    // corresponds with the page number
    return binaryStr.split('').reverse().map((digit, i) => {
      const significant = i === this.props.pageNumber

      return (
        <Digit
          digit={digit}
          significant={significant}
          key={i}
        />
      )
    }).reverse()
  }

  renderNumber() {
    const modes = {
      mystery: (n) => (n),
      binary: (n) => (this.toBinary(n)),
      decimal: (n) => (n),
      // TODO take a cohort prop, for highlighting possibilities
      explainer: (n) => (n),
    };

    return modes[this.props.mode](this.props.number);
  }

  render() {
    const power = this.props.powerOfTwo ? 'power-of-2' : ''
    return (
      <span className={"number "+this.props.mode+"-mode "+power}>
        {this.renderNumber()}
      </span>
    );
  }
}

function leftPad(str, totalDigits, padChar) {
  if (str.length >= totalDigits) return str;

  let padLength = totalDigits - str.length;
  return Array(padLength).fill(padChar).join('') + str;
}

export default Num;
