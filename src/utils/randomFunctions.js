import faker from 'faker';

export const randomInteger = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

export const randomProfession = () => {
  let statusArray = ['Teacher', 'Doctor', 'Engineer', 'Poet', 'Explorer'];
  return statusArray[randomInteger(0, 4)];
};

export const randomStatusInWeb = () => {
  let status = faker.random.boolean();
  return status === true ? 'Online' : 'Offline';
};
