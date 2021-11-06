import React from 'react';
import ClientsContext from '../context/ClientsContext';
import { Link } from 'react-router-dom';
import { Container } from '../styles/Register3Styles';
import Input from '../components/Input';
import Button from '../components/Buttons';
import LogoLeft from '../components/LogoLeft';

const Register3 = () => {
  const {
    client,
    error,
    validateCpf,
  } = React.useContext(ClientsContext);

  const handleSubmit = () => {
    localStorage.setItem(`${client.cpf}`, JSON.stringify(client));
  };

  const handleCpf = ({ target }) => {
    validateCpf(target.value);
  };

  return (
    <Container>
      <LogoLeft />

      <form>
        <Input
          type="date"
          id="date"
          label="Data de Nascimento"
        />

        <Input
          type="text"
          id="cpf"
          label="CPF"
          onBlur={ handleCpf }
        />
        { (error && !client.cpf) ?
          <span>Preencha o campo "CPF"</span> :
          '' }

        <Input
          type="text"
          id="income"
          label="Renda Mensal"
        />

        <Link to="/"><Button text="Salvar" func={ handleSubmit } /></Link>
      </form>
    </Container>
  )
};

export default Register3;
