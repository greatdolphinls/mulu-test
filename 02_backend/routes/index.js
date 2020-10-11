
import passport from 'passport';

import SeedAPI from '~/routes/seed';
import AuthAPI from '~/routes/auth';
import UserAPI from '~/routes/user';

exports.assignRoutes = app => {

  // MEMO: auth API
  app.post('/api/register', AuthAPI.register);
  app.post('/api/login', AuthAPI.login);
  app.post('/api/forgot-password', AuthAPI.forgotPassword);
  app.post('/api/reset-password', AuthAPI.resetPassword);

  // MEMO: seed API
  app.get('/api/seed/:password', SeedAPI.initSeed);
  app.get('/api/drop/:password', SeedAPI.dropSeed);

  // MEMO: user API
  app.get('/api/users', passport.authenticate('jwt', { session: false }), UserAPI.getUsers);
  app.get('/api/users/:_id', passport.authenticate('jwt', { session: false }), UserAPI.getUser);
  app.post('/api/users', passport.authenticate('jwt', { session: false }), UserAPI.addUser);
  app.put('/api/users', passport.authenticate('jwt', { session: false }), UserAPI.editUser);
  app.delete('/api/users', passport.authenticate('jwt', { session: false }), UserAPI.removeUser);
}