import React, { useState } from "react";
import styled, { css } from "styled-components";
import "../../../App.css";
import Switch from "../../../recycle/Switcher";
import Button from "../../../recycle/Button";
import NavItem from "./NavItem";
import DarkMode from "../../darkmode/DarkMode";

function Navbar() {
  const [isOn, setIsOn] = useState(false);

  const Container = styled.nav`
    border-style: solid;
    border-width: 1px;
    border-color: rgba(115, 77, 239, 0.256);
    background-color: rgba(19, 19, 19, 0.6);
    padding: 1rem 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
    max-width: 90%;
    margin: 0 auto;
    position: fixed;
    top: 0.5rem;
    left: 0;
    right: 0;
    border-radius: 2.5rem;
    align-items: center;
    z-index: 999;
  `;

  const Brand = styled.section`
    display: block;
    line-height: 20px;
  `;

  const BrandTitle = styled.h4`
    font-family: "Source Code Pro", monospace;
    font-weight: 500;
    font-size: 1.4rem;
    color: #fff;
  `;

  return (
    <Container>
      {/* logo */}
      <Brand>
        <BrandTitle>Gedeon Nzemba</BrandTitle>
      </Brand>

      {/* menu */}
      <NavItem />

      {/* DARK MODE */}
      <DarkMode />

      <Button
        backgroundColor="rgba(178, 30, 178, 0.2)"
        textColor="rgba(255, 255, 255, 0.699)"
        hoverBackgroundColor="#b21eb2"
        hoverTextColor="#ffffff"
        fontFamily="Source Code Pro, monospace"
        fontWeight="bold"
        round
        onClick={() => alert('Button clicked!')}
      >
        contact me
      </Button>
    </Container>
  );
}

export default Navbar;
