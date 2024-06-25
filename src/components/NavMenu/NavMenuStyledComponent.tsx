import styled from "styled-components";

export const Nav = styled.div`
  background-color: ${({ theme }) => theme.card_menu};
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media (max-width: 960px) {
    trastion: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: 100%;
  padding: 20px 4px;
  z-index: 1;
`;

export const NavLogo = styled.a`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 0px 20px;
  text-decoration: none;

  @media (max-width: 960px) {
    padding: 0 0px;
    margin: 0px 5px;
  }

  @media (max-width: 640px) {
    padding: 0 0px;
    margin: 0px 5px;
  }
`;

export const ButtonNav = styled.div`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  @media (max-width: 640px) {
    padding: 0 0px;
  }
`;

export const Span = styled.div`
  padding: 0 4px;
  font-weight: bold;
  font-size: 18px;
`;

export const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 2px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.a<{ $isdarkmode: boolean }>`
  justify-content: center;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 2px;
  background: none;
  color: ${({ $isdarkmode }) => ($isdarkmode ? "#000" : "#fff")};
  text-decoration: none;
  box-shadow: none;
  text-align: center;

  padding: 8px 2px;
  font-weight: 250;
  font-size: 16px;
  transition: all 0.6s ease-in-out;

  &:hover {
    border: 1.8px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

export const GitHubButton = styled.a<{ $isdarkmode: boolean }>`
  justify-content: center;
  align-items: center;
  display: flex;
  height: 45px;
  margin-right: 20px;
  border-radius: 2px;
  background-color: ${({ $isdarkmode }) => ($isdarkmode ? "#fff" : "transparent")};
  color: ${({ $isdarkmode }) => ($isdarkmode ? "#000" : "#fff")};
  cursor: pointer;
  padding: 10px 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;
  border: 1.8px solid ${({ $isdarkmode }) => ($isdarkmode ? "#000" : "#fff")};

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }

  @media screen and (max-width: 768px) {
    padding: 10px 16px;
    background-color: #2aa889;
    color: white;
    width: max-content;
    font-size: 14px;
  }
`;

export const ButtonContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MobileIcon = styled.div<{ $isdarkmode: boolean }>`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    margin-top: -8px;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ $isdarkmode }) => ($isdarkmode ? "#000" : "#fff")};
    transition: all 1s ease;
  }
`;

export const MobileMenu = styled.div<{ $isdarkmode: boolean; isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  position: absolute;
  top: 54px;
  right: 0;
  width: 100%;
  padding: 15px 40px 24px 40px;
  background: ${({ theme }) => theme.card_menu_mobile};
  color: ${({ $isdarkmode }) => ($isdarkmode ? "#000" : "#fff")};
  transition: all 0.6s ease-in-out;
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-100%)"};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")};
`;

export const MobileMenuItems = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  list-style: none;
  width: 100%;
  height: 100%;
`;

export const MobileMenuLink = styled.a<{ $isdarkmode: boolean }>`
    color: ${({ $isdarkmode }) => ($isdarkmode ? "#000" : "#fff")};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

export const MobileMenuButton = styled.a<{ $isdarkmode: boolean }>`
  border: 1.8px solid ${({ $isdarkmode }) => ($isdarkmode ? "#fff" : "#000")};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;
  overflow-y: auto; 

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }
`;

export const MobileLink = styled.a<{ $isdarkmode: boolean }>`
  color: ${({ $isdarkmode }) => ($isdarkmode ? "#000" : "#fff")};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    color: ${({ $isdarkmode }) => ($isdarkmode ? "#000" : "#fff")};
  }

  &.active {
    border-bottom: 2px solid
      ${({ $isdarkmode }) => ($isdarkmode ? "#000" : "#fff")};
  }
`;

export const MobileNavLogo = styled.a`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  @media (max-width: 640px) {
    padding: 0 0px;
  }
`;

export const SpanLeftIcon = styled.span`
  height: 20px;
  margin-left: 5px;
`;

export const StyledButton = styled.button<{ $isdarkmode: boolean }>`
  justify-content: center;
  display: flex;
  align-items: center;
  margin-left: 8px;
  cursor: pointer;
  border-radius: 2px;
  height: 45px;
  background-color: ${({ $isdarkmode }) => ($isdarkmode ? "#fff" : "transparent")};
  color: ${({ $isdarkmode }) => ($isdarkmode ? "#000" : "#fff")};
  outline: none;
  box-shadow: none;
  position: relative;
  appearance: none;
  text-align: center;
  text-decoration: none;
  border: 1.8px solid ${({ $isdarkmode }) => ($isdarkmode ? "#000" : "#fff")};

  padding: 10px 20px;
  font-weight: 500;
  font-size: 16px;
  transition: all 0.6s ease-in-out;

  &:hover {
    background: ${({ $isdarkmode }) => ($isdarkmode ? "#000" : "#fff")};
    color: ${({ $isdarkmode }) => ($isdarkmode ? "#fff" : "#000")};
  }

  @media (max-width: 960px) {
    width: 80%;
  }

  @media (max-width: 640px) {
    width: 80%;
  }
`;

export const SelectOption = styled.option`
  background: black;
  color: white;
  outline: white;
  float: left;
  text-align: left;
  text-decoration: white;
  appearance: none;
  cursor: pointer;

  &:focus {
    user-focus: none;
    background: none;
  }

  &:focus::after {
    outline: none;
  }
`;

export const StyledSelect = styled.select<{ $isdarkmode: boolean }>`
  justify-content: center;
  display: flex;
  align-items: center;
  margin: 2px 5px;
  cursor: pointer;
  border-radius: 2px;
  height: 45px;
  background-color: ${({ $isdarkmode }) => ($isdarkmode ? "#fff" : "transparent")};
  color: ${({ $isdarkmode }) => ($isdarkmode ? "#000" : "#fff")};
  outline: none;
  box-shadow: none;
  position: relative;
  appearance: none;
  text-align: left;
  text-decoration: none;
  float: left;
  border: 1.8px solid ${({ $isdarkmode }) => ($isdarkmode ? "#000" : "#fff")};

  padding: 5px 20px;
  font-weight: 500;
  font-size: 16px;
  transition: all 0.6s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 960px) {
    width: 80%;
  }

  @media (max-width: 640px) {
    width: 80%;
  }
`;
