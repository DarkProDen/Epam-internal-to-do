import React from 'react';
import './Filter.css';
import FilterCase from '../FilterCase';

function Filter(props) {
  const {
    filterCases,
    currentCaseIndex,
    changeFilterCase,
    changeFilterText,
  } = props;

  return (
    <div className={'filter'}>
      <input
        className={'form-control filter__text'}
        placeholder={'Search...'}
        onInput={(e) => {
          changeFilterText(e.target.value);
        }}
      ></input>
      <div className="btn-group btn-group-toggle" data-toggle="buttons">
        {filterCases.map((filterCase, index) => (
          <FilterCase
            onClick={() => {
              changeFilterCase(index);
            }}
            text={filterCase}
            checked={index === currentCaseIndex}
            index={index}
            key={filterCase}
          />
        ))}
      </div>
    </div>
  );
}

export default Filter;
