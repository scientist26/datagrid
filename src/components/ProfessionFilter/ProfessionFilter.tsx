import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, TableDispatch } from '../../redux/store';
import { checkProfessionFilter } from '../../redux/modules/professionFilter/professionFilter';
const animatedComponents = makeAnimated();

import './ProfessionFilter.scss';
const options = [
  { value: 'teacher', label: 'Teacher' },
  { value: 'doctor', label: 'Doctor' },
  { value: 'engineer', label: 'Engineer' },
  { value: 'poet', label: 'Poet' },
  { value: 'explorer', label: 'Explorer' },
];

const ProfessionFilter: React.FC = () => {
  // const professionDataState = useSelector(
  //   (state: RootState) => state.professionFilterSlice.professionFilter,
  // );
  const dispatch = useDispatch<TableDispatch>();
  const handleProfession = (e: any) => {
    dispatch(checkProfessionFilter(e));
  };
  return (
    <div className="enum-filter">
      <p className="enum-filter__title">Profession filter</p>
      <div className="enum-filter__input">
        <Select
          onChange={(e) => handleProfession(e)}
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

export default ProfessionFilter;
