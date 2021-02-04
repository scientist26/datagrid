import { IPerson } from './interfaces';
//TODO impplement a & b parametr
export const sortFunctionString = (
  data: IPerson[],
  direction: string,
  property: string | number,
): IPerson[] => {
  let newArr = data.slice();
  return newArr.sort((a: any, b: any) => {
    if (a[property] > b[property]) {
      return direction === 'asc' ? 1 : -1;
    }
    if (a[property] < b[property]) {
      return direction === 'asc' ? -1 : 1;
    }
    return 0;
  });
};
