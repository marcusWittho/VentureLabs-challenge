import React from 'react';
import { Aside } from '../styles/LogoLeftStyles';
import logoVenturelabs from '../images/logoVenturelabs.png';
import logoVenturelabs_V3 from '../images/logoVenturelabs_V3.png';

const LogoLeft = () => {
  return (
    <>
      <Aside>
        <img
          className="logoVenturelabs"
          src={ logoVenturelabs }
          alt="Logo da empresa Venturelabs"
        />
        <img
          className="logoVenturelabs_V3"
          src={ logoVenturelabs_V3 }
          alt="Outra versão do logo da empresa venture Labs"
        />
      </Aside>
    </>
  )
};

export default LogoLeft;
