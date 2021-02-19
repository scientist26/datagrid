import { createSlice } from '@reduxjs/toolkit';

export interface IProfessionFilter {
  professionFilter: { [key: string]: boolean };
}

interface IActionProfession {
  payload: [] | { [key: string]: boolean }[];
  type: string;
}

const initialState: IProfessionFilter = {
  professionFilter: { teacher: true, doctor: true, engineer: true, poet: true, explorer: true },
};

const professionFilterSlice = createSlice({
  name: 'webStatusFilter',
  initialState,
  reducers: {
    checkProfessionFilter: (state, action: IActionProfession) => {
      if (action.payload === null) {
        for (let prop in state.professionFilter) {
          state.professionFilter[prop] = false;
        }
      } else {
        for (let prop in state.professionFilter) {
          if (action.payload === null) {
            state.professionFilter[prop] = false;
          }
          const currentProfession = action.payload.filter((e: any) => e.value === prop);
          if (currentProfession.length === 0) {
            state.professionFilter[prop] = false;
          } else {
            state.professionFilter[prop] = true;
          }
        }
      }
    },
  },
});

export default professionFilterSlice.reducer;
export const { checkProfessionFilter } = professionFilterSlice.actions;
