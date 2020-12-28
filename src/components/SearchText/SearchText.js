import React from 'react';
import { Input } from 'antd';
// import 'antd/dist/antd.css';

const { Search } = Input;
import './SearchText.scss';

const SearchText = () => {
  return (
    <div className="search-text">
      <p className="search-text__title">Search by columns</p>
      <div className="search-text__columns">
        <div className="search-text__type">Col1</div>
        <div className="search-text__type search-text__type--checked">Col2</div>
        <div className="search-text__type">Col3</div>
      </div>
      <div className="search-text__input">
        <Search
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
          backgroundColr="#25213B"
          onSearch={onSearch}
        />
      </div>
    </div>
  );
};

export default SearchText;

const onSearch = (value) => console.log(value);

// ReactDOM.render(
//   <>
//     <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
//     <Search
//       placeholder="input search text"
//       allowClear
//       onSearch={onSearch}
//       style={{ width: 200, margin: '0 10px' }}
//     />
//     <br />
//     <br />
//     <Search placeholder="input search text" onSearch={onSearch} enterButton />
//     <br />
//     <br />
//     <Search
//       placeholder="input search text"
//       allowClear
//       enterButton="Search"
//       size="large"
//       onSearch={onSearch}
//     />
//     <br />
//     <br />
//     <Search
//       placeholder="input search text"
//       enterButton="Search"
//       size="large"
//       suffix={suffix}
//       onSearch={onSearch}
//     />
//   </>,
//   mountNode,
// );
