import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
const animatedComponents = makeAnimated();

import './EnumFilter.scss';
const options = [
  { value: 'teacher', label: 'Teacher' },
  { value: 'doctor', label: 'Doctor' },
  { value: 'engineer', label: 'Engineer' },
  { value: 'poet', label: 'Poet' },
  { value: 'explorer', label: 'Explorer' },
];

const EnumFilter = () => {
  return (
    <div className="enum-filter">
      <p className="enum-filter__title">Profession filter</p>
      <div className="enum-filter__input">
        <Select
          className="enum-filter__select"
          classNamePrefix="enum-select"
          closeMenuOnSelect={false}
          components={animatedComponents}
          defaultValue={[...options]}
          isMulti
          options={options}
        />
      </div>
    </div>
  );
};

export default EnumFilter;
