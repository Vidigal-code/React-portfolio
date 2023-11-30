import React from 'react'
import PerfilBgAnimation from '../PerfilAnimation'
import {
    PerfilContainer,
    PerfilBg,
    PerflLeftContainer,
    Img,
    PerfilRightContainer,
    PerfilInnerContainer,
    TextLoop,
    Title,
    Span,
    SubTitle,
    PLocation, PSubTitle
} from './PerfilStyle.jsx'
import Photo from '../../images/home.gif'

import Typewriter from 'typewriter-effect';
import {Bio} from '../../data/Info.jsx';
import {useLanguage} from '../../utils/Language.jsx';
import styled from "styled-components";
import {useThemeLight} from "../../utils/ThemeLight.jsx";

import { FaLinkedin } from "react-icons/fa";
import {CgBriefcase} from "react-icons/cg";

const SocialMediaIcon = styled.a`
  justify-content: center;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 2px;
  background: none;
  color: white;
  text-decoration: none;
  box-shadow: none;
  text-align: center;

  padding: 10px;
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
`;

const SocialMediaIcons = styled.a`
  justify-content: center;
  align-items: center;
  display: flex;
  border-radius: 2px;
  max-width: 180px;
  height: 65px;
  margin: 20px;
  padding: 15px;
  background: black;

  @media (max-width: 960px) {
    padding: 25px;
    margin: 50px;
  }

  @media (max-width: 640px) {
    padding: 25px;
    margin: 50px;
  }
`;


export const DIVText = styled.div`
  margin-left: 5px;
`;


const PerfilSection = () => {
    const {selectedLanguage} = useLanguage();
    const {isDarkMode} = useThemeLight();

    return (
        <PerfilContainer id="home">

            <PerfilBg>
                <PerfilBgAnimation/>
            </PerfilBg>

            <PerfilInnerContainer>

                <PerflLeftContainer id="Left">
                    <Title>{Bio[selectedLanguage].name}</Title>
                    <PSubTitle>{Bio[selectedLanguage].functions}</PSubTitle>
                    <TextLoop>
                        <Span>
                            <Typewriter
                                options={{
                                    strings: Bio[selectedLanguage].roles,
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </Span>
                    </TextLoop>
                    <PLocation>{Bio[selectedLanguage].location.countries}</PLocation>
                    <SubTitle> <br/>{Bio[selectedLanguage].description}</SubTitle>

                    <SocialMediaIcons>
                        <SocialMediaIcon isDarkMode={isDarkMode} href={Bio[selectedLanguage].linkedin}
                                         target="display"><FaLinkedin
                            style={{
                                cursor: "pointer",
                                width: '20px',
                                height: '20px',
                            }}
                        /></SocialMediaIcon>
                        <SocialMediaIcon isDarkMode={isDarkMode} href={Bio[selectedLanguage].ResumeLink}
                                         target="display"><CgBriefcase /><DIVText>{Bio[selectedLanguage].ResumeTitle}</DIVText></SocialMediaIcon>
                    </SocialMediaIcons>

                </PerflLeftContainer>


                <PerfilRightContainer id="Right">
                    <Img src={Photo} alt="Vidigal"/>
                </PerfilRightContainer>


            </PerfilInnerContainer>
        </PerfilContainer>
    )
}

export default PerfilSection