import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ClientsProvider from './context/ClientsProvider';
import GlobalStyle from './globalStyle';
import MainPage from './pages/Main';
import Register1 from './pages/Register1';
import Register2 from './pages/Register2';
import Register3 from './pages/Register3';
import Clients from './pages/Clients';

function App() {
  return (
    <ClientsProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
            <Route path="/" element={ <MainPage /> } />
            <Route path="register1" element={ <Register1 /> } />
            <Route path="register1/register2" element={ <Register2 /> } />
            <Route path="register1/register2/register3" element={ <Register3 /> } />
            <Route path="/clients" element={ <Clients /> } />
        </Routes>
      </BrowserRouter>
    </ClientsProvider>
  );
}

export default App;
