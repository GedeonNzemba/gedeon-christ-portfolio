import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import Heading from './Heading';

interface PostProps {
    id: number;
    title: string;
    imageUrl: string;
    description: string;
    link: string
}

const BlogCard = styled.div`
  /* background-color: #2a2a2a; */
  border-radius: 10px;
  overflow: hidden;
`

const BlogImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`

const BlogContent = styled.div`
  padding: 1rem 0;
`

const BlogTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  font-family: "Rubik", sans-serif;
  font-weight: 600;
  color: #ffffffd9;
`

const BlogDescription = styled.p`
  font-size: 1rem;
  color: #aaa;
  margin-bottom: 2rem;
  line-height: 1.5rem;
  font-family: "Rubik", sans-serif;
  font-weight: 400;
`

const ReadMoreLink = styled.a`
  color: #b21eb2;
  text-decoration: none;
  font-family: "Rubik", sans-serif;
  font-weight: 600;
  font-size: 1.2rem;
`

const Post: FC<PostProps> = ({
    id,
    imageUrl,
    title,
    description,
    link
}) => {
    return (
        <BlogCard key={id}>
        <BlogImage src={imageUrl} alt={title} />
        <BlogContent>
          <BlogTitle>{title}</BlogTitle>
          <BlogDescription>{description}</BlogDescription>
          <ReadMoreLink href={link}>Read more &gt;&gt;</ReadMoreLink>
        </BlogContent>
      </BlogCard>
    );
};

export default Post;
