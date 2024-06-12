import styled from "styled-components";
import { useLanguage } from "../../utils/Language.tsx";
import { TimelineContent } from "@mui/lab";
import { Bio } from "../../data/Info.tsx";
import EducationCard from "../Cards/EducationCard/EducationCard.tsx";
import EducationDataInterface from "../Cards/EducationCard/EducationDataInterface.tsx";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  margin-top: 30px;
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
  font-weight: 400;
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

const index = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { selectedLanguage } = useLanguage();
  const selectedBio = Bio[selectedLanguage as keyof typeof Bio];

  const education: EducationDataInterface[] =
    selectedBio?.education?.info.map((education) => ({
      id: education.id,
      img: education.img,
      school: selectedBio?.education?.title || "",
      curseMoment: education.curseMoment || "",
      curseLink: education.curseLink || "",
      curseTitle: education.curseTitle || "",
      gradetitle: education.gradetitle || "",
      gradevalue: education.gradevalue || "",
      linkIcon: education.linkIcon || "",
      CertificateLink: education.CertificateLink || "",
      CertificateTitle: education.CertificateTitle || "",
      CertificateImg: education.CertificateImg || "",
      date: education.date || "",
      desc: education.desc || "",
      degree: education.degree || "",
    })) || [];

  return (
    <Container id="education">
      <Wrapper>
        <Title>{selectedBio?.education?.title}</Title>
        <Desc>{selectedBio?.education?.desc}</Desc>
        {education?.map((education, index) => (
          <TimelineContent sx={{ py: "12px", px: 2 }} key={index}>
            <EducationCard education={education} />
          </TimelineContent>
        ))}
      </Wrapper>
    </Container>
  );
};

export default index;
