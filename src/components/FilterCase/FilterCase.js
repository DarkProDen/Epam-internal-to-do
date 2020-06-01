import React from 'react';

function FilterCase(props) {
  return (
    <label className="btn btn-outline-info">
      <input
        onClick={props.onClick}
        type="radio"
        name="filterCase"
        value={props.index}
        defaultChecked={props.checked}
      />
      {props.text}
    </label>
  );
}

export default FilterCase;
