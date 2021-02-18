import React from 'react';
import './SettingPanel.scss';
import FilterColumns from '../Buttons/FilterColumns';
import ExportButton from '../Buttons/ExportButton';
import QuerystringButton from '../Buttons/QuerystringButton';
import SearchText from '../SearchText';
import EnumFilter from '../EnumFilter';
import BooleanFilter from '../WebStatusFilter';
import VisualControl from '../VisualControl';

const SettingPanel: React.FC = () => {
  return (
    <div className="setting">
      <div className="toggle-wrapper">
        <BooleanFilter />
        <VisualControl />
      </div>
      <div className="search-wrapper">
        <div className="filter-wrapper">
          <FilterColumns />
        </div>
        <SearchText />
      </div>
      <div className="enum-wrapper">
        <div className="button-wrapper">
          <ExportButton />
          <QuerystringButton />
        </div>
        <EnumFilter />
      </div>
    </div>
  );
};

export default SettingPanel;
