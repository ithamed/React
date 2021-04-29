import React from 'react';

function Button(props) {
  return (
    <div>
      <button type="button" className="btn btn-success margin" onClick={props.showInput}>{props.name}</button>
    </div>
  )
}

export default Button
