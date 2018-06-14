import React from 'react';
import './index.css';

import Page from './Page.js';
import Answer from './Answer.js';
import Explainer from './Explainer.js';
import ModeButton from './ModeButton.js';
import PrintButton from './PrintButton.js';

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
      reveal: (this.state.mode !== 'mystery'),
    });
  }

  pageSelected(i) {
    return this.state.selectedPages.indexOf(i) > -1;
  }

  calculate(pages) {
    return pages.reduce((sum, n) => (sum + Math.pow(2, n)), 0);
  }

  pagesInMode(mode) {
    return Array(this.PAGE_COUNT).fill(null).map((_, i) => (
      <Page
        key={i}
        number={i}
        mode={mode}
        onClick={() => this.togglePageSelected(i)}
        selected={this.pageSelected(i)}
      />
    ));
  }

  modeOptions() {
    return this.modes.map((mode, i) => {
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
  }

  render() {
    return (
      <div className="mystery-calculator">
        <h1>The Mystery Calculator</h1>
        <PrintButton />
        <section className="book">
          <article className="pages">
            {this.pagesInMode(this.state.mode)}
          </article>
          <Explainer
            selectedPages={this.state.selectedPages}
            number={this.calculate(this.state.selectedPages)}
            mode={this.state.mode}
          />
        </section>
        <ul className="modes">
          {this.modeOptions()}
        </ul>
        <aside className="answer">
          <Answer
            number={this.calculate(this.state.selectedPages)}
            mode={this.state.mode}
            reveal={this.state.reveal}
            onReveal={() => this.setState({reveal: true})}
          />
        </aside>
        <footer>
          <div className="copyright">
            <p>
							© 2018 Coby Tamayo, Some Rights Reserved.&nbsp;
              <a href="https://creativecommons.org/licenses/by/3.0/">CC-BY</a><br />
              Printer icon made by <a
                href="https://www.flaticon.com/authors/gregor-cresnar"
                title="Gregor Cresnar"
              >Gregor Cresnar</a> from <a
                href="https://www.flaticon.com/"
                title="Flaticon"
              >www.flaticon.com</a>
						</p>
          </div>
          <div className="print">
            <h2>The Mystery Calculator</h2>
            {this.pagesInMode('mystery')}
            <p>
              Cut out each card of 8x4 numbers.
              Ask a friend to pick any number from 1 to 63,
              and keep the number to themselves.
              Then for each card, ask them if their number appears
              on that card. Add up the top left number from each
              card their number is on: the total is the number they chose.
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default MysteryCalculator;
