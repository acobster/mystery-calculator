import React from 'react';

import Num from './Num.js';

const numbersByPage = ((pageCount) => {
  return Array(pageCount).fill(null).reduce((pages, _, n) => {
    pages[n] = [];
    let powerOfTwo = Math.pow(2, n);
    for (var i = powerOfTwo; i < 64; i++) {
      if ((i|powerOfTwo) === i) {
        pages[n].push(i);
      }
    }

    return pages;
  }, {});
})(6);

function getNumbersOnPage(i) {
  return numbersByPage[i];
}

class Page extends React.Component {
  constructor(props) {
    super(props);

    this.numbers = getNumbersOnPage(props.number)
  }

  selectedClass() {
    return this.props.selected ? 'selected' : '';
  }

  render() {
    const numbers = this.numbers.map((n) => {
      return (
          <Num key={n} number={n} mode={this.props.mode} />
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
