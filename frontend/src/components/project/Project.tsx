import React from "react";
import styled, { css } from "styled-components";
import "../../App.css";
import Project from "../../recycle/Project";
import Heading from "../../recycle/Heading";
import Button from "../../recycle/Button";

function Projects() {
    const Container = styled.div`
    position: relative;
    width: 100%;
    margin-top: 10rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `;
    const Graphic = styled.img<{path?: boolean; path_b?: boolean; verticalFlash?: boolean; x?: boolean; xx?: boolean}>`
    position: absolute;
    z-index: 999;

    ${$props => $props.x && 
    css`
        top: 7rem;
        right: 5%;
        width: 3rem;
    `}

    ${$props => $props.xx && 
    css`
        top: 83rem;
        left: 10rem;
        width: 2rem;
    `}

    ${$props => $props.path && 
    css`
         top: 40rem;
         left: 16%;
         width: 20rem;
    `}

    ${$props => $props.path_b && 
    css`
         top: 90rem;
    right: 5%;
    width: 6rem;
    object-fit: contain;
    `}

    ${$props => $props.verticalFlash && 
    css`
         top: 50rem;
    left: 20rem;
    width: 3rem;

    `}

  `;


    return (
        <Container>
            <Heading header>my projects</Heading>
            {/* X ICON */}
            <Graphic
                x
                src={require("../../assets/x_big.png")}
                alt="x icon"
            />

             {/* X small ICON */}
             <Graphic
                xx
                src={require("../../assets/x_small.png")}
                alt="x small icon"
            />

            {/* Path ICON */}
            <Graphic
                path
                src={require("../../assets/path.png")}
                alt="path icon"
            />

            <Graphic
                path_b
                src={require("../../assets/path_b.png")}
                alt="path icon"
            />

            {/* vertical flash ICON */}
            <Graphic
                verticalFlash
                src={require("../../assets/vertical flash.png")}
                alt="vertical flash icon"
            />

            <Project
                image={require("../../assets/project1.png")}
                projectName="Project name"
                date="Aug2022"
            />
            <Project
                left
                largeSquare
                image={require("../../assets/project2.png")}
                projectName="Project name"
                date="May2022"
            />
            <Project
                image={require("../../assets/project1.png")}
                projectName="Project name"
                date="Aug2022"
            />
            <Project
                left
                largeSquare
                image={require("../../assets/project2.png")}
                projectName="Project name"
                date="May2022"
            />

            <Button
            backgroundColor="unset"
            textColor={ "rgb(178, 30, 178)"}
            fontFamily={"Rubik"}
            fontWeight={400}
            fontSize="1.5rem"
            textTransform="normal"
            alignSelf="center"
            >
                See more projects &#10095; &#10095;
            </Button>
        </Container>
    );
}

export default Projects;
