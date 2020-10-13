
import { useState } from 'react';

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
