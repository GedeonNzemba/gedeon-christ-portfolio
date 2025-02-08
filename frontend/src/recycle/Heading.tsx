import React, { FC } from 'react';
import styled, { css } from 'styled-components';

interface HeadingProps {
    header?: boolean;
    title?: boolean;
    subtitle?: boolean;
    marginBottom?: boolean;
    children: React.ReactNode;
}

const Text = styled.div<HeadingProps>`
    font-size: 7rem;
    font-family: "Playfair Display", serif;
    color: rgb(255, 255, 255);
    line-height: 0.786;
    /* -moz-transform: matrix( 1.76813834581203,0,0,1.73473868703112,0,0);
    -webkit-transform: matrix( 1.76813834581203,0,0,1.73473868703112,0,0);
    -ms-transform: matrix( 1.76813834581203,0,0,1.73473868703112,0,0); */
    z-index: 100;
    letter-spacing: 0.2rem;

    ${$props => $props.header && 
    css`
        text-align: center;
        text-transform: capitalize;
        font-weight: 800;
        margin-bottom: ${(props) => $props.marginBottom ? '3rem' : '10rem'};

        @media (max-width: 599px) {
            font-size: clamp(3rem, 10vw, 6rem);
        }
    `}

  ${$props => $props.title && 
    css`
        font-size: 3.5rem;
        line-height: 1.5;
        font-weight: 700;

        @media (max-width: 599px) {
            font-size: clamp(2rem, 6vw, 3.5rem);
        }
    `}

    ${$props => $props.subtitle && 
    css`
        font-size: 2.8rem;
        line-height: 1;
        font-weight: 400;
        color: #a5a5a5;

         @media (max-width: 599px) {
            font-size: clamp(1.8rem, 5vw, 2.8rem);
        }
    `}
`;

const Heading: FC<HeadingProps> = ({
    header,
    title,
    subtitle,
    marginBottom,
    children
}) => {
    return (
        <Text header={header} title={title} subtitle={subtitle} marginBottom={marginBottom}>{children}</Text>
    );
};

export default Heading;
