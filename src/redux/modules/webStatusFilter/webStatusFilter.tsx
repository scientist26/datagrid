import { createSlice } from '@reduxjs/toolkit';

export interface IWebStatus {
  webStatusFilter: { [key: string]: boolean };
}

interface IActionWebStatus {
  payload: boolean | any;
  type: string;
}

const initialState: IWebStatus = {
  webStatusFilter: { online: true, offline: true },
};

const webStatusFilterSlice = createSlice({
  name: 'webStatusFilter',
  initialState,
  reducers: {
    checkOnline: (state, action: IActionWebStatus) => {
      state.webStatusFilter.online = action.payload;
    },
    checkOffline: (state, action: IActionWebStatus) => {
      state.webStatusFilter.offline = action.payload;
    },
  },
});

export default webStatusFilterSlice.reducer;
export const { checkOnline, checkOffline } = webStatusFilterSlice.actions;
