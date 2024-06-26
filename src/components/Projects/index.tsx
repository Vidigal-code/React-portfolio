import React, { useState } from "react";
import ProjectCard from "../Cards/ProjectCard/ProjectCards.tsx";
import { Bio } from "../../data/Info.tsx";
import { useLanguage } from "../../utils/Language.tsx";
import { IndexProjectProps } from "../Cards/ProjectCard/IndexProjectProps.tsx";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  Divider,
} from "./ProjectsStyle.tsx";
import "./ToggleButton.scss";

const Index: React.FC<IndexProjectProps> = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("All");
  const [active, setActive] = useState(false);

  const { selectedLanguage } = useLanguage();
  const selectedBio = Bio[selectedLanguage as keyof typeof Bio];

  const handleToggle = (value: string) => {
    setToggle(value);
  };

  const filteredProjectsCategory = selectedBio?.projects.info.filter(
    (project) => project.category === toggle
  );

  const filteredProjectsAllID  = selectedBio?.projects.info.filter(
    (project) => project.id
  );

  const projectToDisplay =
    toggle !== "All" ? filteredProjectsCategory : filteredProjectsAllID ;

  return (
    <Container id="projects">
      <Wrapper>
        <Title>{selectedBio?.projects.title}</Title>
        <Desc>{selectedBio?.projects.desc}</Desc>
        <ToggleButtonGroup>
          <div
            className={`button-menu${toggle === "All" ? "-active" : ""}`}
            onClick={() => {
              handleToggle("All");
              setActive(!active);
            }}
          >
            {selectedBio?.projects.nav.ProjectAll}
          </div>
          <Divider />
          <div
            className={`button-menu${toggle === "Bootcamp" ? "-active" : ""}`}
            onClick={() => {
              handleToggle("Bootcamp");
              setActive(!active);
            }}
          >
            {selectedBio?.projects.nav.Bootcamp}
          </div>
         <Divider />
          <div
            className={`button-menu${toggle === "Web" ? "-active" : ""}`}
            onClick={() => {
              handleToggle("Web");
              setActive(!active);
            }}
          >
            {selectedBio?.projects.nav.ProjectWeb}
          </div>
        </ToggleButtonGroup>
        <CardContainer>
          {projectToDisplay?.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              openModal={openModal}
              setOpenModal={setOpenModal}
            />
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Index;
