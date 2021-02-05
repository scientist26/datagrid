import React from 'react';
import './ColumnMenu.scss';
import { useDispatch } from 'react-redux';
import { TableDispatch } from '../../redux/store';
import { changeVisible } from '../../redux/modules/visibleColumns/visibleColumns';
import columnMenuData from './data/columnMenuData';

const ColumnMenu: React.FC = () => {
  const dispatch = useDispatch<TableDispatch>();
  const changeVisibleHandler = (e: React.MouseEvent<HTMLInputElement>) => {
    const ID: string = e.currentTarget.id;
    let isChecked: boolean = e.currentTarget.checked;
    if (isChecked === false) {
      isChecked = false;
    } else {
      isChecked = true;
    }
    const payload = { ID, isChecked };
    dispatch(changeVisible(payload));
  };
  const columnMenuItems = columnMenuData.map((e) => {
    return (
      <>
        <input
          type="checkbox"
          className="custom-checkbox"
          id={e.id}
          name={e.name}
          defaultChecked={true}
          value="yes"
          onClick={(e) => changeVisibleHandler(e)}
        ></input>
        <label htmlFor={e.name}>{e.title}</label>
      </>
    );
  });
  return <div className="columns-type__option">{columnMenuItems}</div>;
};

export default ColumnMenu;
