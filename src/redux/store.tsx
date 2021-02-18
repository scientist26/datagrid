import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import loadFakeDataSlice from './modules/loadData';
import settingSlice from './modules/setting';
import visibleColumnsSlice from './modules/visibleColumns';
import webStatusFilterSlice from './modules/webStatusFilter';

const rootReducer = combineReducers({
  loadFakeDataSlice,
  settingSlice,
  visibleColumnsSlice,
  webStatusFilterSlice,
});
const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof rootReducer>;
export type TableDispatch = typeof store.dispatch;
export default store;
