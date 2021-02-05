import { createSlice } from '@reduxjs/toolkit';
import dataColumns from './dataColumns';

interface ITableHeaderItem {
  title: string;
  isSort: boolean;
  isSortByString: boolean;
  id: string;
  isVisible: boolean;
}

interface IInitialState {
  tableHeader: ITableHeaderItem[];
  isOpenMenuColumns: boolean;
}

const initialState: IInitialState = {
  tableHeader: dataColumns,
  isOpenMenuColumns: false,
};

interface IActionVisible {
  payload: {
    ID: string;
    isChecked: boolean;
  };
  type: string;
}

const visibleColumnsReducer = createSlice({
  name: 'visibleColumns',
  initialState,
  reducers: {
    changeVisible: (state, action: IActionVisible) => {
      state.tableHeader = state.tableHeader.map((e) => {
        if (e.id === action.payload.ID) {
          e.isVisible = action.payload.isChecked;
          return e;
        } else {
          return e;
        }
      });
    },
    openMenuColumns: (state) => {
      if (state.isOpenMenuColumns === true) {
        state.isOpenMenuColumns = false;
      } else {
        state.isOpenMenuColumns = true;
      }
    },
  },
});

export default visibleColumnsReducer.reducer;
export const { changeVisible, openMenuColumns } = visibleColumnsReducer.actions;
