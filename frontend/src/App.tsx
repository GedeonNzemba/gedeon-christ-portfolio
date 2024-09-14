import React from 'react';
import styled from 'styled-components'
import './App.css';
import Header from './components/header/Header';

function App() {

  const Application = styled.div`
    background-color: rgba(19,19,19,1);
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    height: 400vh;
  `

  const Main = styled.main`
    display: block;
    background-image: url(${require('./assets/back_blure.png')});
    height: 100%;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    padding-top: 5rem;
  `
  return (
    <Application>
      <Header />
      <Main>

      </Main>
    </Application>
  );
}

export default App;
