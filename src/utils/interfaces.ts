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

export interface IColumnSearchTitle {
  id: string;
  title: string;
  isChecked: boolean;
}
