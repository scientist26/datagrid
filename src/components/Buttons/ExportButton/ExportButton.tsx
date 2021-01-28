import React from 'react';
import './ExportButton.scss';

const ExportButton: React.FC = () => {
  return (
    <div className="export-csv">
      <button className="export-csv__btn">
        <span>Export CSV</span>
      </button>
    </div>
  );
};

export default ExportButton;
