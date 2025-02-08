import React from 'react';
import styled from 'styled-components';
import { FaDiscord, FaTwitter, FaInstagram, FaFacebookF, FaYoutube, FaTelegramPlane } from 'react-icons/fa';
import FadingCircle from './Circle';
import { IconType } from 'react-icons';

// Types
interface SocialIcon {
  Icon: IconType;
  url: string;
}

interface FooterProps {
  name?: string;
  navigationLinks?: Array<{
    title: string;
    url: string;
  }>;
  socialIcons?: SocialIcon[];
  year?: number;
}

// Styled Components
const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 15rem;
  padding: 4rem 0 3rem;
  background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(178,30,178,0.05) 100%);
  overflow-x: hidden;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    margin-top: 10rem;
    padding: 3rem 0 2rem;
  }

  @media (max-width: 768px) {
    margin-top: 8rem;
    padding: 2.5rem 0 2rem;
  }

  @media (max-width: 480px) {
    margin-top: 6rem;
    padding: 2rem 0 1.5rem;
  }
`;

const TopFooter = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1200px;
  width: 90%;
  padding-bottom: 8rem;
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 4rem;
    padding-bottom: 4rem;
    width: 85%;
  }

  @media (max-width: 480px) {
    padding-bottom: 3rem;
    gap: 3rem;
    width: 90%;
  }
`;

const TopFooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 3.5rem;
`;

const TopFooterRight = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.2rem;
  max-width: 300px;

  @media (max-width: 1024px) {
    gap: 2rem;
  }

  @media (max-width: 768px) {
    gap: 1.8rem;
  }

  @media (max-width: 480px) {
    gap: 1.5rem;
    max-width: 280px;
  }

  @media (max-width: 360px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.2rem;
    max-width: 200px;
  }
`;

const FooterHeading = styled.h2`
  font-family: "Playfair Display", serif;
  font-weight: 900;
  font-size: clamp(3.5rem, 8vw, 8rem);
  color: rgb(255, 255, 255);
  line-height: 1;

  @media (max-width: 768px) {
    text-align: center;
    line-height: 1.2;
  }

  @media (max-width: 480px) {
    font-size: clamp(2.5rem, 7vw, 3.5rem);
  }
`;

const IconWrapper = styled.a`
  background-color: #b21eb2;
  color: rgb(0, 0, 0);
  width: clamp(50px, 8vw, 80px);
  height: clamp(50px, 8vw, 80px);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: transform 0.2s ease-in-out;

  svg {
    width: clamp(24px, 3vw, 48px);
    height: clamp(24px, 3vw, 48px);
  }

  &:hover {
    transform: scale(1.1);
  }
`;

const BottomFooter = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 1200px;
  width: 90%;
  border-top: 0.2rem solid #b21eb2;
  padding-top: 2rem;
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 85%;
    padding-top: 1.5rem;
  }

  @media (max-width: 480px) {
    width: 90%;
  }
`;

const BottomFooterTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const BottomFooterBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    justify-content: center;
    margin-top: 2rem;
  }

  @media (max-width: 480px) {
    gap: 1rem;
    margin-top: 1.5rem;
  }
`;

const FooterName = styled.h4`
  font-size: clamp(1.4rem, 2vw, 1.8rem);
  font-family: "Playfair Display", serif;
  color: rgb(255, 255, 255);
  line-height: 1.5;
  white-space: nowrap;

  @media (max-width: 768px) {
    text-align: center;
    margin-bottom: 1rem;
  }
`;

const Navigation = styled.nav`
  ul {
    list-style-type: none;
    display: flex;
    gap: 2.5rem;
    padding: 0;
    margin: 0;

    @media (max-width: 768px) {
      gap: 2rem;
      justify-content: center;
    }

    @media (max-width: 480px) {
      flex-wrap: wrap;
      gap: 1.5rem;
      justify-content: center;
    }

    @media (max-width: 360px) {
      gap: 1rem;
    }
  }
`;

const NavLink = styled.a`
  font-size: clamp(1rem, 1.5vw, 1.3rem);
  font-family: 'Rubik', sans-serif;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
  text-decoration: none;
  transition: color 0.2s ease-in-out;
  white-space: nowrap;

  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`;

const BottomLink = styled.a`
  font-size: clamp(0.9rem, 1.3vw, 1.3rem);
  font-family: 'Rubik', sans-serif;
  color: rgba(255, 255, 255, 0.302);
  line-height: 1.2;
  text-decoration: none;
  margin: 0 clamp(0.8rem, 1.5vw, 1.5rem);
  transition: color 0.2s ease-in-out;
  white-space: nowrap;

  &:hover {
    color: rgba(255, 255, 255, 0.5);
  }

  @media (max-width: 480px) {
    margin: 0 clamp(0.5rem, 1vw, 0.8rem);
  }
`;

// Default social icons configuration
const defaultSocialIcons: SocialIcon[] = [
  { Icon: FaDiscord, url: '#' },
  { Icon: FaTwitter, url: '#' },
  { Icon: FaInstagram, url: '#' },
  { Icon: FaFacebookF, url: '#' },
  { Icon: FaYoutube, url: '#' },
  { Icon: FaTelegramPlane, url: '#' }
];

// Default navigation links
const defaultNavLinks = [
  { title: 'Home', url: '#' },
  { title: 'Projects', url: '#' },
  { title: 'Blogs', url: '#' },
  { title: 'Contact', url: '#' }
];

const Footer: React.FC<FooterProps> = ({name = 'Gedeon Christ', navigationLinks = defaultNavLinks, socialIcons = defaultSocialIcons, year = new Date().getFullYear() }) => {
  return (
    <FooterContainer id='footer'>
      <TopFooter>
        <TopFooterLeft>
          <FooterHeading>Follow me</FooterHeading>
          <FadingCircle />
        </TopFooterLeft>

        <TopFooterRight>
          {socialIcons.map(({ Icon, url }, index) => (
            <IconWrapper href={url} key={index} target="_blank" rel="noopener noreferrer">
              <Icon size={48} />
            </IconWrapper>
          ))}
        </TopFooterRight>
      </TopFooter>

      <BottomFooter>
        <BottomFooterTop>
          <FooterName>{name}</FooterName>
          <Navigation>
            <ul>
              {navigationLinks.map(({ title, url }, index) => (
                <li key={index}>
                  <NavLink href={url}>{title}</NavLink>
                </li>
              ))}
            </ul>
          </Navigation>
        </BottomFooterTop>

        <BottomFooterBottom>
          <BottomLink href="#">&copy; {year} {name}. All rights reserved.</BottomLink>
          <BottomLink href="#">Terms of Use</BottomLink>
          <BottomLink href="#">Privacy Policy</BottomLink>
        </BottomFooterBottom>
      </BottomFooter>
    </FooterContainer>
  );
};

export default Footer;