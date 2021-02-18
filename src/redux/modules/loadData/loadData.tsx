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

const loadFakeDataSlice = createSlice({
  name: 'loadData',
  initialState,
  reducers: {
    fakePersonsDataLoaded: (state, action: IAction) => {
      state.initialPersonsData = [...action.payload];
    },
  },
});

export default loadFakeDataSlice.reducer;
export const { fakePersonsDataLoaded } = loadFakeDataSlice.actions;
