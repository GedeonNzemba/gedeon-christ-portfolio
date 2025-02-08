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
        padding: 0 2rem;

        @media (max-width: 1024px) {
            margin-top: 8rem;
            padding: 0 1.5rem;
        }

        @media (max-width: 768px) {
            flex-direction: column;
            align-items: center;
            margin-top: 6rem;
            padding: 0 1rem;
            gap: 6rem;
        }
  `
    const Section = styled.section<{ image?: boolean }>`
    position: relative;
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: center;

    @media (max-width: 1024px) {
        width: 45%;
    }

    @media (max-width: 768px) {
        width: 100%;
    }

    ${$props => $props.image &&
            css`
        position: relative;

        @media (max-width: 1024px) {
            &::after {
                font-size: 4.5rem;
                right: -1rem;
                top: -3rem;
            }
            &::before {
                font-size: 4.5rem;
                right: -1rem;
                top: 2rem;
            }
        }



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
            z-index: 2;

            @media (max-width: 1024px) {
                top: -8rem;
            }

            @media (max-width: 768px) {
                content: "About me";
                top: -6rem;
                left: 50%;
                transform: translate(-50%, -50%);
                padding: 0;
                right: 0;
                width: 100%;
                text-align: center;
                max-width: 100%;
            }

             @media (max-width: 660px) {
                font-size: 4.5rem;
             }

             @media (max-width: 450px) {
             font-size: 4rem;
             }
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
            z-index: 2;

             @media (max-width: 1024px) {
                top: -3rem;
            }

             @media (max-width: 768px) {
                display: none
             }
        }
    `}
  `
    const Image = styled.img`
    object-fit: contain;
    width: 30rem;
    height: 30rem;

    @media (max-width: 1024px) {
        width: 25rem;
        height: 25rem;
    }

    @media (max-width: 768px) {
        width: 20rem;
        height: 20rem;
    }
  `
    const Graphic = styled.img<{ ball?: boolean; object?: boolean; flash?: boolean }>`
   position: absolute;
    z-index: 1;

    ${$props => $props.ball &&
            css`
         bottom: 0;
         left: 25%;
         width: 8rem;
         height: 8rem;

         @media (max-width: 1024px) {
             width: 6rem;
             height: 6rem;
             left: 20%;
         }

         @media (max-width: 768px) {
             width: 4rem;
             height: 4rem;
             left: 10%;
             bottom: -2rem;
         }
    `}

    ${$props => $props.object &&
            css`
         bottom: 2rem;
         right: 0.5rem;

         @media (max-width: 1024px) {
             width: 18rem;
             bottom: -10rem;
         }

         @media (max-width: 768px) {
             width: 18rem;
             bottom: -10rem;
         }
    `}

    ${$props => $props.flash &&
            css`
         top: 0.5rem;
         right: 20%;

         @media (max-width: 1024px) {
         top: -20%;
         right: 20%;
             width: 4rem;
         }

         @media (max-width: 768px) {
             top: -20%;
         right: 20%;
             width: 4rem;
         }
    `}
  `
    const Text = styled.p`
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    color: #ffffff;
    word-wrap: break-word;
    line-height: 1.8rem;
    opacity: 0.5;
    width: 100%;
    max-width: 90%;

    @media (max-width: 1024px) {
        font-size: 1.05rem;
        line-height: 1.6rem;
    }

    @media (max-width: 768px) {
        max-width: 87%;
        text-align: center;
        font-size: 1.3rem;
        line-height: 2rem;
    }
  `
    const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 3rem;
    width: 100%;

    @media (max-width: 1024px) {
        row-gap: 2.5rem;
    }

    @media (max-width: 768px) {
        align-items: center;
        row-gap: 2rem;
        margin-top: 2rem;
    }
  `


    return (
        <Container id='about'>
            {/* LEFT SECTION */}
            <Section image>
                {/* IMAGE & BALL GRAPHIC IMAGE*/}
                <Image src={require('../../assets/about_us.png')} alt="about-me image" />
            </Section>

            {/* RIGHT SECTION */}
            <Section>
                {/* RIGHT FLASH GRAPHIC IMAGE */}
                <Graphic flash src={require('../../assets/about-me-right-flash.png')} alt="about-us right flash" />
                {/* CONTAINER FOR CONTENT TEXT & BUTTON */}
                <Wrapper>
                    {/* TEXT */}
                    <Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptatem itaque deserunt autem. Illum esse molestiae quia consectetur aut corporis eum. Fugit, quo mollitia alias quasi tempora delectus quaerat, officia explicabo aspernatur incidunt assumenda ducimus distinctio quia, enim veritatis dignissimos labore unde ea blanditiis veniam quibusdam. Quo voluptatem atque iusto numquam sint explicabo quia sit a laborum cupiditate qui dicta tempore perferendis, rerum facere esse nihil. Tempore praesentium odio animi optio hic, nam officiis dolor id laboriosam inventore excepturi itaque quisquam quia recusandae aliquam fuga incidunt? Assumenda temporibus velit alias, autem tempore cupiditate minus, dolores iusto molestias, deleniti veniam consequuntur.
                    </Text>

                    {/* BUTTON */}
                    <Button
                        backgroundColor="#b21eb2"
                        textColor="rgb(255, 255, 255)"
                        hoverBackgroundColor="#b21eb2"
                        hoverTextColor="rgba(255, 255, 255, 0.699)"
                        fontFamily="Source Code Pro, monospace"
                        fontWeight="bold"
                        margin
                        round
                        onClick={() => alert('Button clicked!')}
                    >
                        contact me
                    </Button>
                </Wrapper>

                {/* LITTLE DOTS GRAPHIC IMAGE */}
                <Graphic object src={require('../../assets/about-me-obj.png')} alt="graphic" />
            </Section>
        </Container>
    );
}

export default About;
