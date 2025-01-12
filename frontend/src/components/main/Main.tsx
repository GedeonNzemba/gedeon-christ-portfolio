import React, { useEffect } from 'react';
import styled from 'styled-components'
import '../../App.css';
import About from '../about/About';
import MySkills from '../skills/MySkills';
import Project from '../project/Project';
import Blogs from '../blogs/Blogs';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';

function Main() {
  const Container = styled.main`
    display: block;
    background-image: url(${require('../../assets/back_blure.png')});
    height: 100%;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    padding-top: 5rem;

    /* Add scroll padding to account for fixed navbar */
    scroll-padding-top: 7rem;
    scroll-behavior: smooth;

    /* Target all sections with IDs */
    > section[id],
    > div[id],
    > form[id],
    > footer[id] {
      scroll-margin-top: 7rem;
    }
  `

  useEffect(() => {
    // Add smooth scroll behavior to the html element
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <Container>
      <About />
      <MySkills />
      <Project />
      <Blogs />
      <Contact />
      <Footer />
    </Container>
  );
}

export default Main;
