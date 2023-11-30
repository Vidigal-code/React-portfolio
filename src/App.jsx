import {ThemeProvider} from "styled-components";
import React, {useEffect, useState} from "react";
import {darkTheme, lightTheme} from './utils/Themes.jsx'
import Navbar from "./components/NavMenu/index.jsx";
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import PerfilSection from "./components/PerfilSection/index.jsx";
import Skills from "./components/Skills/index.jsx";
import Contact from "./components/Contact/index.jsx";
import Footer from "./components/Footer/index.jsx";
import Experience from "./components/Experience/index.jsx";
import ProjectDetails from "./components/ProjectDetails";
import styled from "styled-components";
import {useThemeLight} from './utils/ThemeLight.jsx';
import {useLanguage} from "./utils/Language.jsx";
import Projects from "./components/Projects/index.jsx";
import Education from "./components/Education/index.jsx";
import About from "./components/About/index.jsx";

const Body = styled.div`
  background-color: ${({theme}) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`


function App() {
    const {handleLanguageChange} = useLanguage();

    const {isDarkMode} = useThemeLight();

    const [openModal, setOpenModal] = useState({state: false, project: null});

    const handleChangeLanguage = (languageCode) => {
        handleLanguageChange(languageCode);
    };

    useEffect(() => {
        const currentPath = window.location.pathname;
        if (currentPath.startsWith('/pt')) {
            handleChangeLanguage('pt');
        } else if (currentPath.startsWith('/en')) {
            handleChangeLanguage('en');
        }

        if (currentPath === '/en/edu') {
            handleChangeLanguage('en');
            window.location.href = '#education';
        }
        if (currentPath === '/pt/edu') {
            handleChangeLanguage('pt');
            window.location.href = '#education';
        }
    }, []);

    return (
        <>
            <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
                <Router>
                    <Navbar/>
                    <Body>
                        <PerfilSection/>
                        <Skills/>
                        <Experience/>
                        <Education/>
                        <Projects openModal={openModal} setOpenModal={setOpenModal} />
                        <Contact/>
                        <About/>
                        <Footer/>
                        {openModal.state &&
                            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal}/>
                        }
                    </Body>
                </Router>
            </ThemeProvider>
        </>
    );
}

export default App;
