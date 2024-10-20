import React from 'react'
import styled from 'styled-components'
import { DiscIcon, TwitterIcon, InstagramIcon, FacebookIcon, YoutubeIcon, SendIcon } from 'lucide-react'

const Section = styled.section`
  /* background: linear-gradient(to bottom, #1a1a1a, #0a0a0a); */
  color: white;
  padding: 2rem;
  font-family: "Playfair Display", serif;
  margin-top: 10rem;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const Title = styled.h2`
  font-size: 4rem;
  margin-bottom: 1rem;
`

const Dots = styled.div`
  display: flex;
  margin-bottom: 1rem;
`

const Dot = styled.span`
  width: 8px;
  height: 8px;
  background-color: #8e44ad;
  border-radius: 50%;
  margin-right: 8px;
`

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`

const IconWrapper = styled.a`
  background-color: #8e44ad;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`

const Foot = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #333;
  padding-top: 1rem;
  font-size: 0.9rem;
`

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`

const NavLink = styled.a`
  color: #ccc;
  text-decoration: none;
  &:hover {
    color: white;
  }
`

const LegalLinks = styled.div`
  display: flex;
  gap: 1rem;
`

const Footer = () => {
  return (
    <Section>
      <Container>
        <Title>Follow me</Title>
        <Dots>
          {[...Array(15)].map((_, i) => (
            <Dot key={i} />
          ))}
        </Dots>
        <SocialIcons>
          <IconWrapper href="#discord"><DiscIcon size={24} /></IconWrapper>
          <IconWrapper href="#twitter"><TwitterIcon size={24} /></IconWrapper>
          <IconWrapper href="#instagram"><InstagramIcon size={24} /></IconWrapper>
          <IconWrapper href="#facebook"><FacebookIcon size={24} /></IconWrapper>
          <IconWrapper href="#youtube"><YoutubeIcon size={24} /></IconWrapper>
          <IconWrapper href="#telegram"><SendIcon size={24} /></IconWrapper>
        </SocialIcons>
        <Foot>
          <div>Gedeon Nzemba</div>
          <Nav>
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#blog">Blog</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </Nav>
          <LegalLinks>
            <NavLink href="#terms">Terms of Use</NavLink>
            <NavLink href="#privacy">Privacy Policy</NavLink>
          </LegalLinks>
        </Foot>
      </Container>
    </Section>
  )
}

export default Footer;