
import { ObjectID } from 'bson';

exports.generateRandomId = () => {
  return new ObjectID().toString();
}

exports.isEmpty = value => {
  return (
    value === undefined ||
    value === null ||
    (typeof value === 'object' && Object.keys(value).length === 0) ||
    (typeof value === 'string' && value.trim().length === 0)
  );
}