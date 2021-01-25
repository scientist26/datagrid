export const sortFunctionString = (data, direction, property) => {
  return data.sort((a, b) => {
    if (a[property] > b[property]) {
      return direction === 'asc' ? 1 : -1;
    }
    if (a[property] < b[property]) {
      return direction === 'asc' ? -1 : 1;
    }
    return 0;
  });
};
