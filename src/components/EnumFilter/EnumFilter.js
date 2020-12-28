import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
const animatedComponents = makeAnimated();

import './EnumFilter.scss';
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

// const className = 'react-select-container';

const EnumFilter = () => {
  return (
    <div className="enum-filter">
      <p className="enum-filter__title">Enum filter</p>
      <div className="enum-filter__input">
        <Select
          className="enum-filter__select"
          classNamePrefix="enum-select"
          closeMenuOnSelect={false}
          components={animatedComponents}
          defaultValue={[options[1], options[2]]}
          isMulti
          options={options}
        />
      </div>
    </div>
  );
};

export default EnumFilter;
