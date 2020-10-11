
import { seedUsers, dropUsers } from './user';

exports.initSeed = async () => {
  await seedUsers();
}

exports.dropSeed = async () => {
  await dropUsers();
}
