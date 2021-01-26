import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fakePersonsDataLoaded } from '../../redux/modules/loadData/loadData';
import { fakePersonsCurrentData } from '../../redux/modules/sort/sort';
import fakePersonData from '../../services/data/fakeData';
import TableList from '../../components/TableList';

const TableListContainer = () => {
  const personsDataStore = useSelector((state) => state.sortReducer.currentPersonsData);
  console.log(personsDataStore);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!localStorage.getItem('fakePersonData')) {
      localStorage.setItem('fakePersonData', JSON.stringify(fakePersonData));
    }
    const personDataLocalStorage = JSON.parse(localStorage.getItem('fakePersonData'));
    dispatch(fakePersonsDataLoaded(personDataLocalStorage));
    dispatch(fakePersonsCurrentData(personDataLocalStorage));
  }, [dispatch]);
  return <TableList personsDataStore={personsDataStore} />;
};

export default TableListContainer;
