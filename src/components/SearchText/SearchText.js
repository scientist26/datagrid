import React from 'react';
import { Input } from 'antd';

const { Search } = Input;
import './SearchText.scss';

const SearchText = () => {
  return (
    <div className="search-text">
      <p className="search-text__title">Search by columns</p>
      <div className="search-text__columns unselectable">
        <div className="search-text__type">First Name</div>
        <div className="search-text__type search-text__type--checked">Last Name</div>
        <div className="search-text__type">Profession</div>
      </div>
      <div className="search-text__input">
        <Search
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={onSearch}
        />
      </div>
    </div>
  );
};

export default SearchText;

const onSearch = (value) => console.log(value);
