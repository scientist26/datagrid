import { createStore, combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import loadFakeDataReducer from './modules/loadData';
import sortReducer from './modules/sort';

const rootReducer = combineReducers({ loadFakeDataReducer, sortReducer });
// const store = createStore(rootReducer, composeWithDevTools());
const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof rootReducer>;
export default store;
