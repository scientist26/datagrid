import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { IPersonDataProps } from '../../utils/interfaces';

const TableList: React.FC<IPersonDataProps> = ({ personsDataStore }) => {
  const headerTableDataStore = useSelector(
    (state: RootState) => state.visibleColumnsSlice.tableHeader,
  );
  const tableItems = personsDataStore.map((e, i: number) => {
    const personDataValues = Object.entries(e);
    const itemCells = personDataValues.slice(1).map((e, i) => {
      let isVisibleCells = true;
      headerTableDataStore.forEach((el) => {
        if (el.id === e[0]) {
          isVisibleCells = el.isVisible;
        }
      });
      if (i === 0) {
        return isVisibleCells ? (
          <td className="table-content__data table-content__data--sticky" key={i}>
            {e[1]}
          </td>
        ) : null;
      } else {
        return isVisibleCells ? (
          e[0] === 'salary' ? (
            <td className="table-content__data" key={i}>
              {e[1]} $
            </td>
          ) : (
            <td className="table-content__data" key={i}>
              {e[1]}
            </td>
          )
        ) : null;
      }
    });
    return (
      <tr key={i} className="table-content__row">
        {itemCells}
      </tr>
    );
  });
  return <tbody className="table-content">{tableItems}</tbody>;
};

export default TableList;
