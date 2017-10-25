import React from 'react';

function ModeButton(props) {
  const currentClass = (props.mode === props.currentMode) ? 'current' : '';

  return (
    <button
      className={"mode-btn "+currentClass}
      title={props.title}
      onClick={() => props.onClick(props.mode)}
    >{props.value}</button>
  );
}

export default ModeButton;
