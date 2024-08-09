import React from 'react'

export default ({ selectedPages, number, mode }) => {
  return <div>
    <p>
      Take a look at the cards now. See how, on every card, the bolded
      <strong>1</strong>s occupy the same place in each
      number? That's no coincidence.
    </p>
    <p>
      Although no number appears twice on any given card, every number
      on any given card has one thing in common: a <strong>1</strong>
      in a specific place.
    </p>
    <p>
      Every card has one thing in common as well: its top-left number is a
      power of two. A power of two in binary is always written with a single
      1 and a bunch of 0s. This happens for the same reason that, in decimal,
      a power of ten (100, 1,000, 10,000...)
    </p>
  </div>
}
