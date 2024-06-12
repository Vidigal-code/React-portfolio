import React from "react";
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
  SpanLeftIcon,
  SelectOption,
} from "./NavMenuStyledComponent";
import { Bio } from "../../data/Info";
import { languages } from "../../data/Info";
import { useLanguage } from "../../utils/Language";
import { useThemeLight } from "../../utils/ThemeLight";
import { CgArrowAlignV } from "react-icons/cg";
import { FaGithubAlt } from "react-icons/fa";
import { FiPower } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const theme = {
    primary: "#000000",
    white: "white",
  };

  const { selectedLanguage, handleLanguageChange } = useLanguage();
  const selectedBio = Bio[selectedLanguage as keyof typeof Bio];
  const { isDarkMode, toggleDarkMode } = useThemeLight();

  const menuItems = [
    { id: "home", label: selectedBio?.nav.home },
    { id: "skills", label: selectedBio?.nav.skills },
    { id: "experience", label: selectedBio?.nav.experience },
    { id: "projects", label: selectedBio?.nav.projects },
    { id: "education", label: selectedBio?.nav.education },
    { id: "contact", label: selectedBio?.nav.contact },
    { id: "about", label: selectedBio?.nav.about },
  ];

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo >
          <StyledSelect
            value={selectedLanguage}
            onChange={(e) => handleLanguageChange(e.target.value)}
            $isdarkmode={isDarkMode}
          >
            {languages.map(({ code, label }) => (
              <SelectOption key={code} value={code}>
                {label}
              </SelectOption>
            ))}
          </StyledSelect>
          <StyledButton onClick={toggleDarkMode} $isdarkmode={isDarkMode}>
            {isDarkMode ? selectedBio?.Modelight : selectedBio?.Modedark}
            <SpanLeftIcon>
              <FiPower />
            </SpanLeftIcon>
          </StyledButton>
        </NavLogo>
        <MobileIcon $isdarkmode={isDarkMode}>
          <CgArrowAlignV
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </MobileIcon>
        <NavItems>
          {menuItems.map(({ id, label }) => (
            <NavLink $isdarkmode={isDarkMode} key={id} href={`#${id}`}>
              {label}
            </NavLink>
          ))}
        </NavItems>
        <ButtonContainer>
          <GitHubButton
            $isdarkmode={isDarkMode}
            target="_blank"
            href={selectedBio?.GithubLink}
          >
            {selectedBio?.GithubLinkTitle}
            <SpanLeftIcon>
              <FaGithubAlt />
            </SpanLeftIcon>
          </GitHubButton>
        </ButtonContainer>
        {isOpen && (
          <MobileMenu $isdarkmode={isDarkMode} isOpen={isOpen}>
            {menuItems.map(({ id, label }) => (
              <MobileLink
              $isdarkmode={isDarkMode}
                key={id}
                href={`#${id}`}
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                {label}
              </MobileLink>
            ))}
            <GitHubButton
              $isdarkmode={isDarkMode}
              theme={theme}
              style={{
               
              }}
              target="_blank"
              href={selectedBio?.GithubLink}
            >
              {selectedBio?.GithubLinkTitle}
            </GitHubButton>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
