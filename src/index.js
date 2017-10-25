import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Page from './Page.js';

class MysteryCalculator extends React.Component {
  constructor(props) {
    super(props);

    this.MODES = ['mystery', 'decimal', 'binary', 'explainer'];
    this.PAGE_COUNT = 6;

    this.state = {
      mode: 'mystery',
      selectedPages: [],
    };
  }

  handleModeChange(mode) {
    this.setState({mode: mode});
    console.log('mode -> ', mode);
  }

  togglePageSelected(i) {
    let pages = this.state.selectedPages.slice();

    if (this.pageSelected(i)) {
      pages.splice(pages.indexOf(i), 1);
    } else {
      pages.push(i);
    }

    this.setState({selectedPages: pages});
    console.log(this.state.selectedPages);
  }

  pageSelected(i) {
    return this.state.selectedPages.indexOf(i) > -1;
  }

  calculate(pages) {
    return pages.reduce((sum, n) => (sum + Math.pow(2, n)), 0);
  }

  render() {
    let pages = Array(this.PAGE_COUNT).fill(null).map((_, i) => (
      <Page
        key={i}
        number={i}
        mode={this.state.mode}
        onClick={() => this.togglePageSelected(i)}
        selected={this.pageSelected(i)}
      />
    ));

    return (
      <div className="mystery-calculator">
        <article className="pages">
          {pages}
        </article>
        <aside className="answer">
          {this.calculate(this.state.selectedPages)}
        </aside>
        <ul className="modes">
          <li>
            <button
              title="Mystery Mode"
              onClick={() => this.handleModeChange('mystery')}
            >?</button>
          </li>
          <li>
            <button
              title="Decimal Mode"
              onClick={() => this.handleModeChange('decimal')}
            >32</button>
          </li>
          <li>
            <button
              title="Binary Mode"
              onClick={() => this.handleModeChange('binary')}
            >0110</button>
          </li>
          <li>
            <button
              title="Explainer Mode"
              onClick={() => this.handleModeChange('explainer')}
            >Explain!</button>
          </li>
        </ul>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <MysteryCalculator />,
  document.getElementById('mystery-calculator')
);
