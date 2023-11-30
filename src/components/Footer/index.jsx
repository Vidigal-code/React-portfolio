import styled from 'styled-components';

import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import {useLanguage} from "../../utils/Language.jsx";
import {Bio} from '../../data/Info.jsx';
import {useThemeLight} from "../../utils/ThemeLight.jsx";
import {CgBriefcase} from "react-icons/cg";
import React from "react";


const SocialMediaIcons = styled.div`
  display: flex;
  justify-content: flex-start; 
  margin: 5px 10px;
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  margin: 15px;
  padding: 5px;
  color: ${(props) => (props.isDarkMode ? 'black' : 'white')};
  text-align: right;

  :hover {
    border: 1.8px solid ${({theme}) => theme.primary};
    color: ${({theme}) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({theme}) => theme.primary};
  }


  @media (max-width: 960px) {
    margin: 2px;
    text-align: center;
    font-size: 0.8rem;
  }

  @media (max-width: 640px) {
    font-size: 0.8rem;
    margin: 2px;
  }
`;

const SocialMediaIcon = styled.a`
  justify-content: center;
  display: flex;
  align-items: center;
  margin: 0 4px;
  cursor: pointer;
  border-radius: 2px;
  background: none;
  color: ${(props) => (props.isDarkMode ? 'black' : 'white')};
  text-decoration: none;
  box-shadow: none;
  text-align: center;

  padding: 8px 6px;
  font-weight: 250;
  font-size: 16px;
  transition: all 0.6s ease-in-out;


  :hover {
    border: 1.8px solid ${({theme}) => theme.primary};
    color: ${({theme}) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({theme}) => theme.primary};
  }

  @media (max-width: 960px) {
    margin: 0 0px;
  }

  @media (max-width: 640px) {
    margin: 0 0px;
  }
  
`;

export const Nav = styled.div`
  background-color: ${({theme}) => theme.card_footer};
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media (max-width: 960px) {
    trastion: 0.8s all ease;
    padding: 20px;
    height: 100%;
  }

  @media (max-width: 640px) {
    trastion: 0.8s all ease;
    padding: 20px;
    height: 100%;
  }
`;

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: 100%;
  z-index: 1;
`;


export const DIVText = styled.div`
  margin-left: 5px;
`;

function Footer() {
    const {selectedLanguage} = useLanguage();
    const {isDarkMode} = useThemeLight();

    return (
        <Nav>
            <FooterContainer>
                <SocialMediaIcons>
                    <SocialMediaIcon isDarkMode={isDarkMode} href={Bio[selectedLanguage].facebook} target="display"><FaFacebookSquare /></SocialMediaIcon>
                    <SocialMediaIcon isDarkMode={isDarkMode} href={Bio[selectedLanguage].twitter} target="display"><FaTwitterSquare /></SocialMediaIcon>
                    <SocialMediaIcon isDarkMode={isDarkMode} href={Bio[selectedLanguage].linkedin} target="display"><FaLinkedin /></SocialMediaIcon>
                    <SocialMediaIcon isDarkMode={isDarkMode} href={Bio[selectedLanguage].insta} target="display"><FaInstagram /></SocialMediaIcon>
                    <SocialMediaIcon isDarkMode={isDarkMode} href={Bio[selectedLanguage].ResumeLink}
                                     target="display"><CgBriefcase /><DIVText>{Bio[selectedLanguage].ResumeTitle}</DIVText></SocialMediaIcon>
                </SocialMediaIcons>
                <Copyright isDarkMode={isDarkMode} >
                    &copy; 2023 by Kauan Vidigal
                </Copyright>
            </FooterContainer>
        </Nav>
    );
}

export default Footer;