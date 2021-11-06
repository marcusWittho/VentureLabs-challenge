import React from 'react';
import { Container, AsideRight } from '../styles/MainStyles';
import ventureLabs from '../images/logoVenturelabsBlue_V2.png';
import AsideLeft from '../components/AsideLeft';

const Main = () => {
  return (
    <Container>
      <AsideLeft />

      <AsideRight>
        <img className="logoVenturelabs" src={ ventureLabs } alt="logo da empresa venturelabs"/>
      </AsideRight>
    </Container>
  )
};

export default Main;
