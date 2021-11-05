import React from 'react';
import { Aside } from './AsideLeftStyles';
import Button from './Buttons';

const AsideLeft = () => {
  return (
    <>
      <Aside>
        <h2>Opções</h2>
        <div className="btnContainer">
          <Button text="Cadastrar"/>
          <Button text="Clientes" />
        </div>
      </Aside>
    </>
  )
};

export default AsideLeft;
