import faker from 'faker';
import { randomInteger, randomProfession, randomStatusInWeb } from '../../utils/randomFunctions';

const fakePersonData = [];
for (let i = 0; i < 20; i++) {
  fakePersonData.push({
    key: i,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    status: randomStatusInWeb(),
    age: randomInteger(18, 65),
    profession: randomProfession(),
    date: faker.date.past().toLocaleDateString('fr-CH'),
    salary: `${faker.random.number()} $`,
  });
}

export default fakePersonData;
