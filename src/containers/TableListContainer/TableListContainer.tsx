import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fakePersonsDataLoaded } from '../../redux/modules/loadData/loadData';
import { fakePersonsCurrentData, TypeCurrentDataState } from '../../redux/modules/sort/sort';
import fakePersonData from '../../services/data/fakeData';
import TableList from '../../components/TableList';
import { IPerson } from '../../utils/interfaces';
// import { RootState } from '../../redux/store';

interface RootState {
  sortReducer: any;
}

const TableListContainer: React.FC = () => {
  const personsDataStore: IPerson[] = useSelector(
    (state: RootState) => state.sortReducer.currentPersonsData,
  );
  // const personsDataStore = useSelector<TypeCurrentDataState, IPerson[]>(
  //   (state: typeof RootState) => state.sort.currentPersonsData,
  // );
  const dispatch = useDispatch();
  useEffect(() => {
    if (!localStorage.getItem('fakePersonData')) {
      localStorage.setItem('fakePersonData', JSON.stringify(fakePersonData));
    }
    // const personDataLocalStorage = JSON.parse(localStorage.getItem('fakePersonData') ?? '{}');
    // const personDataLocalStorage = JSON.parse(localStorage.getItem('fakePersonData') || '[]') as IPerson[];

    const personDataLocalStorage: IPerson[] = JSON.parse(localStorage.getItem('fakePersonData')!);

    dispatch(fakePersonsDataLoaded(personDataLocalStorage));
    dispatch(fakePersonsCurrentData(personDataLocalStorage));
  }, [dispatch]);
  return <TableList personsDataStore={personsDataStore} />;
};

export default TableListContainer;
