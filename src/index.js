import React from 'react';
import ReactDOM from 'react-dom';
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
      { name: 'binary',     title: 'Binary Mode',     value: '0110' },
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
        <ModeButton
          title={mode.title}
          currentMode={this.state.mode}
          mode={mode.name}
          onClick={(mode) => this.handleModeChange(mode)}
          value={mode.value}
        />
      );
    });

    return (
      <div className="mystery-calculator">
        <header>
          <h1>The Mystery Calculator</h1>
          <h2>
            Pick any number from 1 to 63.
            Click the cards that include your number.
            Reveal below!
          </h2>
        </header>
        <article className="pages">
          {pages}
        </article>
        <footer>
          <div className="modes">
            {modeOptions}
          </div>
          <Answer
            number={this.calculate(this.state.selectedPages)}
            mode={this.state.mode}
            reveal={this.state.reveal}
            onReveal={() => this.setState({reveal: true})}
          />
        </footer>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <MysteryCalculator />,
  document.getElementById('mystery-calculator')
);
