import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, TableDispatch } from '../../redux/store';
import { IPersonDataProps } from '../../utils/interfaces';
import { addSelectRow } from '../../redux/modules/setting/setting';

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
  const selectedRowsDataState = useSelector((state: RootState) => state.settingSlice.selectedRow);

  const dispatch = useDispatch<TableDispatch>();
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

    const classNameRow = selectedRowsDataState.includes(e.key)
      ? 'table-content__row table-content__row--select'
      : 'table-content__row';
    const handleSelectRow = (e: any) => {
      const ID: number = +e.currentTarget.id;

      if (e.shiftKey) {
        dispatch(addSelectRow({ id: ID, key: 'shift' }));
      } else {
        dispatch(addSelectRow({ id: ID }));
      }
    };
    return (
      <React.Fragment key={e.key}>
        {status && profession ? (
          <tr
            key={e.key}
            id={e.key?.toString()}
            className={classNameRow}
            onClick={(e) => handleSelectRow(e)}
          >
            {itemCells}
          </tr>
        ) : null}
      </React.Fragment>
    );
  });
  return <tbody className="table-content">{tableItems}</tbody>;
};

export default TableList;
