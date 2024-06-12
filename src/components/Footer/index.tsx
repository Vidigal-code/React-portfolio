import styled, { keyframes } from "styled-components";

import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { useLanguage } from "../../utils/Language.jsx";
import { Bio } from "../../data/Info.js";
import { useThemeLight } from "../../utils/ThemeLight.jsx";
import { CgBriefcase } from "react-icons/cg";
import { useEffect, useState } from "react";
import { GoArrowUp } from "react-icons/go";

const SocialMediaIcons = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 5px 10px;
`;

const Copyright = styled.p<{ $isdarkmode: boolean }>`
  font-size: 0.9rem;
  margin: 15px;
  padding: 5px;
  color: ${({ $isdarkmode }) => ($isdarkmode ? "#000" : "#fff")};
  text-align: right;

  &:hover {
    border: 1.8px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
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

const SocialMediaIcon = styled.a<{ $isdarkmode: boolean }>`
  justify-content: center;
  display: flex;
  align-items: center;
  margin: 0 4px;
  cursor: pointer;
  border-radius: 2px;
  background: none;
  color: ${({ $isdarkmode }) => ($isdarkmode ? "#000" : "#fff")};
  text-decoration: none;
  box-shadow: none;
  text-align: center;

  padding: 8px 6px;
  font-weight: 250;
  font-size: 16px;
  transition: all 0.6s ease-in-out;

  &:hover {
    border: 1.8px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }

  @media (max-width: 960px) {
    margin: 0 0px;
  }

  @media (max-width: 640px) {
    margin: 0 0px;
  }
`;

export const Nav = styled.div`
  background-color: ${({ theme }) => theme.card_footer};
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

const bounceInTop = keyframes`
  0% {
    -webkit-transform: translateY(-500px);
            transform: translateY(-500px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    -webkit-transform: translateY(-65px);
            transform: translateY(-65px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  72% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  81% {
    -webkit-transform: translateY(-28px);
            transform: translateY(-28px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  90% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  95% {
    -webkit-transform: translateY(-8px);
            transform: translateY(-8px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
`;

const UpButton = styled.div<{ $isdarkmode: boolean; $showButton: boolean }>`
  position: fixed;
  right: 16px;
  bottom: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  margin: 2px 8px;
  border-radius: 4px;
  padding: 10px;
  background-color: ${({ $isdarkmode }) => ($isdarkmode ? "#fff" : "#000")};
  color: ${({ $isdarkmode }) => ($isdarkmode ? "#000" : "#fff")};
  cursor: pointer;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;
  border: 1.8px solid ${({ $isdarkmode }) => ($isdarkmode ? "#000" : "#fff")};
  z-index: 1000;
  opacity: ${({ $showButton }) => ($showButton ? 1 : 0)};
  visibility: ${({ $showButton }) => ($showButton ? "visible" : "hidden")};

  &.upButtonAnimation {
    animation: ${bounceInTop} 1.1s ease-in both;
  }

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
    height: 45px;
    width: 45px;
  }

  @media screen and (max-width: 768px) {
    padding: 10px 16px;
    background-color: ${({ $isdarkmode }) => ($isdarkmode ? "#fff" : "#000")};
    color: ${({ $isdarkmode }) => ($isdarkmode ? "#000" : "#fff")};
    &:hover {
      background: ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.white};
    }
    width: max-content;
    font-size: 14px;
    right: 16px;
    bottom: 120px;
  }
`;

function Footer() {
  const { selectedLanguage } = useLanguage();
  const selectedBio = Bio[selectedLanguage as keyof typeof Bio];
  const { isDarkMode } = useThemeLight();
  const [showButton, setShowButton] = useState(false);

  const handleButtonClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        document.documentElement.scrollTop + window.innerHeight >=
        document.documentElement.scrollHeight - 100
      ) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <UpButton
        onClick={handleButtonClick}
        $isdarkmode={isDarkMode}
        $showButton={showButton}
        className={showButton ? "upButtonAnimation" : ""}
      >
        <GoArrowUp />
      </UpButton>
      <Nav>
        <FooterContainer>
          <SocialMediaIcons>
            <SocialMediaIcon
              $isdarkmode={isDarkMode}
              href={selectedBio?.facebook}
              target="display"
            >
              <FaFacebookSquare />
            </SocialMediaIcon>
            <SocialMediaIcon
              $isdarkmode={isDarkMode}
              href={selectedBio?.twitter}
              target="display"
            >
              <FaTwitterSquare />
            </SocialMediaIcon>
            <SocialMediaIcon
              $isdarkmode={isDarkMode}
              href={selectedBio?.linkedin}
              target="display"
            >
              <FaLinkedin />
            </SocialMediaIcon>
            <SocialMediaIcon
              $isdarkmode={isDarkMode}
              href={selectedBio?.insta}
              target="display"
            >
              <FaInstagram />
            </SocialMediaIcon>
            <SocialMediaIcon
              $isdarkmode={isDarkMode}
              href={selectedBio?.ResumeLink}
              target="display"
            >
              <CgBriefcase />
              <DIVText>{selectedBio?.ResumeTitle}</DIVText>
            </SocialMediaIcon>
          </SocialMediaIcons>
          <Copyright $isdarkmode={isDarkMode}>
            &copy; 2023 by Kauan Vidigal
          </Copyright>
        </FooterContainer>
      </Nav>
    </>
  );
}

export default Footer;
