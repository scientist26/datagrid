import React from 'react';
import './ColumnMenu.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, TableDispatch } from '../../redux/store';
import { changeVisible } from '../../redux/modules/visibleColumns/visibleColumns';

const ColumnMenu: React.FC = () => {
  const dispatch = useDispatch<TableDispatch>();
  const tableHeaderList = useSelector((state: RootState) => state.visibleColumnsSlice.tableHeader);

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
  const columnMenuItems = tableHeaderList.map((e, i) => {
    return (
      <React.Fragment key={i}>
        <input
          type="checkbox"
          className="custom-checkbox"
          id={e.id}
          name={e.name}
          defaultChecked={e.isVisible}
          value="yes"
          onClick={(e) => changeVisibleHandler(e)}
        ></input>
        <label htmlFor={e.name}>{e.title}</label>
      </React.Fragment>
    );
  });
  return <div className="columns-type__option">{columnMenuItems}</div>;
};

export default ColumnMenu;
