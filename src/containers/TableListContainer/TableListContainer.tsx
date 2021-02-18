import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { fakePersonsDataLoaded } from '../../redux/modules/loadData/loadData';
import { fakePersonsDataLoaded } from '../../redux/modules/setting/setting';
import { fakePersonsCurrentData } from '../../redux/modules/setting/setting';
import fakePersonData from '../../services/data/fakeData';
import TableList from '../../components/TableList';
import { IPerson } from '../../utils/interfaces';
import { RootState } from '../../redux/store';

const TableListContainer: React.FC = () => {
  const personsDataStore: IPerson[] = useSelector(
    (state: RootState) => state.settingSlice.currentPersonsData,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (!localStorage.getItem('fakePersonData')) {
      localStorage.setItem('fakePersonData', JSON.stringify(fakePersonData));
    }

    const personDataLocalStorage: IPerson[] = JSON.parse(localStorage.getItem('fakePersonData')!);

    dispatch(fakePersonsDataLoaded(personDataLocalStorage));
    dispatch(fakePersonsCurrentData(personDataLocalStorage));
  }, [dispatch]);
  return <TableList personsDataStore={personsDataStore} />;
};

export default TableListContainer;
