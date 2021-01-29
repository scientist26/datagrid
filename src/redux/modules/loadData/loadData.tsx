import { IPerson } from '../../../utils/interfaces';
const FAKE_PERSONS_DATA_LOADED = 'modules/loadData/FAKE_PERSONS_DATA_LOADED';

type TypeLoadDataState = {
  initialPersonsData: [] | IPerson[];
};

type TypeActionLoad = { type: typeof FAKE_PERSONS_DATA_LOADED; payload: IPerson[] };

const initialState: TypeLoadDataState = {
  initialPersonsData: [],
};

const loadFakeDataReducer = (state = initialState, action: TypeActionLoad): TypeLoadDataState => {
  switch (action.type) {
    case FAKE_PERSONS_DATA_LOADED:
      return {
        ...state,
        initialPersonsData: [...action.payload],
      };
    default:
      return state;
  }
};

export const fakePersonsDataLoaded = (fakePersonData: IPerson[]): TypeActionLoad => {
  return {
    type: FAKE_PERSONS_DATA_LOADED,
    payload: fakePersonData,
  };
};

export default loadFakeDataReducer;
