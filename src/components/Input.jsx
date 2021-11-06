import React from 'react';
import ClientsContext from '../context/ClientsContext';
import { LabelField, InputField } from '../styles/InputStyles';

const Input = ({ id, label, type, ...props }) => {
  const { client, setClient } = React.useContext(ClientsContext);

  return (
    <>
      <LabelField htmlFor={ id }>{ label }</LabelField>
      <InputField
        type={ type }
        id={ id }
        name={ id }
        onChange={ ({ target }) => setClient({ ...client, [id]: target.value })}
        { ...props }
      />
    </>
  )
};

export default Input;
