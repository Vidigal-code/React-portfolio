import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle.jsx'
import ProjectCard from '../Cards/ProjectCards'
import {Bio} from '../../data/Info.jsx'
import {useLanguage} from "../../utils/Language.jsx";


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  const {selectedLanguage} = useLanguage();

  return (
    <Container id="projects">
      <Wrapper>
        <Title>{Bio[selectedLanguage].projects.title}</Title>
        <Desc>
          {Bio[selectedLanguage].projects.desc}
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>{Bio[selectedLanguage].projects.nav.ProjectAll}</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>{Bio[selectedLanguage].projects.nav.ProjectAll}</ToggleButton>
          }
          <Divider />
          {toggle === 'bootcamp ' ?
              <ToggleButton active value="bootcamp" onClick={() => setToggle('bootcamp')}>{Bio[selectedLanguage].projects.nav.Bootcamp}</ToggleButton>
              :
              <ToggleButton value="bootcamp" onClick={() => setToggle('bootcamp')}>{Bio[selectedLanguage].projects.nav.Bootcamp}</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && Bio[selectedLanguage].projects.info
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {Bio[selectedLanguage].projects.info
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects