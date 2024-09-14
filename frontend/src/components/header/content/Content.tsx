import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const Content = () => {

    const Container = styled.div`
        display: flex;
        width: 100%;
        height: 100vh;
        margin: 0;
        flex-direction: row;
        justify-content: center;
        position: absolute;
        top: 0;
        left: 0;
    `

    const Section = styled.section<{ $right?: boolean; }>`
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        height: auto;
        border: 1px solid red;

        ${$props => $props.$right &&
            css`
            /* background-color: #200931; */
            border: 1px solid blue;
        `}
    `

    const H3 = styled.h3`
        font-family: "Source Code Pro", monospace;
        font-weight: 500;
        font-size: 2rem;
        color: rgba(255, 255, 255, 0.7);
        text-transform: uppercase;
        line-height: 1.5rem;
        max-width: 60%;
        padding-left: 12rem;
        margin-bottom: 1.8rem;
    `
    const H1 = styled.h1`
        font-family: "Source Code Pro", monospace;
        font-weight: 900;
        font-size: 5rem;
        color: rgb(255, 255, 255);
        text-transform: capitalize;
        flex-wrap: wrap;
        max-width: 50%;
        line-height: 5rem;
        padding-left: 12rem;
    `

    const Wrapper = styled.div`
        border-left: 0.4rem  solid rgba(255, 255, 255, 0.7);
        padding-left: 1rem;
        max-width: 14rem;
        margin: 5rem 0 0 12rem;
    `
    const P = styled.p`
        font-family: "Source Code Pro", monospace;
        font-weight: 400;
        font-size: 1.2rem;
        color: rgb(255, 255, 255);
        line-height: 1.5rem;
    `
    const Graphic = styled.img<{ $dash?: boolean; $ball?: boolean; $person?: boolean; $leftCircle?: boolean; $rightCircle?: boolean; $smallBall?: boolean; $cvButton?: boolean; $xBig?: boolean; $xSmall?: boolean; $icon?: boolean }>`
        object-fit: contain;
        position: absolute;

        ${$props => $props.$dash &&
            css`
            width: 10rem;
            height: 15rem;
            top: 20rem;
            left: -4rem;
        `}

        ${$props => $props.$ball &&
            css`
            width: 35rem;
            height: 30rem;
            bottom: 15rem;
            right: 15rem;
            z-index: 9;
        `}

        ${$props => $props.$person &&
            css`
            width: 35rem;
            height: 30rem;
            bottom: 17.9rem;
            right: 15rem;
            z-index: 99;
        `}

        ${$props => $props.$leftCircle &&
            css`
            bottom: 17.9rem;
            right: 38.5%;
            z-index: 999;
            height: 25rem;
            border: 1px solid red;
        `}

        ${$props => $props.$rightCircle &&
            css`
            bottom: 20rem;
            right: 11%;
            z-index: 999;
            height: 25rem;
            border: 1px solid blue;
        `}

        ${$props => $props.$smallBall &&
            css`
            top: 20rem;
            right: 15%;
            z-index: 999;
        `}

        ${$props => $props.$cvButton &&
            css`
            top: 25rem;
            right: 40%;
            z-index: 999;
        `}

        ${$props => $props.$xBig &&
            css`
            top: 10rem;
            right: 45%;
            z-index: 999;
        `}

        ${$props => $props.$xSmall &&
            css`
            bottom: 43.5rem;
            right: 12%;
            z-index: 999;
        `}

        ${$props => $props.$icon &&
            css`
            width: auto;
            height: auto;
        `}
    `

    const IconContainer = styled.aside`
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: absolute;
        top: 30%;
        right: 0;
        border: 1px solid red;
        
    `
    const IconWrapper = styled.div`
        display: flex;
        width: 3rem;
        height: 3rem;
        justify-content: center;
        margin-bottom: 0.5rem;
        padding-right: 1rem;
    `

    return (
        <Container>
            <Section>
                <H3>full-stack web developer</H3>
                <H1>gedeon nzemba</H1>

                <Wrapper>
                    <P>I'm a full-stack web developer and I work remotely from South America.</P>
                </Wrapper>

                <Graphic $dash src={require('../../../assets/dash_left.png')} />
            </Section>

            <Section $right>

                <Graphic $ball src={require('../../../assets/circle_bg.png')} />
                <Graphic $person src={require('../../../assets/gedeon.png')} />

                <Graphic $leftCircle src={require('../../../assets/cure_line_right.png')} />
                <Graphic $rightCircle src={require('../../../assets/curve_line_left.png')} />

                <Graphic $smallBall src={require('../../../assets/ball_left.png')} />
                <Graphic $cvButton src={require('../../../assets/cv_button.png')} />

                <Graphic $xBig src={require('../../../assets/x_big.png')} />
                <Graphic $xSmall src={require('../../../assets/x_small.png')} />

                <IconContainer>
                    <IconWrapper>
                        <Graphic $icon src={require('../../../assets/icon1.png')} />
                    </IconWrapper>
                    <IconWrapper>
                        <Graphic $icon src={require('../../../assets/icon2.png')} />
                    </IconWrapper>
                    <IconWrapper>
                        <Graphic $icon src={require('../../../assets/icon3.png')} />
                    </IconWrapper>
                    <IconWrapper>
                        <Graphic $icon src={require('../../../assets/icon4.png')} />
                    </IconWrapper>
                    <IconWrapper>
                        <Graphic $icon src={require('../../../assets/icon5.png')} />
                    </IconWrapper>
                    <IconWrapper>
                        <Graphic $icon src={require('../../../assets/icon6.png')} />
                    </IconWrapper>
                </IconContainer>

            </Section>
        </Container>
    );
};

export default Content;
