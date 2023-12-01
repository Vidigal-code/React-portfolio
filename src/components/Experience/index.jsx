import React from 'react'
import styled from 'styled-components'
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineContent from '@mui/lab/TimelineContent';
import ExperienceCard from '../Cards/ExperienceCard';
import {Bio} from "../../data/Info.jsx";
import Timeline from "@mui/lab/Timeline";
import { useLanguage } from "../../utils/Language.jsx";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

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

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({theme}) => theme.sub_text};
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

const TimelineSection = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;


const index = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {selectedLanguage} = useLanguage();

    return (
        <Container id="experience">
            <Wrapper>
                <Title>{Bio[selectedLanguage].experiences.title}</Title>
                <Desc>
                    {Bio[selectedLanguage].experiences.desc}
                </Desc>
                <TimelineSection>
                    <Timeline>
                        {Bio[selectedLanguage].experiences.info.map((experience,index) => (
                            <TimelineItem>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <ExperienceCard experience={experience}/>
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </Timeline>

                </TimelineSection>
            </Wrapper>
        </Container>
    )
}

export default index