import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Aside,
  ClientList,
  AsideDetails,
  Button,
} from '../styles/ClientsStyles';
import logoVentureLabs from '../images/logoVenturelabsBlue_V2.png';

const Clients = () => {
  const [client, setClient] = React.useState({});
  const allClients = [];
  const allKeys = Object.keys(localStorage);

  const allLocal = () => {
    allKeys.forEach((key) => {
      allClients.push(JSON.parse(localStorage.getItem(key)))
    });
  }
  allLocal()

  const details = () => {
    if (!client.name) {
      return <Link to="/"><img src={ logoVentureLabs } alt="Logo da empresa VentureLabs"/></Link>
    } else {
      return (
        <>
          <div className="clientDetails">
            <p>{ `Nome: ${client.name}` }</p>
            <p>{ `Sobrnome: ${client.lastName}` }</p>
            <p>{ `E-mail: ${client.email}` }</p>
            <p>{ `Telefone: ${client.phone}` }</p>
            <p>{ `CEP: ${client.cep}` }</p>
            <p>{ `End. 1: ${client.firstAddress}` }</p>
            <p>{ `End. 2: ${client.secondAddress}` }</p>
            <p>{ `Data de nascimento: ${client.date}` }</p>
            <p>{ `CPF: ${client.cpf}` }</p>
            <p>{ `Renda Mensal: ${client.income}` }</p>
          </div>
          <Link to="/"><Button>Menu Iniciar</Button></Link>
        </>
      )
    }
  };

  return (
    <Container>
      <Aside>
        <h3>Clientes</h3>

        <div>
          {allClients.map((client) => (
            <ClientList
              key={ client.cpf }
              type="button"
              onClick={ () => {
                setClient(JSON.parse(localStorage.getItem(client.cpf)))
                }
              }
            >
              { `Nome: ${client.name} ${client.lastName}` }
            </ClientList>
          ))}
        </div>
      </Aside>

      <AsideDetails>
        { details() }

      </AsideDetails>
    </Container>
  )
};

export default Clients;
