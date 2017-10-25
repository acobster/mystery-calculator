import React from 'react';

import Num from './Num.js';

function Answer(props) {
  let markup;
  if (!props.reveal) {
    markup = (
      <div>
        <span>???</span>
        <p><button onClick={props.onReveal}>Reveal!</button></p>
      </div>
    );
  } else {
    markup = (
      <Num number={props.number} mode={props.mode} />
    );
  }

  return (
    <div className="answer">
      <span>Your Number:</span>
      {markup}
    </div>
  );
}

export default Answer;
