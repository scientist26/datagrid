import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { IPersonDataProps } from '../../utils/interfaces';

const TableList: React.FC<IPersonDataProps> = ({ personsDataStore }) => {
  const webStatus = useSelector((state: RootState) => state.webStatusFilterSlice.webStatusFilter);
  const { online: isOnline, offline: isOffline } = webStatus;
  const professionFilterData = useSelector(
    (state: RootState) => state.professionFilterSlice.professionFilter,
  );
  const {
    teacher: isTeacher,
    doctor: isDoctor,
    engineer: isEngineer,
    poet: isPoet,
    explorer: isExplorer,
  } = professionFilterData;
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
    const status = e.status === 'Online' ? isOnline : isOffline;
    const profession =
      e.profession === 'Teacher'
        ? isTeacher
        : e.profession === 'Doctor'
        ? isDoctor
        : e.profession === 'Engineer'
        ? isEngineer
        : e.profession === 'Poet'
        ? isPoet
        : e.profession === 'Explorer'
        ? isExplorer
        : null;
    return (
      <React.Fragment key={i}>
        {status && profession ? (
          <tr key={i} className="table-content__row">
            {itemCells}
          </tr>
        ) : null}
      </React.Fragment>
    );
  });
  return <tbody className="table-content">{tableItems}</tbody>;
};

export default TableList;
