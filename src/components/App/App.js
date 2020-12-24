import React, { Component } from 'react';
import './App.scss';

import Header from '../Header';
import SettingPanel from '../SettingPanel';
import DataGrid from '../DataGrid';

const App = () => {
  return (
    <div className="app">
      <Header />
      <SettingPanel />
      <DataGrid />
    </div>
  );
};

export default App;
