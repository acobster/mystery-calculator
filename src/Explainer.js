import React from 'react'

class Explainer extends React.Component {
  render() {
    return (
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
    )
  }
}

export default Explainer
