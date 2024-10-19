import React, { FC } from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps {
    backgroundColor?: string;
    textColor: string;
    hoverBackgroundColor?: string;
    hoverTextColor?: string;
    fontFamily?: string;
    round?: boolean;
    fontWeight?: string | number;
    fontSize?: string;
    alignSelf?: string;
    padding?: string;
    textTransform?: string;
    onClick?: () => void;
    children: React.ReactNode;
}

const StyledButton = styled.button<ButtonProps>`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.textColor};
  font-family: ${(props) => props.fontFamily};
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  align-self: ${(props) => props.alignSelf};
  padding: ${(props) => props.padding};
  text-transform: ${(props) => props.textTransform};
  border: none;
  padding: 10px 20px;
  height: fit-content;
  width: fit-content;
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
    fontSize,
    textTransform,
    alignSelf,
    padding,
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
            textTransform={textTransform}
            fontSize={fontSize}
            alignSelf={alignSelf}
            padding={padding}
            round={round}
            onClick={onClick}
        >
            {children}
        </StyledButton>
    );
};

export default Button;
