export const fakePersonsDataLoaded = (fakePersonData) => {
  return {
    type: 'FAKE_PERSONS_DATA_LOADED',
    payload: fakePersonData,
  };
};

export const fakePersonsDataSortAsc = (personDataSortAsc, propertyData) => {
  return {
    type: 'FAKE_PERSONS_DATA_SORT_ASC',
    payload: personDataSortAsc,
    propertyData: propertyData,
  };
};

export const fakePersonsDataSortDesc = (personDataSortAsc, propertyData) => {
  return {
    type: 'FAKE_PERSONS_DATA_SORT_DESC',
    payload: personDataSortAsc,
    propertyData: propertyData,
  };
};

export const fakePersonsDataSortInitial = (personDataSortInitial) => {
  return {
    type: 'FAKE_PERSONS_DATA_SORT_INITIAL',
    payload: personDataSortInitial,
  };
};
