import faker from 'faker';

export const randomInteger = (min: number, max: number): number => {
  let rand: number = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

export const randomProfession = (): string => {
  let statusArray: string[] = ['Teacher', 'Doctor', 'Engineer', 'Poet', 'Explorer'];
  return statusArray[randomInteger(0, 4)];
};

export const randomStatusInWeb = (): string => {
  let status: Boolean = faker.random.boolean();
  return status === true ? 'Online' : 'Offline';
};
