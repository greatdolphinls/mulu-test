
import { useState, useCallback, useEffect } from 'react';
import { useQuery } from 'react-query';

import * as AUTH_SERVICE from 'services/auth';
import setAuthToken from 'services/security/setAuthToken'

const useForm = callback => {
  const [inputs, setInputs] = useState({});

  const initForm = (data = {}) => {
    setInputs(data)
  }

  const submitHandler = event => {
    if (event) {
      event.preventDefault();
    }
    callback();
  };

  const inputChangeHandler = event => {
    event.persist();
    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value
    }));
  };

  return {
    initForm,
    submitHandler,
    inputChangeHandler,
    inputs
  };
};

export {
  useForm
};
