const SORT_ASC = 'modules/sort/SORT_ASC';
const SORT_DESC = 'modules/sort/SORT_DESC';
const SORT_INITIAL = 'modules/sort/SORT_INITIAL';
const CURRENT_DATA = 'modules/sort/CURRENT_DATA';

const initialState = {
  currentPersonsData: [],
  sortedBy: {},
};

const sortReducer = (state = initialState, action) => {
  switch (action.type) {
    case SORT_ASC:
      return {
        // ...state,
        currentPersonsData: [...action.payload],
        sortedBy: { [action.propertyData]: 'asc' },
      };
    case SORT_DESC:
      return {
        // ...state,
        currentPersonsData: [...action.payload],
        sortedBy: { [action.propertyData]: 'desc' },
      };
    case SORT_INITIAL:
      return {
        // ...state,
        currentPersonsData: [...action.payload],
        sortedBy: {},
      };
    case CURRENT_DATA:
      return {
        ...state,
        currentPersonsData: [...action.payload],
      };
    default:
      return state;
  }
};

export const fakePersonsDataSortAsc = (personDataSortAsc, propertyData) => {
  return {
    type: SORT_ASC,
    payload: personDataSortAsc,
    propertyData: propertyData,
  };
};

export const fakePersonsDataSortDesc = (personDataSortAsc, propertyData) => {
  return {
    type: SORT_DESC,
    payload: personDataSortAsc,
    propertyData: propertyData,
  };
};

export const fakePersonsDataSortInitial = (personDataSortInitial) => {
  return {
    type: SORT_INITIAL,
    payload: personDataSortInitial,
  };
};

export const fakePersonsCurrentData = (personDataSortInitial) => {
  return {
    type: CURRENT_DATA,
    payload: personDataSortInitial,
  };
};

export default sortReducer;
