interface ExperienceInfoInterface {
  id: string | number;
  img: string;
  role: string;
  company: string;
  date: string;
  desc: string;
  skillsFreeLancerTitle: string;
  skillsFreeLancer: string[];
  skillsTitle: string;
  skills: string[];
  doc: string;
}

interface ExperienceDataInterface {
  title: string;
  desc: string;
  info: ExperienceInfoInterface[];
}

export default ExperienceDataInterface;
