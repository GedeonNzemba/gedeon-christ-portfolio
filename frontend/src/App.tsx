import React from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    position: relative;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    width: 100%;
    min-height: 100vh;
    overflow-x: hidden;
  }
`;

function App() {

  const Application = styled.div`
    background-color: rgba(19,19,19,1);
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 100vh;
    overflow-x: hidden;
    position: relative;
  `

  return (
    <>
      <GlobalStyle />
      <Application>
        <Header />
        <Main />
      </Application>
    </>
  );
}

export default App;
