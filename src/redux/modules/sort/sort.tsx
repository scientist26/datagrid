// import { IPerson } from '../../../utils/interfaces';

// const SORT_ASC = 'modules/sort/SORT_ASC';
// const SORT_DESC = 'modules/sort/SORT_DESC';
// const SORT_INITIAL = 'modules/sort/SORT_INITIAL';
// const CURRENT_DATA = 'modules/sort/CURRENT_DATA';

// export interface ICurrentDataState {
//   currentPersonsData: [] | IPerson[];
//   sortedBy: { [key: string]: string };
// }

// interface IActionSortData {
//   type: typeof SORT_ASC | typeof SORT_DESC | typeof SORT_INITIAL | typeof CURRENT_DATA;
//   payload: IPerson[];
//   propertyData?: string;
// }

// const initialState: ICurrentDataState = {
//   currentPersonsData: [],
//   sortedBy: {},
// };

// const sortReducer = (state = initialState, action: IActionSortData): ICurrentDataState => {
//   switch (action.type) {
//     case SORT_ASC:
//       return {
//         ...state,
//         currentPersonsData: [...action.payload],
//         sortedBy: { [action.propertyData!]: 'asc' },
//       };
//     case SORT_DESC:
//       return {
//         ...state,
//         currentPersonsData: [...action.payload],
//         sortedBy: { [action.propertyData!]: 'desc' },
//       };
//     case SORT_INITIAL:
//       return {
//         ...state,
//         currentPersonsData: [...action.payload],
//         sortedBy: {},
//       };
//     case CURRENT_DATA:
//       return {
//         ...state,
//         currentPersonsData: [...action.payload],
//       };
//     default:
//       return state;
//   }
// };

// export const fakePersonsDataSortAsc = (
//   personDataSortAsc: IPerson[],
//   propertyData: string,
// ): IActionSortData => {
//   return {
//     type: SORT_ASC,
//     payload: personDataSortAsc,
//     propertyData: propertyData,
//   };
// };

// export const fakePersonsDataSortDesc = (
//   personDataSortAsc: IPerson[],
//   propertyData: string,
// ): IActionSortData => {
//   return {
//     type: SORT_DESC,
//     payload: personDataSortAsc,
//     propertyData: propertyData,
//   };
// };

// export const fakePersonsDataSortInitial = (personDataSortInitial: IPerson[]): IActionSortData => {
//   return {
//     type: SORT_INITIAL,
//     payload: personDataSortInitial,
//   };
// };

// export const fakePersonsCurrentData = (personDataSortInitial: IPerson[]): IActionSortData => {
//   return {
//     type: CURRENT_DATA,
//     payload: personDataSortInitial,
//   };
// };

// export default sortReducer;

// import { createAction, createReducer } from '@reduxjs/toolkit';
// import { IPerson } from '../../../utils/interfaces';

// export interface ICurrentDataState {
//   currentPersonsData: [] | IPerson[];
//   sortedBy: { [key: string]: string };
// }

// interface IActionSortData {
//   payload: {
//     personDataSortAsc: IPerson[];
//     propertyId?: string;
//   };
// }

// interface IActionInitialData {
//   payload: {
//     personDataSortInitial: IPerson[];
//     propertyId?: string;
//   };
// }

// const initialState: ICurrentDataState = {
//   currentPersonsData: [],
//   sortedBy: {},
// };

// export const fakePersonsDataSortAsc: any = createAction(
//   'modules/sort/SORT_ASC',
//   (personDataSortAsc: IPerson[], propertyId: string): IActionSortData => {
//     return {
//       payload: { personDataSortAsc, propertyId },
//     };
//   },
// );

// export const fakePersonsDataSortDesc: any = createAction(
//   'modules/sort/SORT_DESC',
//   (personDataSortAsc: IPerson[], propertyId: string): IActionSortData => {
//     return {
//       payload: { personDataSortAsc, propertyId },
//     };
//   },
// );

// export const fakePersonsDataSortInitial: any = createAction(
//   'modules/sort/SORT_INITIAL',
//   (personDataSortInitial: IPerson[]): IActionInitialData => {
//     return {
//       payload: { personDataSortInitial },
//     };
//   },
// );

// export const fakePersonsCurrentData: any = createAction(
//   'modules/sort/CURRENT_DATA',
//   (personDataSortInitial: IPerson[]): IActionInitialData => {
//     return {
//       payload: { personDataSortInitial },
//     };
//   },
// );

// const sortReducer = createReducer(initialState, {
//   [fakePersonsDataSortAsc]: (state, action) => {
//     state.currentPersonsData = [...action.payload.personDataSortAsc];
//     state.sortedBy = { [action.payload.propertyId!]: 'asc' };
//   },
//   [fakePersonsDataSortDesc]: (state, action) => {
//     state.currentPersonsData = [...action.payload.personDataSortAsc];
//     state.sortedBy = { [action.payload.propertyId!]: 'desc' };
//   },
//   [fakePersonsDataSortInitial]: (state, action) => {
//     state.currentPersonsData = [...action.payload.personDataSortInitial];
//     state.sortedBy = {};
//   },
//   [fakePersonsCurrentData]: (state, action) => {
//     state.currentPersonsData = [...action.payload.personDataSortInitial];
//   },
// });

// export default sortReducer;

import { createSlice } from '@reduxjs/toolkit';
import { IPerson } from '../../../utils/interfaces';

export interface ICurrentDataState {
  currentPersonsData: [] | IPerson[];
  sortedBy: { [key: string]: string };
}

interface IActionSortData {
  payload: {
    personDataSortAsc: IPerson[];
    propertyId?: string;
  };
}

interface IActionInitialData {
  payload: {
    personDataSortInitial: IPerson[];
    propertyId?: string;
  };
}

const initialState: ICurrentDataState = {
  currentPersonsData: [],
  sortedBy: {},
};

const sortReducer = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    fakePersonsDataSortAsc: (state, action) => {
      state.currentPersonsData = [...action.payload.personDataSortAsc];
      state.sortedBy = { [action.payload.propertyId!]: 'asc' };
    },
    fakePersonsDataSortDesc: (state, action) => {
      state.currentPersonsData = [...action.payload.personDataSortAsc];
      state.sortedBy = { [action.payload.propertyId!]: 'desc' };
    },
    fakePersonsDataSortInitial: (state, action) => {
      state.currentPersonsData = [...action.payload];
      state.sortedBy = {};
    },
    fakePersonsCurrentData: (state, action) => {
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
