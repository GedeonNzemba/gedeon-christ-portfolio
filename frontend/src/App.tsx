import React from 'react';
import styled from 'styled-components'
import './App.css';
import Header from './components/header/Header';

function App() {

  const Application = styled.div`
    background-color: #e7e7e7;
    height: 200vh;
  `
  return (
    <Application>
      <Header />
    </Application>
  );
}

export default App;
