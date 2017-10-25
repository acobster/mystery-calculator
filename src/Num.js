import React from 'react';

class Num extends React.Component {
  renderNumber() {
    const modes = {
      mystery: (n) => (n),
      binary: (n) => (leftPad(n.toString(2), 6, '0')),
      decimal: (n) => (n),
      // TODO take a cohort prop, for highlighting possibilities
      explainer: (n) => (n),
    };

    return modes[this.props.mode](this.props.number);
  }

  render() {
    return (
      <span className={"number "+this.props.mode+"-mode"}>
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
