import { createSlice } from '@reduxjs/toolkit';
import { IPerson } from '../../../utils/interfaces';

export interface ICurrentDataState {
  currentPersonsData: [] | IPerson[];
  sortedBy: { [key: string]: string };
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
  currentPersonsData: [],
  sortedBy: {},
};

const sortReducer = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    fakePersonsDataSortAsc: (state, action: IActionSortData) => {
      state.currentPersonsData = [...action.payload.personDataSortAsc];
      state.sortedBy = { [action.payload.propertyId]: 'asc' };
    },
    fakePersonsDataSortDesc: (state, action: IActionSortData) => {
      state.currentPersonsData = [...action.payload.personDataSortAsc];
      state.sortedBy = { [action.payload.propertyId]: 'desc' };
    },
    fakePersonsDataSortInitial: (state, action: IActionInitialData) => {
      state.currentPersonsData = [...action.payload];
      state.sortedBy = {};
    },
    fakePersonsCurrentData: (state, action: IActionInitialData) => {
      state.currentPersonsData = [...action.payload];
    },
  },
});

export default sortReducer.reducer;
export const {
  fakePersonsDataSortAsc,
  fakePersonsDataSortDesc,
  fakePersonsDataSortInitial,
  fakePersonsCurrentData,
} = sortReducer.actions;
