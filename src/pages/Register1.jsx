import React from 'react';
import ClientsContext from '../context/ClientsContext';
import { Link } from 'react-router-dom';
import { Container } from '../styles/Register1Styles';
import Input from '../components/Input';
import Button from '../components/Buttons';
import LogoLeft from '../components/LogoLeft';

const Register1 = () => {

  const {
    client,
    error,
    validateName,
    validateEmail,
    validatePhone,
  } = React.useContext(ClientsContext);

  const handleName = ({ target }) => {
    validateName(target.value);
  };

  const handleEmail = ({ target }) => {
    validateEmail(target.value);
  };

  const handlePhone = ({ target }) => {
    validatePhone(target.value);
  }

  return (
    <Container>
      <LogoLeft />

      <form>
        <Input
          type="text"
          id="name"
          label="Nome"
          onBlur={ handleName }
        />
        { (error && !client.name)
          ? <span>Preencha o campo "Nome"</span>
          : '' }

        <Input
          type="text"
          id="lastName"
          label="Sobrenome"
        />

        <Input
          type="email"
          id="email"
          label="E-mail"
          onBlur={ handleEmail }
        />
        { (error && !client.email)
          ? <span>Preencha o campo "E-mail"</span>
          : '' }

        <Input
          type="text"
          id="phone"
          label="Telefone"
          onBlur={ handlePhone }
        />
        { (error && !client.phone)
          ? <span>Preencha o campo "Telefone"</span>
          : '' }

        <Link to="register2"><Button text="Próximo" /></Link>

      </form>
    </Container>
  )
};

export default Register1;
