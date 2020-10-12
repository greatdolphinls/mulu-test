
import { useState, useCallback } from 'react';

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

const useAuth = () => {
  const logOutHandler = useCallback(() => {
    localStorage.clear();
    setAuthToken('');
  }, []);

  const setLoginToken = useCallback((token) => {
    setAuthToken(token);
    localStorage.setItem('token', token);
  }, []);

  return {
    logOutHandler,
    setLoginToken
  }
};

export {
  useForm,
  useAuth
};
