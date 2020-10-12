
import bcrypt from 'bcrypt';

const assertValidCredentials = (password, hashPassword) => {
  const matchPasswords = bcrypt.compareSync(password, hashPassword);

  return matchPasswords;
};

export {
  assertValidCredentials
};