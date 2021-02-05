import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import loadFakeDataReducer from './modules/loadData';
import sortReducer from './modules/sort';
import visibleColumnsReducer from './modules/visibleColumns';

const rootReducer = combineReducers({ loadFakeDataReducer, sortReducer, visibleColumnsReducer });
const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof rootReducer>;
export type TableDispatch = typeof store.dispatch;
export default store;
