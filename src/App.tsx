import React, { useState } from "react";
import { darkTheme, lightTheme } from "./utils/Themes";
import Navbar from "./components/NavMenu/index.tsx";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import PerfilSection from "./components/PerfilSection/index.tsx";
import Skills from "./components/Skills/index.tsx";
import Contact from "./components/Contact/index.tsx";
import Footer from "./components/Footer/index.tsx";
import Experience from "./components/Experience/index.tsx";
import ProjectDetails from "./components/ProjectDetails/index.tsx";
import { useThemeLight } from "./utils/ThemeLight.tsx";
import { useLanguage } from "./utils/Language.tsx";
import Projects from "./components/Projects/index.tsx";
import Education from "./components/Education/index.tsx";
import About from "./components/About/index.tsx";
import ModalState from "./Modal.tsx";
import { ThemeProvider } from "styled-components";
import { Bio } from "./data/Info.tsx";
import styled from 'styled-components';

const Body = styled.div<{ theme: { bg: string } }>`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow: hidden;
`;



const App: React.FC = () => {
  const { selectedLanguage } = useLanguage();
  const selectedBio = Bio[selectedLanguage as keyof typeof Bio];

  const { isDarkMode } = useThemeLight();

  const [openModal, setOpenModal] = useState<ModalState>({
    state: false,
    project: null,
  });

  return (
    <>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <Router>
          <Navbar />
          <Body>
            <PerfilSection />
            <Skills />
            <Experience />
            <Education />
            {selectedBio?.projects.info?.map((project, index) => {
              if (index === 0) {
                return (
                  <Projects
                    key={index}
                    project={project}
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                  />
                );
              }
              return null;
            })}
            <Contact />
            <About />
            <Footer />
            {openModal.state &&
              selectedBio?.projects.info?.map((project, index) => (
                <ProjectDetails
                  key={index}
                  project={project}
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                />
              ))}
          </Body>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
