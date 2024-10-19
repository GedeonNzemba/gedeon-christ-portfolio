import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import Heading from '../../recycle/Heading';
import Button from '../../recycle/Button';
import { blogs } from '../../data/data';
import Post from '../../recycle/Post';

interface BlogsProps {
}

const Container = styled.div`
    display: block;
    position: relative;
    margin-top: 10rem;
`

const Graphic = styled.img<{ x_outlined?: boolean; x?: boolean }>`
    position: absolute;
    z-index: 999;

    ${$props => $props.x_outlined &&
        css`
        top: 0;
        right: 5%;
        width: 3rem;
    `}

    ${$props => $props.x &&
        css`
        bottom: 0rem;
        right: 5%;
        width: 2rem;
    `}
    `

const InnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 5rem;
`


const Blogs: FC<BlogsProps> = ({ }) => {
    return (
        <Container>
            <Heading header>my blogs</Heading>

            <Graphic
                x_outlined
                src={require("../../assets/x_outline.png")}
                alt="x outlined icon"
            />

            <Graphic
                x
                src={require("../../assets/x_big.png")}
                alt="x icon"
            />


            <InnerContainer>
                <Button
                    textColor={'rgb(255, 255, 255)'}
                    backgroundColor={'rgb(178, 30, 178)'}
                    fontSize='1.2rem'
                    hoverTextColor={'#fff'}
                    fontFamily={"Rubik"}
                    fontWeight={'bold'}
                    textTransform='none !important'
                    padding='15px 50px !important'
                    round
                >
                    See all
                </Button>

                {blogs.map((post, index) => (
                    <Post img={post.image} title={post.title} text={post.text} link={post.link} key={index} />
                ))}

            </InnerContainer>
        </Container>
    );
};

export default Blogs;
