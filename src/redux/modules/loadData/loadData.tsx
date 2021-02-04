// import { createAction, createReducer } from '@reduxjs/toolkit';
// import { IPerson } from '../../../utils/interfaces';
// const FAKE_PERSONS_DATA_LOADED = 'modules/loadData/FAKE_PERSONS_DATA_LOADED';

// type TypeLoadDataState = {
//   initialPersonsData: [] | IPerson[];
// };

// type TypeActionLoad = { type: typeof FAKE_PERSONS_DATA_LOADED; payload: IPerson[] };

// const initialState: TypeLoadDataState = {
//   initialPersonsData: [],
// };

// const loadFakeDataReducer = (state = initialState, action: TypeActionLoad): TypeLoadDataState => {
//   switch (action.type) {
//     case FAKE_PERSONS_DATA_LOADED:
//       return {
//         ...state,
//         initialPersonsData: [...action.payload],
//       };
//     default:
//       return state;
//   }
// };

// export const fakePersonsDataLoaded = (fakePersonData: IPerson[]): TypeActionLoad => {
//   return {
//     type: FAKE_PERSONS_DATA_LOADED,
//     payload: fakePersonData,
//   };
// };

// export default loadFakeDataReducer;

// import { createAction, createReducer } from '@reduxjs/toolkit';
// import { IPerson } from '../../../utils/interfaces';

// type TypeLoadDataState = {
//   initialPersonsData: [] | IPerson[];
// };

// const initialState: TypeLoadDataState = {
//   initialPersonsData: [],
// };

// export const fakePersonsDataLoaded: any = createAction(
//   'modules/loadData/FAKE_PERSONS_DATA_LOADED',
//   (fakePersonData: IPerson[]) => {
//     return {
//       payload: { fakePersonData },
//     };
//   },
// );

// const loadFakeDataReducer = createReducer(initialState, {
//   [fakePersonsDataLoaded]: (state, action) => {
//     state.initialPersonsData = [...action.payload.fakePersonData];
//   },
// });

// export default loadFakeDataReducer;

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
