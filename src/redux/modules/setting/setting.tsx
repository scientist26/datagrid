import { createSlice } from '@reduxjs/toolkit';
import searchColumns from '../../../components/SearchText/data/titles';
import { IPerson, IColumnSearchTitle } from '../../../utils/interfaces';
import { sortFunctionString } from '../../../utils/sortFunction';

export interface ICurrentDataState {
  initialPersonsData: [] | IPerson[];
  currentPersonsData: [] | IPerson[];
  sortedBy: { [key: string]: string };
  searchColumns: IColumnSearchTitle[];
}

interface IActionSortData {
  payload: {
    personDataSortAsc: IPerson[];
    propertyId: string;
  };
  type: string;
}

interface IActionInitialData {
  payload: IPerson[];
  type: string;
}

const initialState: ICurrentDataState = {
  initialPersonsData: [],
  currentPersonsData: [],
  sortedBy: {},
  searchColumns,
};

interface IActionCheckColumn {
  payload: string;
  type: string;
}

const settingSlice = createSlice({
  name: 'setting',
  initialState,
  reducers: {
    fakePersonsDataLoaded: (state, action: IActionInitialData) => {
      state.initialPersonsData = [...action.payload];
    },
    fakePersonsDataSortAsc: (state, action: IActionSortData) => {
      state.currentPersonsData = [...action.payload.personDataSortAsc];
      state.sortedBy = { [action.payload.propertyId]: 'asc' };
    },
    fakePersonsDataSortDesc: (state, action: IActionSortData) => {
      state.currentPersonsData = [...action.payload.personDataSortAsc];
      state.sortedBy = { [action.payload.propertyId]: 'desc' };
    },
    fakePersonsDataSortInitial: (state) => {
      state.currentPersonsData = [
        ...state.currentPersonsData.sort((a: any, b: any) => a.key - b.key),
      ];
      state.sortedBy = {};
    },
    fakePersonsCurrentData: (state, action: IActionInitialData) => {
      state.currentPersonsData = [...action.payload];
    },
    checkColumn: (state, action: IActionCheckColumn) => {
      state.searchColumns.map((e) => {
        e.id === action.payload
          ? e.isChecked === false
            ? (e.isChecked = true)
            : (e.isChecked = false)
          : e;
      });
    },
    searchByColumn: (state, action: IActionCheckColumn) => {
      const sortedKey = Object.keys(state.sortedBy)[0];
      const sortedValue = Object.values(state.sortedBy)[0];
      const sortData = sortFunctionString(state.initialPersonsData, sortedValue, sortedKey);
      state.currentPersonsData = [...sortData];
      const searchBy = state.searchColumns
        .map((e) => (e.isChecked === true ? e.id : undefined))
        .filter((e) => e !== undefined);
      const searchArr: IPerson[] = [];
      searchBy.forEach((el: any) => {
        const stepArr = state.currentPersonsData.filter((e: any) =>
          e[el].toLowerCase().includes(action.payload.toLowerCase()),
        );
        return searchArr.push(...stepArr);
      });
      const finishSearchArr = sortFunctionString(
        [...Array.from(new Set(searchArr))],
        sortedValue,
        sortedKey,
      );
      state.currentPersonsData = [...finishSearchArr];
    },
  },
});

export default settingSlice.reducer;
export const {
  fakePersonsDataLoaded,
  fakePersonsDataSortAsc,
  fakePersonsDataSortDesc,
  fakePersonsDataSortInitial,
  fakePersonsCurrentData,
  checkColumn,
  searchByColumn,
} = settingSlice.actions;
