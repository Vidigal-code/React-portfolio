import PerfilBgAnimation from "../PerfilAnimation/index.tsx";
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
  PLocation,
  PSubTitle,
} from "./PerfilStyle.tsx";
import Typewriter from "typewriter-effect";
import { Bio } from "../../data/Info.tsx";
import { useLanguage } from "../../utils/Language.tsx";
import { useThemeLight } from "../../utils/ThemeLight.tsx";
import { FaLinkedin } from "react-icons/fa";
import { CgBriefcase } from "react-icons/cg";
import styled from "styled-components";

const SocialMediaIcon = styled.a<{ $isdarkmode: boolean }>`
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

  &:hover {
    border: 1.8px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

const SocialMediaIcons = styled.div`
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

export const PerfilSection = () => {
  const { selectedLanguage } = useLanguage();
  const selectedBio = Bio[selectedLanguage as keyof typeof Bio];
  const { isDarkMode } = useThemeLight();

  return (
    <PerfilContainer id="home">
      <PerfilBg>
        <PerfilBgAnimation />
      </PerfilBg>

      <PerfilInnerContainer>
        <PerflLeftContainer id="Left">
          <Title>{selectedBio?.name}</Title>
          <PSubTitle>{selectedBio?.functions}</PSubTitle>
          <TextLoop>
            <Span>
              <Typewriter
                options={{
                  strings: selectedBio?.roles,
                  autoStart: true,
                  loop: true,
                }}
              />
            </Span>
          </TextLoop>
          <PLocation>{selectedBio?.location.countries}</PLocation>
          <SubTitle>
            {" "}
            <br />
            {selectedBio?.description}
          </SubTitle>

          <SocialMediaIcons>
            <SocialMediaIcon
              target="display"
              href={selectedBio?.linkedin}
              $isdarkmode={isDarkMode}
            >
              <FaLinkedin
                style={{
                  cursor: "pointer",
                  width: "20px",
                  height: "20px",
                }}
              />
            </SocialMediaIcon>
            <SocialMediaIcon
              href={selectedBio?.ResumeLink}
              target="display"
              $isdarkmode={isDarkMode}
            >
              <CgBriefcase />
              <DIVText>{selectedBio?.ResumeTitle}</DIVText>
            </SocialMediaIcon>
          </SocialMediaIcons>
        </PerflLeftContainer>

        <PerfilRightContainer id="Right">
          <Img src={selectedBio?.homelinkimg} alt="Vidigal" />
        </PerfilRightContainer>
      </PerfilInnerContainer>
    </PerfilContainer>
  );
};

export default PerfilSection;
