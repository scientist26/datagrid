import React from 'react';
import './DataGrid.scss';
import { useDispatch, useSelector } from 'react-redux';
import TableListContainer from '../../containers/TableListContainer';
import {
  ImSortAlphaAsc,
  ImSortAlphaDesc,
  ImSortNumericAsc,
  ImSortNumbericDesc,
} from 'react-icons/im';

import {
  fakePersonsDataSortAsc,
  fakePersonsDataSortInitial,
  fakePersonsDataSortDesc,
} from '../../redux/modules/sort/sort';
import { sortFunctionString } from '../../utils/sortFunction';
import { IPerson } from '../../utils/interfaces';
import { RootState, TableDispatch } from '../../redux/store';

const DataGrid: React.FC = () => {
  const initialPersonsDataStore: IPerson[] = useSelector(
    (state: RootState) => state.loadFakeDataReducer.initialPersonsData,
  );
  const currentPersonsDataStore: IPerson[] = useSelector(
    (state: RootState) => state.sortReducer.currentPersonsData,
  );
  const headerTableDataStore = useSelector(
    (state: RootState) => state.visibleColumnsReducer.tableHeader,
  );
  const sortDirection = useSelector((state: RootState) => state.sortReducer.sortedBy);
  const dispatch = useDispatch<TableDispatch>();

  const classNameSortActiveAsc = (property: string) => {
    return sortDirection[property] === 'asc' ? 'sort-icon-asc sort-icon--active' : 'sort-icon-asc';
  };
  const classNameSortActiveDesc = (property: string) => {
    return sortDirection[property] === 'desc'
      ? 'sort-icon-desc sort-icon--active'
      : 'sort-icon-desc';
  };

  const onSortAsc = (e: React.MouseEvent<SVGElement>): void => {
    const ID: string = e.currentTarget.id;
    if (sortDirection[ID] === 'asc') {
      dispatch(fakePersonsDataSortInitial(initialPersonsDataStore));
    } else {
      const payload = {
        personDataSortAsc: sortFunctionString(currentPersonsDataStore, 'asc', ID),
        propertyId: ID,
      };
      dispatch(fakePersonsDataSortAsc(payload));
    }
  };
  //TODO: replace function argument in 'fakePersonsDataSortDesc' and 'fakePersonsDataSortAsc'
  //TODO  to const or redux-thunk
  const onSortDesc = (e: React.MouseEvent<SVGElement>): void => {
    const ID: string = e.currentTarget.id;
    if (sortDirection[ID] === 'desc') {
      dispatch(fakePersonsDataSortInitial(initialPersonsDataStore));
    } else {
      const payload = {
        personDataSortAsc: sortFunctionString(currentPersonsDataStore, 'desc', ID),
        propertyId: ID,
      };
      dispatch(fakePersonsDataSortDesc(payload));
    }
  };
  const tableHeaderItems = headerTableDataStore.map((e) => {
    return (
      <>
        {e.isVisible ? (
          <th className="table-header__caption">
            <span className="table-header__caption-title">{e.title}</span>
            {e.isSort ? (
              <div className="table-header__sort-icon">
                {e.isSortByString ? (
                  <>
                    <ImSortAlphaAsc
                      id={e.id}
                      className={classNameSortActiveAsc(e.id)}
                      onClick={(e) => onSortAsc(e)}
                    />
                    <ImSortAlphaDesc
                      id={e.id}
                      className={classNameSortActiveDesc(e.id)}
                      onClick={(e) => onSortDesc(e)}
                    />
                  </>
                ) : (
                  <>
                    <ImSortNumericAsc
                      id={e.id}
                      className={classNameSortActiveAsc(e.id)}
                      onClick={(e) => onSortAsc(e)}
                    />
                    <ImSortNumbericDesc
                      id={e.id}
                      className={classNameSortActiveDesc(e.id)}
                      onClick={(e) => onSortDesc(e)}
                    />
                  </>
                )}
              </div>
            ) : null}
          </th>
        ) : null}
      </>
    );
  });
  return (
    <div className="table-wrapper">
      <div className="table-container">
        <table className="table">
          <thead className="table-header">
            <tr className="table-header__row">{tableHeaderItems}</tr>
          </thead>
          <TableListContainer />
        </table>
      </div>
    </div>
  );
};

export default DataGrid;
