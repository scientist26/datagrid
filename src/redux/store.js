import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import loadFakeDataReducer from './modules/loadData';
import sortReducer from './modules/sort';

const rootReducer = combineReducers({ loadFakeDataReducer, sortReducer });
const store = createStore(rootReducer, composeWithDevTools());

export default store;
