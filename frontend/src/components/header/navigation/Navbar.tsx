import React, { useState } from "react";
import styled, { css } from "styled-components";
import "../../../App.css";
import Switch from "../../../recycle/Switcher";
import Button from "../../../recycle/Button";
import NavItem from "./NavItem";
import DarkMode from "../../darkmode/DarkMode";
import Sidebar from "../responsive/Sidebar";
import { RiMenu3Line } from 'react-icons/ri';

function Navbar() {
  const [isOn, setIsOn] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const Container = styled.nav`
    border-style: solid;
    border-width: 1px;
    border-color: rgba(115, 77, 239, 0.256);
    background-color: rgba(19, 19, 19, 0.6);
    padding: 1rem 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 90%;
    margin: 0 auto;
    position: fixed;
    top: 0.5rem;
    left: 0;
    right: 0;
    border-radius: 2.5rem;
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

  const DesktopMenu = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;

    @media (max-width: 1279px) {
      display: none;
    }
  `;

  const MobileMenuButton = styled.button`
    display: none;
    background: none;
    border: none;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    padding: 0.5rem;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.8;
    }

    @media (max-width: 1279px) {
      display: block;
    }
  `;

  const RightSection = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
  `;

  const Anchor = styled.a`
    text-decoration: none;
    color: inherit;
  `;

  return (
    <>
      <Container>
        {/* logo */}
        <Brand>
          <BrandTitle>Gedeon Nzemba</BrandTitle>
        </Brand>

        {/* Desktop Menu */}
        <DesktopMenu>
          <NavItem />
          <DarkMode />
        </DesktopMenu>

        <RightSection>
          <Button
            backgroundColor="rgba(178, 30, 178, 0.2)"
            textColor="rgba(255, 255, 255, 0.699)"
            hoverBackgroundColor="#b21eb2"
            hoverTextColor="#ffffff"
            fontFamily="Source Code Pro, monospace"
            fontWeight="bold"
            round
          >
            <Anchor href="#contact">contact me</Anchor>
          </Button>

          {/* Mobile Menu Button */}
          <MobileMenuButton onClick={() => setIsSidebarOpen(true)}>
            <RiMenu3Line />
          </MobileMenuButton>
        </RightSection>
      </Container>

      {/* Mobile Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
}

export default Navbar;
