import React from 'react'
import styled from 'styled-components'
import {useThemeLight} from "../../utils/ThemeLight.jsx";

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

export const Button = styled.a`
  background: ${({theme}) => theme.text_primary};
  justify-content: center;
  display: flex;
  height: 45px;
  align-items: center;
  border-radius: 2px;
  color: ${(props) => (props.isDarkMode ? 'black' : 'white')};
  cursor: pointer;
  padding: 5px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;

  :hover {
    background: ${({theme}) => theme.primary};
    color: ${({theme}) => theme.white};
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Span = styled.span`
  overflow: hidden;
  display: -webkit-box;
  text-align: center;
  line-height: 20px;
  font-weight: 350;
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


const ImageCertificate = styled.img`
  border-radius: 10px;
  margin: 2px;
  width: 50%;
  height: 50%;
  @media only screen and (max-width: 768px) {
    width: 50%;
    height: 50%;
  }
`

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 5px;
`


const Name = styled.div`
  font-size: 18px;
  font-weight: 400;
  text-align: left;
  color: ${({theme}) => theme.text_primary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`

const Curse = styled.div`
  font-size: 15px;
  font-style: italic;
  font-weight: 200;
  text-align: left;
  color: ${(props) => (props.isDarkMode ? 'white' : 'black')};
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`

const CurseCertificate = styled.div`
  font-size: 25px;
  font-weight: 500;
  margin: 4px;
  text-align: center;
  color: ${(props) => (props.isDarkMode ? 'white' : 'black')};
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`

const Degree = styled.div`
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

const Grade = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({theme}) => theme.text_secondary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`
const Link = styled.a`
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

const Linkicon = styled.a`
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


const EducationCard = ({education}) => {

    const {isDarkMode} = useThemeLight();

    return (
        <Card>
            <Top>
                <Linkicon href={education.linkIcon} target="_blank"
                          rel="noopener noreferrer">
                    <Image src={education.img}/>
                </Linkicon>
                <Body>
                    <Name>{education.school}</Name>
                    <Curse isDarkMode={isDarkMode}
                    >{education.curseMoment}</Curse>
                    <Degree>{education.degree}</Degree>
                    <Date>{education.date}</Date>
                </Body>
                {education.CertificateTitle.length > 1 && (
                    <CurseCertificate isDarkMode={isDarkMode}
                    >{education.CertificateTitle}</CurseCertificate>
                )}
            </Top>
            {education.CertificateLink.length > 1 && (
                <Link href={education.CertificateLink} target="_blank"
                      rel="noopener noreferrer">
                    <ImageCertificate src={education.CertificateImg}/>
                </Link>
            )}
            {education.gradetitle.length > 1 && (
                <Grade><b>{education.gradetitle} </b>{education.gradevalue}</Grade>
            )}
            {education.desc.length > 1 && (
                <Span>{education.desc}</Span>
            )}
            {education.curseTitle.length > 1 && (
                <Button isDarkMode={isDarkMode} target="_blank" href={education.curseLink}>
                    {education.curseTitle}
                </Button>)}
        </Card>
    )
}

export default EducationCard