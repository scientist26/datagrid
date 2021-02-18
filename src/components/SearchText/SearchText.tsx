import React from 'react';
import { Input } from 'antd';

import { useDispatch, useSelector } from 'react-redux';
import { RootState, TableDispatch } from '../../redux/store';

const { Search } = Input;
import './SearchText.scss';
import { IColumnSearchTitle } from '../../utils/interfaces';
import { checkColumn, searchByColumn } from '../../redux/modules/setting/setting';

const SearchText: React.FC = () => {
  const columnsData: IColumnSearchTitle[] = useSelector(
    (state: RootState) => state.settingSlice.searchColumns,
  );
  const dispatch = useDispatch<TableDispatch>();
  const handlerCheckColumn = (e: React.MouseEvent<HTMLDivElement>) => {
    const ID: string = e.currentTarget.id;
    dispatch(checkColumn(ID));
  };

  // const handleSearch = (value: any) => {
  //   dispatch(searchByColumn(value));
  // };
  const handleChange = (e: any) => {
    dispatch(searchByColumn(e.currentTarget.value));
  };

  return (
    <div className="search-text">
      <p className="search-text__title">Search by columns</p>
      <div className="search-text__columns unselectable">
        {columnsData.map((e: IColumnSearchTitle, i: number) => {
          return (
            <div
              id={e.id}
              key={i}
              className={
                e.isChecked ? 'search-text__type search-text__type--checked' : 'search-text__type'
              }
              onClick={(event) => handlerCheckColumn(event)}
            >
              {e.title}
            </div>
          );
        })}
      </div>
      <div className="search-text__input">
        <Search
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
          // onSearch={(e) => handleSearch(e)}
          onChange={(e) => handleChange(e)}
        />
      </div>
    </div>
  );
};

export default SearchText;
