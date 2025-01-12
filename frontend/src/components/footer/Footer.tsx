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
  padding-bottom: 1.5rem;
`;

const TopFooter = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 80%;
  width: 100%;
  padding-bottom: 8rem;
`;

const TopFooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 3.5rem;
`;

const TopFooterRight = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 2.2rem;
`;

const FooterHeading = styled.h2`
  font-family: "Playfair Display", serif;
  font-weight: 900;
  font-size: 8rem;
  color: rgb(255, 255, 255);
  line-height: 0.786;
`;

const IconWrapper = styled.a`
  background-color: #b21eb2;
  color: rgb(0, 0, 0);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  text-decoration: none;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const BottomFooter = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 80%;
  width: 100%;
  border-top: 0.2rem solid #b21eb2;
`;

const BottomFooterTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const BottomFooterBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const FooterName = styled.h4`
  font-size: 1.8rem;
  font-family: "Playfair Display", serif;
  color: rgb(255, 255, 255);
  line-height: 3.667;
`;

const Navigation = styled.nav`
  ul {
    list-style-type: none;
    display: flex;
    gap: 2rem;
  }
`;

const NavLink = styled.a`
  font-size: 1.3rem;
  font-family: 'Rubik', sans-serif;
  color: rgba(255, 255, 255, 0.8);
  line-height: 3.667;
  text-decoration: none;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`;

const BottomLink = styled.a`
  font-size: 1.3rem;
  font-family: 'Rubik', sans-serif;
  color: rgba(255, 255, 255, 0.302);
  line-height: 1.2;
  text-decoration: none;
  margin: 0 1.5rem;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: rgba(255, 255, 255, 0.5);
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