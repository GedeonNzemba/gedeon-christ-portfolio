import React from 'react';
import styled from 'styled-components';
import NavItem from '../navigation/NavItem';
import DarkMode from '../../darkmode/DarkMode';
import Button from '../../../recycle/Button';
import { IoMdClose } from 'react-icons/io';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const SidebarOverlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  transition: opacity 0.3s ease, visibility 0.3s ease;
  z-index: 999;
  display: none;

  @media (max-width: 1279px) {
    display: block;
  }
`;

const SidebarContainer = styled.aside<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: ${({ $isOpen }) => ($isOpen ? '0' : '-100%')};
  width: min(300px, 80vw);
  height: 100vh;
  background-color: rgba(19, 19, 19, 0.95);
  backdrop-filter: blur(10px);
  border-left: 1px solid rgba(115, 77, 239, 0.256);
  padding: 2rem;
  transition: right 0.3s ease-in-out;
  z-index: 1000;
  display: none;
  overflow-y: auto;

  @media (max-width: 1279px) {
    display: block;
  }

  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(178, 30, 178, 0.3);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(178, 30, 178, 0.5);
  }
`;

const CloseButton = styled.button`
  background: rgba(178, 30, 178, 0.2);
  border: none;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.5rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(178, 30, 178, 0.4);
    color: white;
  }
`;

const SidebarContent = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const NavItemWrapper = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  li {
    margin-left: 0 !important;
    font-size: 1.2rem !important;
  }
`;

const DarkModeWrapper = styled.div`
  padding: 1rem 1.5rem;
  border: 1px solid rgba(115, 77, 239, 0.256);
  border-radius: 25px;
`;

const ButtonWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
`;

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      <SidebarOverlay $isOpen={isOpen} onClick={onClose} />
      <SidebarContainer $isOpen={isOpen}>
        <CloseButton onClick={onClose}>
          <IoMdClose />
        </CloseButton>
        <SidebarContent>
          <NavItemWrapper>
            <NavItem />
          </NavItemWrapper>
          <DarkModeWrapper>
            <DarkMode />
          </DarkModeWrapper>
          <ButtonWrapper>
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
          </ButtonWrapper>
        </SidebarContent>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
