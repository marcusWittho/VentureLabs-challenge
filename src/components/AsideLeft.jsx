import React from 'react';
import { Link } from 'react-router-dom';
import { Aside, Button } from '../styles/AsideLeftStyles';

const AsideLeft = () => {
  return (
    <Aside>
      <h2>Olá!!</h2>
      <p>Selecione uma das opções abaixo :)</p>

      <div className="btnContainer">
        <Link to="register1"><Button>Cadastrar</Button></Link>
        <Link to="clients"><Button>Clientes</Button></Link>
      </div>
    </Aside>
  )
};

export default AsideLeft;
