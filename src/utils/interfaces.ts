export interface IPerson {
  key?: number;
  firstName?: string;
  lastName?: string;
  status?: string;
  age?: number;
  profession?: string;
  date?: string;
  salary?: number;
}

export interface IPersonDataProps {
  personsDataStore: IPerson[];
}
