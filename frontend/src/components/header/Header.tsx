import React from 'react';
import styled from 'styled-components'
import '../../App.css';
import Navbar from './navigation/Navbar';
import Content from './content/Content';

function Header() {

    const Header = styled.header`
    background: rgb(19,19,19);
    /* background: linear-gradient(139deg, rgba(19,19,19,1) 44%, rgba(115,77,239,1) 70%, rgba(178,30,178,1) 100%); */
    position: relative;
    height: 100vh;
  `

    const Box = styled.img`
    width: 50%;
    height: 100%;
    float: right;
  `

    const BoxTransparent = styled.img`
    width: 25%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 50%;
    z-index: 9;
`


    return (
        <Header id="home">
            <Navbar />
            <Box src={require('../../assets/Vector Smart Object.png')} />
            <BoxTransparent src={require('../../assets/bg_background.png')} />
            <Content />
        </Header>
    );
}

export default Header;
