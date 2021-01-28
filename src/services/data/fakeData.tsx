import faker from 'faker';
import { randomInteger, randomProfession, randomStatusInWeb } from '../../utils/randomFunctions';
import { IPerson } from '../../utils/interfaces';

const fakePersonData: object[] = [];
for (let i = 0; i < 20; i++) {
  let person: IPerson = {
    key: i,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    status: randomStatusInWeb(),
    age: randomInteger(18, 65),
    profession: randomProfession(),
    date: faker.date.between('2016-01-01', '2021-01-10').toISOString().slice(0, 10),
    salary: faker.random.number(),
  };
  fakePersonData.push(person);
}

export default fakePersonData;
