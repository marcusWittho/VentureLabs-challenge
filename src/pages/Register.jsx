import React from 'react';
import { Container } from './RegisterStyles';
import Input from '../components/Input';
import Button from '../components/Buttons';
import logoVenturelabs from '../images/logoVenturelabs.png';

const Register = () => {
  return (
    <Container>
      <aside>
        <img
          className="logoVenturelabs"
          src={ logoVenturelabs }
          alt="Logo da empresa Venturelabs"
        />
      </aside>
      <form>
        <Input type="text" id="name" label="Nome" />
        <Input type="text" id="lastName" label="Sobrenome" />
        <Input type="email" id="email" label="E-mail" />
        <Input type="text" id="phone" label="Telefone" />

        <Button text="Próximo"/>
      </form>
    </Container>
  )
};

export default Register;
