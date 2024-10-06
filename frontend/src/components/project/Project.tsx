import React from 'react';
import styled from 'styled-components'
import '../../App.css';
import Project from '../../recycle/Project';
import Heading from '../../recycle/Heading';


function Projects() {

    const Container = styled.div`
        width: 100%;
        margin-top: 10rem;
  `


    return (
        <Container>
            <Heading header>my projects</Heading>
            <Project image={require('../../assets/project1.png')} projectName='Project name' date='Aug2022' />
            <Project left largeSquare image={require('../../assets/project2.png')} projectName='Project name' date='May2022' />
            <Project image={require('../../assets/project1.png')} projectName='Project name' date='Aug2022' />
            <Project left largeSquare image={require('../../assets/project2.png')} projectName='Project name' date='May2022' />
        </Container>
    );
}

export default Projects;
