import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import Button from './Button';

interface PostProps {
    img: string;
    title: string;
    text: string;
    link: string
}

const Image = styled.img`
    object-fit: cover;
    width: 40rem;
    height: 30rem;
`;

const Title = styled.h3`
    font-size: 2rem;
    font-family: "Playfair Display", serif;
    color: rgb(255, 255, 255);
    line-height: 1.333;
    text-align: left;
`;

const Text = styled.p`
  font-size: 1.8rem;
  font-family: "Rubik";
  color: rgba(255, 255, 255, 0.6);
  text-align: left;
`;

const Container = styled.div`
    display: block;
`;

const InnerContainer = styled.div`
display: flex;
    flex-direction: column;
    row-gap: 2rem;
`;

const Link = styled.a`
    color: rgb(178, 30, 178);
    font-family: "Rubik";
    font-size: 1rem;
    font-weight: 400;
`

const Post: FC<PostProps> = ({
    img,
    title,
    text,
    link
}) => {
    return (
        <Container>
            <InnerContainer>
                <Image src={img} alt={title} />
                <Title>{title}</Title>
                <Text>{text}</Text>
                <Link href={link}>Read more &#10095; &#10095;</Link>
            </InnerContainer>
        </Container>
    );
};

export default Post;
