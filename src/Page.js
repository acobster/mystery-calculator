import React from 'react';

import Num from './Num.js';

const powersOfTwo = Array(6).fill(null).map((_, n) => Math.pow(2, n))

const numbersByPage = powersOfTwo.reduce((pages, power, n) => {
  pages[n] = [];
  for (var i = power; i < 64; i++) {
    if ((i|power) === i) {
      pages[n].push(i);
    }
  }

  return pages;
}, {})


class Page extends React.Component {
  constructor(props) {
    super(props);

    this.numbers = numbersByPage[props.number]
  }

  selectedClass() {
    return this.props.selected ? 'selected' : '';
  }

  render() {
    const numbers = this.numbers.map((n) => {
      return (
        <Num
          key={n}
          number={n}
          mode={this.props.mode}
          pageNumber={this.props.number}
          powerOfTwo={powersOfTwo.includes(n)}
        />
      );
    });

    return (
      <div className={"page "+this.selectedClass()} onClick={this.props.onClick}>
        {numbers}
      </div>
    );
  }
}

export default Page;
