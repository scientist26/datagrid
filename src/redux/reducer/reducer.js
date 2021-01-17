const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PHOTOS_LOADED':
      return {
        ...state,
        photos: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
