import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import loadFakeDataReducer from './modules/loadData';
import sortReducer from './modules/sort';

const rootReducer = combineReducers({ loadFakeDataReducer, sortReducer });
// const rootReducer = combineReducers({ load: loadFakeDataReducer, sort: sortReducer });
const store = createStore(rootReducer, composeWithDevTools());

// export type RootState = ReturnType<typeof rootReducer>;
export default store;
