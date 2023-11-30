import React from 'react'
import styled from 'styled-components'

const Document = styled.img`
  display: none;
  height: 70px;
  width: fit-content;
  background-color: #000;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`

const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({theme}) => theme.text_secondary};
  margin-bottom: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`

const Span = styled.span`
  overflow: hidden;
  display: -webkit-box;
  text-align: left;
  line-height: 20px;
  font-weight: 400;
  color: ${({theme}) => theme.sub_text + 95};
  max-width: 100%;
  margin-bottom: 10px;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`

const Card = styled.div`
  width: 650px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 12px 16px;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }

  @media only screen and (max-width: 768px) {
    padding: 10px;
    gap: 8px;
    width: 300px;
  }

  &:hover ${Document} {
    display: flex;
  }

  &:hover ${Span} {
    overflow: visible;
    -webkit-line-clamp: unset;

  }

  border: 0.1px solid ${({theme}) => theme.primary};
`

const Top = styled.div`
  width: 100%;
  display: flex;
  gap: 12px
`

const Image = styled.img`
  height: 50px;
  background-color: #000;
  border-radius: 10px;
  margin-top: 4px;
  @media only screen and (max-width: 768px) {
    height: 40px;
  }
`

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const BSytle = styled.b`
  color: ${({theme}) => theme.text_primary};
`


const Role = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({theme}) => theme.text_primary};
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`

const Company = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({theme}) => theme.text_secondary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`

const Date = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({theme}) => theme.text_secondary + 80};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 8px 0px;
  @media only screen and (max-width: 600px) {
    margin: 4px 0px;
  }
`;

const Tag = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${({theme}) => theme.primary};
  padding: 5px;
  border-radius: 8px;
  background-color: ${({theme}) => theme.primary + 20};
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`;


const Skills = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  margin-top: -10px;
`

const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`

const Skill = styled.div`
  font-size: 14px;
  font-weight: 300;
  color: ${({theme}) => theme.text_secondary};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`


const ExperienceCard = ({experience}) => {
    return (
        <Card>
            <Top>
                <Image src={experience.img}/>
                <Body>
                    <Role>{experience.role}</Role>
                    <Company>{experience.company}</Company>
                    <Date>{experience.date}</Date>
                </Body>
            </Top>
            <Description>
                {experience?.desc && <Span>{experience?.desc}</Span>}
                {experience.skillsFreeLancerTitle.length > 1 && (
                    <BSytle>
                        <br/>
                        {experience.skillsFreeLancerTitle}
                    </BSytle>
                )}
                <br/>
                <br/>
                <Skills>
                    <ItemWrapper>
                        {experience.skillsFreeLancerTitle.length > 1 && (
                            experience?.skillsFreeLancer?.map((skill, index) => (
                                <Tags key={index}>
                                    <Tag>{skill}</Tag>
                                </Tags>
                            ))
                        )}
                    </ItemWrapper>
                </Skills>
                {experience?.skills && (
                    <>
                        <br/>
                        <Skills>
                            <BSytle>{experience.skillsTitle}</BSytle>
                            <ItemWrapper>
                                {experience?.skills?.map((skill, index) => (
                                    <Skill key={index}>• {skill}</Skill>
                                ))}
                            </ItemWrapper>
                        </Skills>
                    </>
                )}
            </Description>
            {experience.doc && (
                <a href={experience.doc} target="_blank" rel="noopener noreferrer">
                    <Document src={experience.doc}/>
                </a>
            )}
        </Card>
    );
};

export default ExperienceCard;
