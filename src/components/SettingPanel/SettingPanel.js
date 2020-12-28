import React from 'react';
import './SettingPanel.scss';
import { HiFilter } from 'react-icons/hi';
import ColumnMenu from '../ColumnMenu';
import SearchText from '../SearchText';
import EnumFilter from '../EnumFilter';

const SettingPanel = () => {
  return (
    <div className="setting">
      <div className="columns-type">
        <button className="columns-type__btn">
          <HiFilter size="1.7rem" className="columns-type__svg" />
          <span>Filter by columns</span>
        </button>
        <ColumnMenu />
      </div>
      <SearchText />
      <EnumFilter />
    </div>
  );
};

export default SettingPanel;
