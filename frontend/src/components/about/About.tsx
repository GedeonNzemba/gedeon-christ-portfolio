import React from 'react';
import styled, { css } from 'styled-components'
import '../../App.css';
import Button from '../../recycle/Button';


function About() {

    const Container = styled.div`
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 10rem;
  `
  const Section = styled.section<{image?: boolean}>`
    position: relative;
    border: 1px solid red;
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: center;

    ${$props => $props.image && 
    css`
        position: relative;
        border: 1px solid blue;

        &::after {
            content: "About";
            position: absolute;
            right: 6rem;
            top: 0;
            font-family: "Playfair Display", serif;
            font-weight: 900;
            font-size: 5.5rem;
            color: rgb(255, 255, 255);
            flex-wrap: wrap;
            max-width: 50%;
            line-height: 5rem;
            padding-left: 12rem;
        }

        &::before {
            content: "me";
            position: absolute;
            right: 6rem;
            top: 4.5rem;
            font-family: "Playfair Display", serif;
            font-weight: 900;
            font-size: 5.5rem;
            color: rgb(255, 255, 255);
            flex-wrap: wrap;
            max-width: 50%;
            line-height: 5rem;
            padding-left: 12rem;
        }
    `}
  `
  const Image = styled.img`
    object-fit: contain;
    width: 30rem;
    height: 30rem;
  `
  const Graphic = styled.img<{ball?: boolean; object?: boolean; flash?: boolean}>`
   position: absolute;
    z-index: 999;

    ${$props => $props.ball && 
    css`
         bottom: 0;
         left: 25%;
         width: 8rem;
         height: 8rem;
    `}

    ${$props => $props.object && 
    css`
         bottom: 2rem;
         right: 0.5rem;
    `}

    ${$props => $props.flash && 
    css`
         top: 0.5rem;
         right: 20%;
    `}
  `
  const Text = styled.p`
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    color: #ffffff;
    word-wrap: break-word;
    line-height: 1.5rem;
    opacity: 0.5;
    width: 100%;
    max-width: 80%;
  `
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 3rem;
  `


    return (
        <Container>
            <Section image>
                <Image src={require('../../assets/about-me-image.png')} alt="about-me image" />
                <Graphic ball src={require('../../assets/about-me-ball.png')} alt="graphic" />
            </Section>

            <Section>
                <Graphic flash src={require('../../assets/about-me-right-flash.png')} alt="about-us right flash" />
               <Wrapper>
               <Text>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptatem itaque deserunt autem. Illum esse molestiae quia consectetur aut corporis eum. Fugit, quo mollitia alias quasi tempora delectus quaerat, officia explicabo aspernatur incidunt assumenda ducimus distinctio quia, enim veritatis dignissimos labore unde ea blanditiis veniam quibusdam. Quo voluptatem atque iusto numquam sint explicabo quia sit a laborum cupiditate qui dicta tempore perferendis, rerum facere esse nihil. Tempore praesentium odio animi optio hic, nam officiis dolor id laboriosam inventore excepturi itaque quisquam quia recusandae aliquam fuga incidunt? Assumenda temporibus velit alias, autem tempore cupiditate minus, dolores iusto molestias, deleniti veniam consequuntur.
                </Text>
                <Button
                    backgroundColor="#b21eb2"
                    textColor="rgb(255, 255, 255)"
                    hoverBackgroundColor="#b21eb2"
                    hoverTextColor="rgba(255, 255, 255, 0.699)"
                    fontFamily="Source Code Pro, monospace"
                    fontWeight="bold"
                    round
                    onClick={() => alert('Button clicked!')}
                >
                    contact me
                </Button>
               </Wrapper>
                <Graphic object src={require('../../assets/about-me-obj.png')} alt="graphic" />
            </Section>
        </Container>
    );
}

export default About;
