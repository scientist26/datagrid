import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HiFilter } from 'react-icons/hi';
import ColumnMenu from '../../ColumnMenu';
import './FilterColumns.scss';
import { RootState, TableDispatch } from '../../../redux/store';
import { openMenuColumns } from '../../../redux/modules/visibleColumns/visibleColumns';

const FilterColumns: React.FC = () => {
  const isOpenMenuColumns = useSelector((state: RootState): boolean => {
    return state.visibleColumnsSlice.isOpenMenuColumns;
  });
  const dispatch = useDispatch<TableDispatch>();

  const openMenuHandler = () => {
    dispatch(openMenuColumns());
  };
  return (
    <div className="columns-type">
      <button className="columns-type__btn" onClick={openMenuHandler}>
        <HiFilter size="1.7rem" className="columns-type__svg" />
        <span>Filter by columns</span>
      </button>
      {isOpenMenuColumns ? <ColumnMenu /> : null}
    </div>
  );
};

export default FilterColumns;
