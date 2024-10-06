import React from 'react';
import styled from 'styled-components'
import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';

function App() {

  const Application = styled.div`
    background-color: rgba(19,19,19,1);
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    height: 800vh;
  `

  return (
    <Application>
      <Header />
      <Main />
    </Application>
  );
}

export default App;
