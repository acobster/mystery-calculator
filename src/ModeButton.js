import React from 'react';

function ModeButton(props) {
  const currentClass = (props.mode === props.currentMode) ? 'current' : '';

  return (
    <button
      className={"mode-btn mode--" + props.mode + ' ' + currentClass}
      title={props.title}
      onClick={() => props.onClick(props.mode)}
      type="button"
    ><span>{props.value}</span><span>{props.title}</span></button>
  );
}

export default ModeButton;
