import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`

export const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 25px;
  color: ${({theme}) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

export const Desc = styled.div`
  font-size: 30px;
  text-align: center;
  font-style: italic;
  max-width: 600px;
  padding: 10px;
  color: ${({theme}) => theme.primary};
  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

export const SubDesc = styled.div`
  font-size: 15px;
  margin-bottom: 30px;
  text-align: center;
  font-weight: 400;
  color: ${({theme}) => theme.sub_text + 95};
  max-width: 900px;
  line-height: 30px;

  @media (max-width: 960px) {
    text-align: center;
    width: 85%;
  }

  @media (max-width: 640px) {
    font-size: 15px;
    width: 85%;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30px;
  gap: 30px;
  @media (max-width: 960px) {
    text-align: center;
    width: 85%;
  }

  @media (max-width: 640px) {
    font-size: 15px;
    width: 85%;
  }
`

const Skill = styled.div`
  height: 100%;
  width: 100%;
  max-width: 500px;
  background: ${({theme}) => theme.card};
  border: 0.1px solid ${({theme}) => theme.primary};
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 10px;
  padding: 18px 36px;
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }


`

const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  font-style: italic;
  color: ${({theme}) => theme.text_secondary};
  margin-bottom: 20px;
  text-align: center;
  @media (max-width: 960px) {
    font-size: 15px;
  }

  @media (max-width: 640px) {
    font-size: 15px;
  }
`

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`
const CategorySpan = styled.span`
  font-size: 12px;
  @media (max-width: 768px) {
    display: none;
  }
  @media (max-width: 500px) {
    display: none;
  }
`

const SpanDate = styled.span`
  font-size: 14px;
  @media (max-width: 768px) {
    display: none;
  }
  @media (max-width: 500px) {
    display: none;
  }
`

const SpanName = styled.span`
  font-size: 15px;
`

const SkillItem = styled.div`
  font-size: 16px;
  font-style: italic;
  font-weight: 400;
  border: 0.1px solid ${({theme}) => theme.primary};
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 4px;
  padding: 20px;
  margin: 1px;
  display: flex;
  width: 48%;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.4s ease;

  :hover {
    background: ${({theme}) => theme.primary};
    color: ${({theme}) => theme.white};
  }

  @media (max-width: 768px) {
    font-size: 10px;
    width: 100%;
  }
  @media (max-width: 500px) {
    font-size: 10px;
    width: 100%;
  }
`;


const SkillImage = styled.img`
  width: 25px;
  height: 25px;
  padding-right: 4px;
  float: left;
`;

const Link = styled.a`
  color: ${(props) => (props.isDarkMode ? 'white' : 'black')};
  text-decoration: none;
  text-align: center;
  align-items: center;
  justify-content: center;

  &:hover {
    -webkit-animation: vibrate 2s linear infinite both;
    animation: vibrate 2s linear infinite both;

    @-webkit-keyframes vibrate {
      0% {
        -webkit-transform: translate(0);
        transform: translate(0);
      }
      20% {
        -webkit-transform: translate(-2px, 2px);
        transform: translate(-2px, 2px);
      }
      40% {
        -webkit-transform: translate(-2px, -2px);
        transform: translate(-2px, -2px);
      }
      60% {
        -webkit-transform: translate(2px, 2px);
        transform: translate(2px, 2px);
      }
      80% {
        -webkit-transform: translate(2px, -2px);
        transform: translate(2px, -2px);
      }
      100% {
        -webkit-transform: translate(0);
        transform: translate(0);
      }
    }

    @keyframes vibrate {
      0% {
        -webkit-transform: translate(0);
        transform: translate(0);
      }
      20% {
        -webkit-transform: translate(-2px, 2px);
        transform: translate(-2px, 2px);
      }
      40% {
        -webkit-transform: translate(-2px, -2px);
        transform: translate(-2px, -2px);
      }
      60% {
        -webkit-transform: translate(2px, 2px);
        transform: translate(2px, 2px);
      }
      80% {
        -webkit-transform: translate(2px, -2px);
        transform: translate(2px, -2px);
      }
      100% {
        -webkit-transform: translate(0);
        transform: translate(0);
      }
    }

  }


`;

import {Bio} from '../../data/Info.jsx';
import {useLanguage} from "../../utils/Language.jsx";
import {useThemeLight} from "../../utils/ThemeLight.jsx";

const Skills = () => {

    const {selectedLanguage} = useLanguage();
    const {isDarkMode} = useThemeLight();


    return (
        <Container id="skills">
            <Wrapper>
                <Title>{Bio[selectedLanguage].nav.skills}</Title>
                <SubDesc>{Bio[selectedLanguage].skillsAll.desc}</SubDesc>
                <Desc>{Bio[selectedLanguage].skillsAll.title}</Desc>
                <SkillsContainer>
                    {Bio[selectedLanguage].skillsAll.info.map((section) => (
                        <Skill key={section.subtitle}>
                            <SkillTitle>{section.subtitle}</SkillTitle>
                            <SkillList>
                                {section.skills.map((item) => (
                                    <SkillItem key={item.name}>
                                        <Link isDarkMode={isDarkMode}
                                              href={item.link} target="_blank" rel="noopener noreferrer">
                                            <SkillImage src={item.image} alt={item.name}/>
                                            <SpanName>{item.name}</SpanName>
                                            <SpanDate> {item.date}</SpanDate>
                                            <CategorySpan><br/>{item.category}</CategorySpan>
                                        </Link>
                                    </SkillItem>
                                ))}
                            </SkillList>
                        </Skill>
                    ))}
                </SkillsContainer>

            </Wrapper>
        </Container>
    )
}

export default Skills