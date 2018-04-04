import React from 'react';

import Num from './Num.js';

function Answer(props) {
  let markup;
  if (!props.reveal) {
    markup = (
      <div>
        <span className="number number-mystery">???</span>
        <button
          className="reveal-button"
          onClick={props.onReveal}
          type="button"
        >Reveal!</button>
      </div>
    );
  } else {
    markup = (
      <Num number={props.number} mode={props.mode} />
    );
  }

  return (
    <div className="answer">
      <label className="number-label">Your Number:</label>
      <div className="answer-number">{markup}</div>
    </div>
  );
}

export default Answer;
