import styled from "styled-components";
import { useLanguage } from "../../utils/Language.tsx";
import { TimelineContent } from "@mui/lab";
import { Bio } from "../../data/Info.tsx";
import ExperienceCard from "../Cards/Experience/ExperienceCard.tsx";
import ExperienceDataInterface from '../Cards/Experience/ExperienceDataInterface.tsx';


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
  color: ${({ theme }) => theme.sub_text + 95};
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

const Index = () => {
  const { selectedLanguage } = useLanguage();
  const selectedBio = Bio[selectedLanguage as keyof typeof Bio];
  
  
  const experiences: ExperienceDataInterface[] = selectedBio?.experiences?.info.map(
    (experience) => ({
      title: selectedBio?.experiences?.title || "",
      desc: selectedBio?.experiences?.desc || "",
      info: [
        {
          id: experience.id || "",
          img: experience.img || "",
          role: experience.role || "",
          company: experience.company || "",
          date: experience.date || "",
          desc: experience.desc || "",
          skillsFreeLancerTitle: experience.skillsFreeLancerTitle || "",
          skillsFreeLancer: experience.skillsFreeLancer || [],
          skillsTitle: experience.skillsTitle || "",
          skills: experience.skills || [],
          doc: experience.doc || "",
        },
      ],
    })
  ) || [];
  
  return (
    <Container id="experience">
      <Wrapper>
        <Title>{selectedBio?.experiences?.title}</Title>
        <Desc>{selectedBio?.experiences?.desc}</Desc>
        {experiences?.map((experience, index) => (
          <TimelineContent sx={{ py: "12px", px: 2 }} key={index}>
            <ExperienceCard
              experience={experience} 
            />
          </TimelineContent>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Index;




