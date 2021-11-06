import React from 'react';
import RegisterContext from "./ClientsContext";
import PropTypes from 'prop-types';

const ClientsProvider = ({ children }) => {
  const [error, setError] = React.useState('');
  const [client, setClient] = React.useState({
    name: '',
    lastName: '',
    email: '',
    phone: '',
    cep: '',
    firstAddress: '',
    secondAddress: '',
    date: '',
    cpf: '',
    income: '',
  });

  const validateName = (value) => {
    if (!value) {
      setError(true);
      return error;
    } else {
      setError(false);
      return true;
    }
  };

  const validateEmail = (value) => {
    if (!value) {
      setError(true);
      return error;
    }

    if (!/^[A-Z0-9+_.-]+@[A-Z0-9.-]+$/.test(value)) {
      setError(true);
      return error;
    } else {
      setError(false)
      return error;
    }
  };

  const validatePhone = (value) => {
    if (!value) {
      setError(true);
      return error;
    }

    if (!/^[1-9]{2} ?9[0-9]{4}-?[0-9]{4}$/.test(value)) {
      setError(true);
      return error;
    } else {
      setError(false);
      return error;
    }
  };

  const validateCep = (value) => {
    if (!value) {
      setError(true);
      return false;
    }

    if (!/^\d{5}-?\d{3}$/.test(value)) {
      setError(true);
      return error;
    } else {
      setError(false);
      return error;
    }
  };

  const validateFirstAddress = (value) => {
    if (!value) {
      setError(true);
      return error;
    } else {
      setError(false);
      return true;
    }
  };

  const validateCpf = (value) => {
    if (!value) {
      setError(true);
      return false;
    }

    if (!/^(\d{3}.?){3}-?\d{2}$/.test(value)) {
      setError(true);
      return error;
    } else {
      setError(false);
      return error;
    }
  };

  const context = {
    client,
    setClient,
    error,
    setError,
    validateName,
    validateEmail,
    validatePhone,
    validateCep,
    validateFirstAddress,
    validateCpf,
  };

  return (
    <RegisterContext.Provider value={ context }>
      { children }
    </RegisterContext.Provider>
  )
};

ClientsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ClientsProvider;
