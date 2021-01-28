import { IPerson } from '../../../utils/interfaces';

const SORT_ASC: string = 'modules/sort/SORT_ASC';
const SORT_DESC: string = 'modules/sort/SORT_DESC';
const SORT_INITIAL: string = 'modules/sort/SORT_INITIAL';
const CURRENT_DATA: string = 'modules/sort/CURRENT_DATA';

export type TypeCurrentDataState = {
  currentPersonsData: [] | IPerson[];
  sortedBy: object;
};

type ActionSortData = {
  type: typeof SORT_ASC | typeof SORT_DESC | typeof SORT_INITIAL | typeof CURRENT_DATA;
  payload: IPerson[];
  propertyData?: string;
};

const initialState: TypeCurrentDataState = {
  currentPersonsData: [],
  sortedBy: {},
};

const sortReducer = (state = initialState, action: ActionSortData): TypeCurrentDataState => {
  switch (action.type) {
    case SORT_ASC:
      return {
        ...state,
        currentPersonsData: [...action.payload],
        sortedBy: { [action.propertyData!]: 'asc' },
      };
    case SORT_DESC:
      return {
        ...state,
        currentPersonsData: [...action.payload],
        sortedBy: { [action.propertyData!]: 'desc' },
      };
    case SORT_INITIAL:
      return {
        ...state,
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

export const fakePersonsDataSortAsc = (
  personDataSortAsc: IPerson[],
  propertyData: string,
): ActionSortData => {
  return {
    type: SORT_ASC,
    payload: personDataSortAsc,
    propertyData: propertyData,
  };
};

export const fakePersonsDataSortDesc = (
  personDataSortAsc: IPerson[],
  propertyData: string,
): ActionSortData => {
  return {
    type: SORT_DESC,
    payload: personDataSortAsc,
    propertyData: propertyData,
  };
};

export const fakePersonsDataSortInitial = (personDataSortInitial: IPerson[]): ActionSortData => {
  return {
    type: SORT_INITIAL,
    payload: personDataSortInitial,
  };
};

export const fakePersonsCurrentData = (personDataSortInitial: IPerson[]): ActionSortData => {
  return {
    type: CURRENT_DATA,
    payload: personDataSortInitial,
  };
};

export default sortReducer;
