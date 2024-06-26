import styled from "styled-components";
import { Bio } from "../../data/Info.tsx";
import { useLanguage } from "../../utils/Language.tsx";
import { useThemeLight } from "../../utils/ThemeLight";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const AboutContainer = styled.div<{ $isdarkmode: boolean }>`
  display: flex;
  width: 95%;
  max-width: 600px;
  background-image: url(https://raw.githubusercontent.com/Vidigal-code/React-portfolio/main/src/images/banner-bg.png);
  background-size: cover;
  background-position: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: ${({ $isdarkmode }) =>
      $isdarkmode ? "rgba(255, 255, 255, 0.925)" : "rgba(0, 0, 0, 0.788)"}
    0px 4px 30px;
  border: 2.5px solid ${({ $isdarkmode }) => ($isdarkmode ? "#fff" : "#000")};

  @media (max-width: 768px) {
    width: 90%;
    padding: 15px;
  }

  @media (max-width: 640px) {
    width: 90%;
    padding: 15px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 1000px;

  animation: shake-vertical 6s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite
      both,
    heartbeat 5s ease-in-out infinite both;

  @keyframes shake-vertical {
    0%,
    100% {
      transform: translateY(0);
    }
    10%,
    30%,
    50%,
    70% {
      transform: translateY(-8px);
    }
    20%,
    40%,
    60% {
      transform: translateY(8px);
    }
    80% {
      transform: translateY(6.4px);
    }
    90% {
      transform: translateY(-6.4px);
    }
  }

  @keyframes heartbeat {
    from {
      transform: scale(1);
      transform-origin: center center;
      animation-timing-function: ease-out;
    }
    10% {
      transform: scale(0.91);
      animation-timing-function: ease-in;
    }
    17% {
      transform: scale(0.98);
      animation-timing-function: ease-out;
    }
    33% {
      transform: scale(0.87);
      animation-timing-function: ease-in;
    }
    45% {
      transform: scale(1);
      animation-timing-function: ease-out;
    }
  }
`;

export const ImgHeader = styled.img`
  height: 150px;
  width: 150px;
  margin: 0 auto;
`;

export const ImgAbout = styled.img`
  position: relative;
  max-width: 170px;
  max-height: 170px;
  border-radius: 50%;
  border: 4px solid white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    max-width: 150px;
    max-height: 150px;
  }

  @media (max-width: 640px) {
    max-width: 150px;
    max-height: 150px;
  }
`;

const LeftContent = styled.div`
  width: 48%;
`;

const RightContent = styled.div`
  width: 48%;
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.sub_text};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 15px;
  margin-bottom: 30px;
  text-align: center;
  font-weight: 300;
  color: white;
  max-width: 900px;
  line-height: 25px;

  @media (max-width: 960px) {
    text-align: center;
    width: 85%;
  }

  @media (max-width: 640px) {
    font-size: 15px;
    width: 85%;
  }
`;

const About = () => {
  const { selectedLanguage } = useLanguage();
  const selectedBio = Bio[selectedLanguage as keyof typeof Bio];
  const { isDarkMode } = useThemeLight();

  return (
    <Container id="about">
      <Wrapper>
        <Title>{selectedBio?.about.title}</Title>
        <AboutContainer $isdarkmode={isDarkMode}>
          <LeftContent>
            <ImgAbout src={selectedBio?.about.userimg} alt="Vidigal" />
          </LeftContent>
          <RightContent>
            <Desc>
              {selectedBio?.about.desc}
              <ImageContainer>
                <ImgHeader
                  src={selectedBio?.about.linkheaderimg}
                  alt="Header"
                />
              </ImageContainer>
            </Desc>
          </RightContent>
        </AboutContainer>
      </Wrapper>
    </Container>
  );
};

export default About;
