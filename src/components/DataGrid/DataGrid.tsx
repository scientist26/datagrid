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
import { RootState } from '../../redux/store';

const DataGrid: React.FC = () => {
  const initialPersonsDataStore: IPerson[] = useSelector(
    (state: RootState) => state.loadFakeDataReducer.initialPersonsData,
  );
  const currentPersonsDataStore: IPerson[] = useSelector(
    (state: RootState) => state.sortReducer.currentPersonsData,
  );
  const sortDirection = useSelector((state: RootState) => state.sortReducer.sortedBy);
  const dispatch = useDispatch();

  const classNameSortActiveAsc = (property: string) => {
    return sortDirection[property] === 'asc' ? 'sort-icon-asc sort-icon--active' : 'sort-icon-asc';
  };
  const classNameSortActiveDesc = (property: string) => {
    return sortDirection[property] === 'desc'
      ? 'sort-icon-desc sort-icon--active'
      : 'sort-icon-desc';
  };

  const onSortAsc = (e: React.MouseEvent): void => {
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
  const onSortDesc = (e: React.MouseEvent): void => {
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

  return (
    <div className="table-wrapper">
      <div className="table-container">
        <table className="table">
          <thead className="table-header">
            <tr className="table-header__row">
              <th className="table-header__caption table-header__caption--sticky">
                <span className="table-header__caption-title">First Name</span>
                <div className="table-header__sort-icon">
                  <ImSortAlphaAsc
                    id="firstName"
                    className={classNameSortActiveAsc('firstName')}
                    onClick={(e) => onSortAsc(e)}
                  />
                  <ImSortAlphaDesc
                    id="firstName"
                    className={classNameSortActiveDesc('firstName')}
                    onClick={(e) => onSortDesc(e)}
                  />
                </div>
              </th>
              <th className="table-header__caption">
                <span className="table-header__caption-title">Last Name</span>
                <div className="table-header__sort-icon">
                  <ImSortAlphaAsc
                    id="lastName"
                    className={classNameSortActiveAsc('lastName')}
                    onClick={(e) => onSortAsc(e)}
                  />
                  <ImSortAlphaDesc
                    id="lastName"
                    className={classNameSortActiveDesc('lastName')}
                    onClick={(e) => onSortDesc(e)}
                  />
                </div>
              </th>
              <th className="table-header__caption">Status</th>
              <th className="table-header__caption">
                <span className="table-header__caption-title">Age</span>
                <div className="table-header__sort-icon">
                  <ImSortNumericAsc
                    id="age"
                    className={classNameSortActiveAsc('age')}
                    onClick={(e) => onSortAsc(e)}
                  />
                  <ImSortNumbericDesc
                    id="age"
                    className={classNameSortActiveDesc('age')}
                    onClick={(e) => onSortDesc(e)}
                  />
                </div>
              </th>
              <th className="table-header__caption">Profession</th>
              <th className="table-header__caption">
                <span className="table-header__caption-title">Date</span>
                <div className="table-header__sort-icon">
                  <ImSortNumericAsc
                    id="date"
                    className={classNameSortActiveAsc('date')}
                    onClick={(e) => onSortAsc(e)}
                  />
                  <ImSortNumbericDesc
                    id="date"
                    className={classNameSortActiveDesc('date')}
                    onClick={(e) => onSortDesc(e)}
                  />
                </div>
              </th>
              <th className="table-header__caption">
                <span className="table-header__caption-title">Salary</span>
                <div className="table-header__sort-icon">
                  <ImSortNumericAsc
                    id="salary"
                    className={classNameSortActiveAsc('salary')}
                    onClick={(e) => onSortAsc(e)}
                  />
                  <ImSortNumbericDesc
                    id="salary"
                    className={classNameSortActiveDesc('salary')}
                    onClick={(e) => onSortDesc(e)}
                  />
                </div>
              </th>
            </tr>
          </thead>
          <TableListContainer />
        </table>
      </div>
    </div>
  );
};

export default DataGrid;
