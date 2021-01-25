const initialState = {
  initialPersonsData: [],
  currentPersonsData: [],
  sortedBy: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FAKE_PERSONS_DATA_LOADED':
      return {
        ...state,
        initialPersonsData: [...action.payload],
        currentPersonsData: [...action.payload],
      };
    case 'FAKE_PERSONS_DATA_SORT_ASC':
      return {
        ...state,
        currentPersonsData: [...action.payload],
        sortedBy: { [action.propertyData]: 'asc' },
      };
    case 'FAKE_PERSONS_DATA_SORT_DESC':
      return {
        ...state,
        currentPersonsData: [...action.payload],
        sortedBy: { [action.propertyData]: 'desc' },
      };
    case 'FAKE_PERSONS_DATA_SORT_INITIAL':
      return {
        ...state,
        currentPersonsData: [...action.payload],
        sortedBy: {},
      };
    default:
      return state;
  }
};

export default reducer;
