import React from 'react';
import styled, { css } from 'styled-components'
import '../../App.css';
import Indicator, { isWholeNumberZeroToEleven } from './Indicator';

function MySkills() {

    const MySkillsContainer = styled.div`
        display: block;
        margin-top: 20rem;
        margin-bottom: 20rem;
    `

    const Container = styled.div<{skills?: boolean}>`
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        ${$props => $props.skills &&
        css`
        margin-top: 8rem;
        margin-bottom: unset;
            justify-content: center;
        `}
    `
    const Wrapper = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    `
    const Section = styled.section<{skills?: boolean}>`
        position: relative;
        width: 50%;
        display: flex;
        flex-direction: row;
        justify-content: center;

        ${$props => $props.skills &&
        css`
            width: auto;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            column-gap: 3rem;
            row-gap: 2.5rem;
        `}
    `
    const TextWrapper = styled.div`
     display: block;
    `
    const Text = styled.h3<{ skill?: boolean }>`
     font-family: "Playfair Display", serif;
            font-weight: 900;
            font-size: 5.5rem;
            color: rgb(255, 255, 255);
            line-height: 5rem;
            text-transform: initial;

            ${$props => $props.skill &&
            css`
    font-family: 'Rubik', sans-serif;
         font-weight: 400;
            font-size: 1.4rem;
            color: rgb(255, 255, 255);
            flex-wrap: unset;
            max-width: none;
            line-height: 1rem;
            /* text-transform: uppercase; */
    `}
    `
    const SkillsContainer = styled.div`
     display: flex;
     flex-direction: row;
     justify-content: space-between;
     row-gap: 5rem;
     column-gap: 2rem;
     align-items: center;
    `
    const Graphic = styled.img`
    object-fit: contain;
     width: 30rem;
    `
    const SkillsIndicator = styled.div`
     
    `
    const data = [
        {
            skillName: 'CSS',
            skillRating: 9
        },
        {
            skillName: 'Tailwind',
            skillRating: 5
        },
        {
            skillName: 'Javascript',
            skillRating: 9
        },
        {
            skillName: 'Angular',
            skillRating: 4
        },
        {
            skillName: 'Laravel',
            skillRating: 3
        },
        {
            skillName: 'React',
            skillRating: 9
        },
        {
            skillName: 'Ruby/Rails',
            skillRating: 7
        },
        {
            skillName: 'Node.js',
            skillRating: 6
        }
    ]

    return (
        <MySkillsContainer>
            <Container>
                <Section>
                    <Wrapper>
                        <TextWrapper>
                            <Text>My skills</Text>
                        </TextWrapper>

                        {/* <SkillsContainer>
                            <TextWrapper>
                                <Text skill>html</Text>
                            </TextWrapper>

                            <SkillsIndicator>
                                <Indicator iterate={9} />
                            </SkillsIndicator>
                        </SkillsContainer> */}
                    </Wrapper>
                </Section>

                <Section>
                    <Wrapper>
                        <Graphic src={require('../../assets/my-skills-flash.png')} alt="my skills right indicator" />

                        {/* <SkillsContainer>
                            <TextWrapper>
                                <Text skill>css</Text>
                            </TextWrapper>

                            <SkillsIndicator>
                                <Indicator iterate={4} />
                            </SkillsIndicator>
                        </SkillsContainer> */}
                    </Wrapper>
                </Section>
            </Container>

            <Container skills>
                <Section skills>
                    {data.map((item, index) => {

                        if (!isWholeNumberZeroToEleven(item.skillRating)) {
                            console.error(`Invalid skillRating: ${item.skillRating}`);
                            return null; // or handle the error in some other way
                        }

                        return (
                            <SkillsContainer key={index}>
                                <TextWrapper>
                                    <Text skill>{item.skillName}</Text>
                                </TextWrapper>

                                <SkillsIndicator>
                                    <Indicator iterate={item.skillRating} />
                                </SkillsIndicator>
                            </SkillsContainer>
                        )
                    })}
                </Section>
            </Container>
        </MySkillsContainer>
    );
}

export default MySkills;
