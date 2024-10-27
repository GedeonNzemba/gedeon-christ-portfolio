import React from 'react'
import styled, {css} from 'styled-components'
import Post from '../../recycle/Post'
import Button from '../../recycle/Button'
import Heading from '../../recycle/Heading'

interface BlogPost {
    id: number
    title: string
    description: string
    imageUrl: string
    link: string
}

const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "React Suspense and React.lazy by Example",
        description: "When apps start to grow you can easily end up including too many components making it heavier and slow to load. One of the solutions to this problem is Code-Splitting and Webpack is probably ...",
        imageUrl: require('../../assets/bog_img_1.png'),
        link: "#"
    },
    {
        id: 2,
        title: "Managing State with useReducer, useState",
        description: "When apps start to grow you can easily end up including too many components making it heavier and slow to load. One of the solutions to this problem is Code-Splitting and Webpack is probably ...",
        imageUrl: require('../../assets/blog_img_2.png'),
        link: "#"
    },
    {
        id: 3,
        title: "10 Things to Know About ES6 before Learning React JS",
        description: "When apps start to grow you can easily end up including too many components making it heavier and slow to load. One of the solutions to this problem is Code-Splitting and Webpack is probably ...",
        imageUrl: require('../../assets/blog_img_3.png'),
        link: "#"
    },
    {
        id: 4,
        title: "React Suspense and React.lazy by Example",
        description: "When apps start to grow you can easily end up including too many components making it heavier and slow to load. One of the solutions to this problem is Code-Splitting and Webpack is probably ...",
        imageUrl: require('../../assets/blog_img_4.png'),
        link: "#"
    }
]

const BlogSection = styled.div`
  color: white;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10rem;
  position: relative;
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  width: 100%;
`

const Title = styled.h1`
  font-size: 3rem;
  margin: 0 0 1rem 0;
`

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 5rem;
  max-width: 57%;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
const Graphic = styled.img<{x_outlined?: boolean; x?: boolean;}>`
position: absolute;
 z-index: 999;

 ${$props => $props.x_outlined && 
 css`
      top: 0;
      right: 10%;
      width: 8rem;
      height: 8rem;
 `}

 ${$props => $props.x && 
 css`
      bottom: 2rem;
      right: 20%;
 `}
`

const Blogs = () => {
    return (
        <BlogSection>
            <Header>
                {/* <Title>My blog</Title> */}
                <Heading header marginBottom>My blog</Heading>

                <Graphic x_outlined src={require('../../assets/x_outline.png')} alt="x outlined icon" />
                <Graphic x src={require('../../assets/x_big.png')} alt="x icon" />
               
            </Header>
            
            <br />
            <br />

            <BlogGrid>
                {blogPosts.map((post) => (
                    <Post
                        key={post.id}
                        id={post.id}
                        title={post.title}
                        imageUrl={post.imageUrl}
                        description={post.description}
                        link={post.link}
                    />
                ))}
            </BlogGrid>

            <br />
            <br />
            <br />
                <Button
                    backgroundColor="#b21eb2"
                    textColor="rgb(255, 255, 255)"
                    hoverBackgroundColor="#b21eb2"
                    hoverTextColor="rgba(255, 255, 255, 0.699)"
                    fontFamily="Source Code Pro, monospace"
                    fontWeight="bold"
                    round
                    alignSelf='left'
                    onClick={() => alert('Button clicked!')}
                >
                    See all
                </Button>
        </BlogSection>
    )
}

export default Blogs