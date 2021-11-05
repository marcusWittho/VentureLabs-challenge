import React from 'react';
import GlobalStyle from './globalStyle';
import MainPage from './pages/Main';
import Register from './pages/Register';

function App() {
  return (
    <>
      <GlobalStyle />
      <MainPage />
      <Register />
    </>
  );
}

export default App;
