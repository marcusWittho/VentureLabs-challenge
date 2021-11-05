import React from 'react';
import { Container, AsideRight } from './MainStyles';
import ventureLabs from '../images/logoVenturelabs.png';
import AsideLeft from '../components/AsideLeft';

const Main = () => {
  // const [name, setName] = React.useState('');
  // const [email, setEmail] = React.useState('');

  return (
    <Container>
      <AsideLeft />

      <AsideRight>
        <h1>Image ou textão bacana</h1>
        <img className="logoVenturelabs" src={ ventureLabs } alt="logo da empresa venturelabs"/>
      </AsideRight>
    </Container>
  )
};

export default Main;
