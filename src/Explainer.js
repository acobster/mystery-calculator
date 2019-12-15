import React from 'react'

import DecimalExplainer from './DecimalExplainer'
import BinaryExplainer from './BinaryExplainer'

class Explainer extends React.Component {
  renderBasicInstructions() {
    return (
      <div>
        <p>Choose a number from 1 to 63.</p>
        <p>Click on each card where your number appears.</p>
        <p>
          Click "reveal," and the Mystery Calculator
          will guess your number!
        </p>
        <p>Proceed to Decimal Mode to learn how this works!</p>
      </div>
    )
  }

  renderDecimalExplainer() {
    return <DecimalExplainer
      selectedPages={this.props.selectedPages}
      number={this.props.number}
    />
  }

  renderBinary() {
    return (
      <BinaryExplainer
        selectedPages={this.props.selectedPages}
        number={this.props.number}
        mode={this.props.mode}
      />
    )
  }

  render() {
    let explanation

    switch (this.props.mode) {
      case 'binary':
        explanation = this.renderBinary()
        break;
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
