const FAKE_PERSONS_DATA_LOADED = 'modules/loadData/FAKE_PERSONS_DATA_LOADED';

const initialState = {
  initialPersonsData: [],
};

const loadFakeDataReducer = (state = initialState, action) => {
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

export const fakePersonsDataLoaded = (fakePersonData) => {
  return {
    type: FAKE_PERSONS_DATA_LOADED,
    payload: fakePersonData,
  };
};

export default loadFakeDataReducer;
