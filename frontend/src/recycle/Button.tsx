import React, { FC } from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps {
    backgroundColor: string;
    textColor: string;
    hoverBackgroundColor: string;
    hoverTextColor: string;
    fontFamily: string;
    round?: boolean;
    fontWeight: string | number;
    onClick?: () => void;
    children: React.ReactNode;
}

const StyledButton = styled.button<ButtonProps>`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.textColor};
  font-family: ${(props) => props.fontFamily};
  font-weight: ${(props) => props.fontWeight};
  border: none;
  padding: 10px 20px;
  text-transform: capitalize;
  cursor: pointer;
  transition: all 0.3s ease;

  ${$props => $props.round && 
    css`
        border-radius: 5rem;
    `}

  &:hover {
    background-color: ${(props) => props.hoverBackgroundColor};
    color: ${(props) => props.hoverTextColor};
  }
`;

const Button: FC<ButtonProps> = ({
    backgroundColor,
    textColor,
    hoverBackgroundColor,
    hoverTextColor,
    fontFamily,
    fontWeight,
    round,
    onClick,
    children,
}) => {
    return (
        <StyledButton
            backgroundColor={backgroundColor}
            textColor={textColor}
            hoverBackgroundColor={hoverBackgroundColor}
            hoverTextColor={hoverTextColor}
            fontFamily={fontFamily}
            fontWeight={fontWeight}
            round={round}
            onClick={onClick}
        >
            {children}
        </StyledButton>
    );
};

export default Button;
