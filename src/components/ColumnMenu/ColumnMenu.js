import React from 'react';
import './ColumnMenu.scss';

const ColumnMenu = () => {
  return (
    <div className="columns-type__option">
      <input
        type="checkbox"
        className="custom-checkbox"
        id="Column1"
        name="Column1"
        value="yes"
      ></input>
      <label htmlFor="Column1">Column1</label>
      <input
        type="checkbox"
        className="custom-checkbox"
        id="Column2"
        name="Column2"
        value="yes"
      ></input>
      <label htmlFor="Column2">Column2</label>
      <input
        type="checkbox"
        className="custom-checkbox"
        id="Column3"
        name="Column3"
        value="yes"
      ></input>
      <label htmlFor="Column3">Column3</label>
      <input
        type="checkbox"
        className="custom-checkbox"
        id="Column4"
        name="Column4"
        value="yes"
      ></input>
      <label htmlFor="Column4">Column4</label>
      <input
        type="checkbox"
        className="custom-checkbox"
        id="Column5"
        name="Column5"
        value="yes"
      ></input>
      <label htmlFor="Column5">Column5</label>
      <input
        type="checkbox"
        className="custom-checkbox"
        id="Column6"
        name="Column6"
        value="yes"
      ></input>
      <label htmlFor="Column6">Column6</label>
      <input
        type="checkbox"
        className="custom-checkbox"
        id="Column7"
        name="Column7"
        value="yes"
      ></input>
      <label htmlFor="Column7">Column7</label>
    </div>
  );
};

export default ColumnMenu;
