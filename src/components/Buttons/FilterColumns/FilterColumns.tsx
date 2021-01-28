import React from 'react';
import { HiFilter } from 'react-icons/hi';
import ColumnMenu from '../../ColumnMenu';
import './FilterColumns.scss';

const FilterColumns: React.FC = () => {
  return (
    <div className="columns-type">
      <button className="columns-type__btn">
        <HiFilter size="1.7rem" className="columns-type__svg" />
        <span>Filter by columns</span>
      </button>
      <ColumnMenu />
    </div>
  );
};

export default FilterColumns;
