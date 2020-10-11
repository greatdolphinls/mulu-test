
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

exports.decodeBase64 = (dataString) => {
  let matches = dataString.match(/^data:([A-Za-z0-9-+\/]+);base64,(.+)$/);
  let response = {};
  response.type = matches[1];
  response.data = Buffer.from(matches[2], 'base64');
  return response;
}