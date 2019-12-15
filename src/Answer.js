import React from 'react';

import Num from './Num.js';

function Answer(props) {
  let markup;
  if (!props.reveal) {
    markup = (
      <React.Fragment>
        <label className="answer-component number-label">Your&nbsp;Number:</label>
        <div className="number answer-component number-mystery">???</div>
        <div className="answer-component">
          <button
            className="reveal-button"
            onClick={props.onReveal}
            type="button"
          >Reveal!</button>
        </div>
      </React.Fragment>
    );
  } else {
    markup = (
      <React.Fragment>
        <label className="number-label answer-component">Your&nbsp;Number:</label>
        <div className="number-reveal answer-component">
          <Num number={props.number} mode={props.mode} />
        </div>
      </React.Fragment>
    );
  }

  return (
    <div className="answer control">
      {markup}
    </div>
  );
}

export default Answer;
