import React from 'react'

import { decimalEquation } from './util'

export default ({ number, selectedPages }) => {
    let example

    if (number === 0) {
      example = (
        <p>Select some cards to see a concrete example!</p>
      )
    } else {
      const equation = decimalEquation(selectedPages, number)
      example = (
        <div>
          <p>
            Your number is <span className="equation">{equation}.</span>
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