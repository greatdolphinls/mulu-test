
import mongoose from 'mongoose';

import timestampPlugin from '~/database/models/plugins/timestamp';
import databaseConstants from '~/constants/database';

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    default: null
  },
  lastName: {
    type: String,
    default: null
  },
  email: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: databaseConstants.ROLE_TYPE_ENUM,
    default: databaseConstants.ROLE_TYPE_DEFAULT
  },
  age: {
    type: Number,
    default: 0
  },
  gender: {
    type: String,
    enum: databaseConstants.GENDER_TYPE_ENUM,
    default: databaseConstants.GENDER_TYPE_DEFAULT
  },
  zipCode: {
    type: String,
    default: null
  },
  professions: {
    type: String,
    enum: databaseConstants.PROFESSION_TYPE_ENUM,
    default: databaseConstants.PROFESSION_TYPE_DEFAULT
  },
  password: {
    type: String,
    default: null
  },
  lastLoginAt: {
    type: Date,
    default: null
  },
  resetPasswordToken: {
    type: String,
    default: null
  },
  resetPasswordExpires: {
    type: Date,
    default: null
  },
  verified: {
    type: Boolean,
    default: false
  }
});

UserSchema.plugin(timestampPlugin);
const User = mongoose.model('user', UserSchema);
export default User;