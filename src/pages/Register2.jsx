import React from 'react';
import ClientsContext from '../context/ClientsContext';
import { Link } from 'react-router-dom';
import { Container } from '../styles/Register2Styles';
import Input from '../components/Input';
import Button from '../components/Buttons';
import LogoLeft from '../components/LogoLeft';

const Register2 = () => {
  const {
    client,
    error,
    validateCep,
    validateFirstAddresss,
  } = React.useContext(ClientsContext);

  const handleCep = ({ target }) => {
    validateCep(target.value);
  };

  const handleAddress = ({ target }) => {
    validateFirstAddresss(target.value);
  };

  return (
    <Container>
      <LogoLeft />

      <form>
        <Input
          type="text"
          id="cep"
          label="CEP"
          onBlur={ handleCep }
        />
        { (error && !client.cep)
          ? <span>Preencha o campo "CEP"</span>
          : '' }

        <Input
          type="text"
          id="firstAddress"
          label="Endereço 1"
          onBlur={ handleAddress }
        />
        { (error && !client.firstAddress)
          ? <span>Preencha o campo "Endereço 1"</span>
          : '' }

        <Input
          type="text"
          id="secondAddress"
          label="Endereço 2"
        />

        <Link to="register3"><Button text="Próximo" /></Link>
      </form>
    </Container>
  )
};

export default Register2;
