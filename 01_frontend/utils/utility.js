
import format from 'date-fns/format';

const isEmpty = value => {
  return (
    value === undefined ||
    value === null ||
    (typeof value === 'object' && Object.keys(value).length === 0) ||
    (typeof value === 'string' && value.trim().length === 0)
  );
};

const getDateByFormat = (dateTime, type = 'MM/dd/yyyy') => {
  const result = format(new Date(dateTime), type);
  return result
}

export {
  isEmpty,
  getDateByFormat
};
