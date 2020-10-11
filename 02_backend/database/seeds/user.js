
import bcrypt from 'bcrypt';

import User from '~/database/models/user';
import commonConstants from '~/constants/common';

exports.dropUsers = async () => {
  await User.deleteMany({});
}

exports.seedUsers = async () => {
  const users = [
    {
      firstName: 'Mulu',
      lastName: 'Admin',
      role: commonConstants.ROLE.ADMIN,
      email: 'admin@mulu.com',
      age: 29,
      zipCode: 54110,
      password: '123456',
      verified: true
    },
    {
      firstName: 'Andres',
      lastName: 'Plaza',
      role: commonConstants.ROLE.CONTACT,
      email: 'andresplaza@mulu.com',
      age: 31,
      zipCode: 84110,
      password: '123456',
      verified: true
    },
    {
      firstName: 'Bryan',
      lastName: 'Lopez',
      role: commonConstants.ROLE.CONTACT,
      email: 'bryanlopez@mulu.com',
      age: 33,
      zipCode: 84510,
      password: '123456',
      verified: true
    },
    {
      firstName: 'Darwing',
      lastName: 'Sanchez',
      role: commonConstants.ROLE.AGENT,
      email: 'darwingsanchez@mulu.com',
      age: 23,
      zipCode: 44510,
      password: '123456',
      verified: true
    },
    {
      firstName: 'Gustavo',
      lastName: 'Ortega',
      role: commonConstants.ROLE.AGENT,
      email: 'gustavoortega@mulu.com',
      age: 38,
      zipCode: 54510,
      password: '123456',
      verified: true
    },
    {
      firstName: 'Leo',
      lastName: 'Delion',
      role: commonConstants.ROLE.AGENT,
      email: 'leodelion@mulu.com',
      age: 38,
      zipCode: 54510,
      password: '123456',
      verified: true
    },
    {
      firstName: 'Ruben',
      lastName: 'Ching',
      role: commonConstants.ROLE.CONTACT,
      email: 'rubenching@mulu.com',
      age: 34,
      zipCode: 84610,
      password: '123456',
      verified: true
    },
    {
      firstName: 'Elodie',
      lastName: 'Halgand',
      role: commonConstants.ROLE.CONTACT,
      email: 'elodiehalgand@mulu.com',
      age: 24,
      zipCode: 74610,
      password: '123456',
      verified: true
    },
    {
      firstName: 'Imad',
      lastName: 'Hadjioui',
      role: commonConstants.ROLE.CONTACT,
      email: 'imadhadjioui@mulu.com',
      age: 35,
      zipCode: 94610,
      password: '123456',
      verified: true
    },
    {
      firstName: 'Julien',
      lastName: 'Couette',
      role: commonConstants.ROLE.AGENT,
      email: 'julien@mulu.com',
      age: 41,
      zipCode: 84510,
      password: '123456',
      verified: true
    },
    {
      firstName: 'Kristof',
      lastName: 'Dhaeze',
      role: commonConstants.ROLE.CONTACT,
      email: 'kristofdhaeze@mulu.com',
      age: 30,
      zipCode: 34610,
      password: '123456',
      verified: true
    },
    {
      firstName: 'Italo',
      lastName: 'Ferrari',
      role: commonConstants.ROLE.CONTACT,
      email: 'italoferrari@mulu.com',
      age: 37,
      zipCode: 75830,
      password: '123456',
      verified: true
    }
  ];

  for (const user of users) {
    const hashedPassword = bcrypt.hashSync(user.password, commonConstants.BYCRYPT_LENGTH);
    await User.create({
      ...user,
      password: hashedPassword
    });
  }
}