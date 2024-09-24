import React from 'react';
import styled from 'styled-components'
import '../../App.css';
import About from '../about/About';

function Main() {
  const Container = styled.main`
    display: block;
    background-image: url(${require('../../assets/back_blure.png')});
    height: 100%;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    padding-top: 5rem;
  `
  return (
      <Container>
        <About />
      </Container>
  );
}

export default Main;
