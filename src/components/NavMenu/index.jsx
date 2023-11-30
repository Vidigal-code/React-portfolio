import React from 'react'
import {
    Nav,
    NavLink,
    NavbarContainer,
    NavLogo,
    NavItems,
    GitHubButton,
    ButtonContainer,
    MobileIcon,
    MobileMenu,
    StyledSelect,
    MobileLink,
    StyledButton,
    SpanLeftIcon, SelectOption
} from './NavMenuStyledComponent.jsx'
import {Bio} from '../../data/Info.jsx';
import {useTheme} from 'styled-components';
import {languages} from '../../data/Info.jsx';
import {useLanguage} from '../../utils/Language.jsx';
import {useThemeLight} from '../../utils/ThemeLight.jsx';
import { CgArrowAlignV } from "react-icons/cg";
import {FaGithubAlt} from "react-icons/fa";
import { FiPower } from "react-icons/fi";

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const theme = useTheme();
    const {selectedLanguage, handleLanguageChange} = useLanguage();
    const {isDarkMode, toggleDarkMode} = useThemeLight();


    const menuItems = [
        {id: 'home', label: Bio[selectedLanguage].nav.home},
        {id: 'skills', label: Bio[selectedLanguage].nav.skills},
        {id: 'experience', label: Bio[selectedLanguage].nav.experience},
        {id: 'projects', label: Bio[selectedLanguage].nav.projects},
        {id: 'education', label: Bio[selectedLanguage].nav.education},
        {id: 'contact', label: Bio[selectedLanguage].nav.contact},
        {id: 'about', label: Bio[selectedLanguage].nav.about},
    ];

    return (
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>
                    <StyledSelect
                        value={selectedLanguage}
                        onChange={(e) => handleLanguageChange(e.target.value)}
                        isDarkMode={isDarkMode}
                    >
                        {languages.map(({code, label}) => (
                            <SelectOption
                                key={code}
                                value={code}
                            >
                                {label}
                            </SelectOption>

                        ))}
                    </StyledSelect>
                    <StyledButton
                        onClick={() => toggleDarkMode()}
                        isDarkMode={isDarkMode}
                    >
                        {isDarkMode ? Bio[selectedLanguage].Modelight : Bio[selectedLanguage].Modedark}
                        <SpanLeftIcon><FiPower/></SpanLeftIcon>
                    </StyledButton>
                </NavLogo>
                <MobileIcon isDarkMode={isDarkMode}>
                    <CgArrowAlignV onClick={() => {
                        setIsOpen(!isOpen)
                    }}/>
                </MobileIcon>
                <NavItems>
                    {menuItems.map(({id, label}) => (
                        <NavLink isDarkMode={isDarkMode} key={id} href={`#${id}`}>
                            {label}
                        </NavLink>
                    ))}
                </NavItems>
                <ButtonContainer>
                    <GitHubButton isDarkMode={isDarkMode} target="_blank" href={Bio[selectedLanguage].GithubLink}>
                        {Bio[selectedLanguage].GithubLinkTitle}
                        <SpanLeftIcon><FaGithubAlt/></SpanLeftIcon>
                    </GitHubButton>
                </ButtonContainer>
                {
                    isOpen &&
                    <MobileMenu isDarkMode={isDarkMode} isOpen={isOpen}>
                        {menuItems.map(({id, label}) => (
                            <MobileLink isDarkMode={isDarkMode}
                                        key={id}
                                        href={`#${id}`}
                                        onClick={() => {
                                            setIsOpen(!isOpen);
                                        }}
                            >
                                {label}
                            </MobileLink>
                        ))}
                        <GitHubButton style={{
                            padding: '10px 16px',
                            background: `${theme.primary}`,
                            color: 'white',
                            width: 'max-content'
                        }} target="_blank"
                                      href={Bio[selectedLanguage].GithubLink}>{Bio[selectedLanguage].GithubLinkTitle}</GitHubButton>
                    </MobileMenu>
                }
            </NavbarContainer>
        </Nav>
    );
};


export default Navbar