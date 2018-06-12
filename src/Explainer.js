import React from 'react'

function oxfordComma(things) {
  let clause

  switch (things.length) {
    case 0:
      clause = '';
      break;
    case 1:
    case 2:
      clause = things.join(' and ');
      break;
    case 3:
    default:
      clause = things.slice(0, -1).join(', ') +
        ', and ' +
        things[things.length-1]
  }

  return clause
}

function decimalEquation(exponents, sum) {
  if (exponents.length === 1) return Math.pow(2, exponents[0])
  return exponents.sort().map(e => Math.pow(2, e)).join(' + ') + ' = ' + sum
}

class Explainer extends React.Component {
  renderBasicInstructions() {
    return (
      <div>
        <p>Choose a number from 1 to 63.</p>
        <p>Click on each card where your number appears.</p>
        <p>
          Click "reveal" below, and the Mystery Calculator
          will guess your number!
        </p>
        <p>Explore the different modes below to learn how this works.</p>
      </div>
    )
  }

  renderDecimalExplainer() {
    let example

    if (this.props.number === 0) {
      example = (
        <p>Anyway, select some cards to see a concrete example!</p>
      )
    } else {
      const equation = decimalEquation(this.props.selectedPages, this.props.number)
      example = (
        <div>
          <p>
            Anyway, your number is <span className="equation">{equation}.</span>
          </p>
          <p><strong>But...<em>why</em> does it work?</strong></p>
        </div>
      )
    }

    return (
      <div>
        <p>
          The Mystery Calculator works by adding up all the numbers
          in the top-left corner of each card.
        </p>
        <p>
          You can print this page and pull this trick on your friends!
          It's a fun way to make them think you can read their minds -
          or at least stump them!
        </p>

        {example}

      </div>
    )
  }

  render() {
    let explanation

    switch (this.props.mode) {
      case 'decimal':
        explanation = this.renderDecimalExplainer()
        break;
      case 'mystery':
      default:
        explanation = this.renderBasicInstructions()
        break;
    }

    return (
      <aside className="explainer">{explanation}</aside>
    )
  }
}

export default Explainer
