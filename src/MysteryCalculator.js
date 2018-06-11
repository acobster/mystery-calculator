import React from 'react';
import './index.css';

import Page from './Page.js';
import Answer from './Answer.js';
import ModeButton from './ModeButton.js';

class MysteryCalculator extends React.Component {
  constructor(props) {
    super(props);

    this.PAGE_COUNT = 6;

    this.state = {
      mode: 'binary',
      selectedPages: [],
      reveal: false,
    };

    this.modes = [
      { name: 'mystery',    title: 'Mystery Mode',    value: '?' },
      { name: 'decimal',    title: 'Decimal Mode',    value: '32' },
      { name: 'binary',     title: 'Binary Mode',     value: '011010' },
      { name: 'explainer',  title: 'Explainer Mode',  value: 'Explain!' },
    ];
  }

  handleModeChange(mode) {
    this.setState({
      mode: mode,
      reveal: (mode !== 'mystery'),
    });
  }

  togglePageSelected(i) {
    let pages = this.state.selectedPages.slice();

    if (this.pageSelected(i)) {
      pages.splice(pages.indexOf(i), 1);
    } else {
      pages.push(i);
    }

    this.setState({
      selectedPages: pages,
      reveal: false
    });
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

    let modeOptions = this.modes.map((mode, i) => {
      return (
        <li className="mode-option" key={i}>
          <ModeButton
            title={mode.title}
            currentMode={this.state.mode}
            mode={mode.name}
            onClick={(mode) => this.handleModeChange(mode)}
            value={mode.value}
          />
        </li>
      );
    });

    return (
      <div className="mystery-calculator">
        <h1>The Mystery Calculator</h1>
        <section className="book">
          <aside className="explainer">
            <p>
              Choose a number from 0 to 63,
              and click on each card where your number appears.
            </p>
            <p>
              Click REVEAL, and the Mystery Calculator will guess your number!
            </p>
            <p>Explore the different modes below to learn how this works.</p>
          </aside>
          <article className="pages">
            {pages}
          </article>
        </section>
        <ul className="modes">
          {modeOptions}
        </ul>
        <aside className="answer">
          <Answer
            number={this.calculate(this.state.selectedPages)}
            mode={this.state.mode}
            reveal={this.state.reveal}
            onReveal={() => this.setState({reveal: true})}
          />
        </aside>
      </div>
    );
  }
}

export default MysteryCalculator;
