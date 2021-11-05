import React from 'react';
import { SectionForm, Container } from './MainStyles';
// import Input from '../components/Input';
import ventureLabs from '../images/logoVenturelabs.png';
import Button from '../components/Buttons';

const Main = () => {
  // const [name, setName] = React.useState('');
  // const [email, setEmail] = React.useState('');

  return (
    <SectionForm>
      <Container>
        <aside className="asideLeft">
          <h2>Opções</h2>
          <div className="btnContainer">
            <Button text="Cadastrar"/>
            <Button text="Clientes" />
          </div>
        </aside>
        <div className="asideRight">
          <h1>Image ou textão bacana</h1>
          <img className="logoVenturelabs" src={ ventureLabs } alt="logo da empresa venturelabs"/>
        </div>
      </Container>
    </SectionForm>
  )
};

export default Main;
