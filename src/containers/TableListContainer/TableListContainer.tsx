import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fakePersonsCurrentData,
  fakePersonsDataLoaded,
  deleteSelectRow,
} from '../../redux/modules/setting/setting';
import fakePersonData from '../../services/data/fakeData';
import TableList from '../../components/TableList';
import { IPerson } from '../../utils/interfaces';
import { RootState, TableDispatch } from '../../redux/store';
import { Button } from 'antd';

const TableListContainer: React.FC = () => {
  const personsDataStore: IPerson[] = useSelector(
    (state: RootState) => state.settingSlice.currentPersonsData,
  );
  const selectedRowsDataState = useSelector((state: RootState) => state.settingSlice.selectedRow);
  const dispatch = useDispatch<TableDispatch>();
  useEffect(() => {
    if (!localStorage.getItem('fakePersonData')) {
      localStorage.setItem('fakePersonData', JSON.stringify(fakePersonData));
    }

    const personDataLocalStorage: IPerson[] = JSON.parse(localStorage.getItem('fakePersonData')!);

    dispatch(fakePersonsDataLoaded(personDataLocalStorage));
    dispatch(fakePersonsCurrentData(personDataLocalStorage));
  }, [dispatch]);

  const deleteRowsHandle = () => {
    dispatch(deleteSelectRow());
  };

  return (
    <>
      <TableList personsDataStore={personsDataStore} />
      <>
        {/* <tfoot>
          <tr>
            <td> */}
        {selectedRowsDataState.length === 0 ? null : (
          <Button type="primary" className="delete-rows" onClick={deleteRowsHandle}>
            Delete selected rows
          </Button>
        )}
        {/* </td>
          </tr>
        </tfoot> */}
      </>
    </>
  );
};

export default TableListContainer;
