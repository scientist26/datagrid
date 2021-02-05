import { createSlice } from '@reduxjs/toolkit';
import { IPerson } from '../../../utils/interfaces';

type TypeLoadDataState = {
  initialPersonsData: [] | IPerson[];
};
interface IAction {
  payload: IPerson[];
}

const initialState: TypeLoadDataState = {
  initialPersonsData: [],
};

const loadFakeDataReducer = createSlice({
  name: 'loadData',
  initialState,
  reducers: {
    fakePersonsDataLoaded: (state, action: IAction) => {
      state.initialPersonsData = [...action.payload];
    },
  },
});

export default loadFakeDataReducer.reducer;
export const { fakePersonsDataLoaded } = loadFakeDataReducer.actions;
