import { IoIosClose } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Modal } from "@mui/material";
import styled from "styled-components";
import { useThemeLight } from "../../utils/ThemeLight.tsx";
import {
  MemberData,
} from "../Cards/ProjectCard/ProjectDataInterface.tsx";
import { IndexProjectProps } from "../Cards/ProjectCard/IndexProjectProps";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000000a7;
  display: flex;
  justify-content: center;
  overflow-y: scroll;
  transition: all 0.5s ease;
`;

const Wrapper = styled.div`
  max-width: 800px;
  width: 100%;
  border-radius: 16px;
  margin: 50px 12px;
  height: min-content;
  background-color: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text_primary};
  padding: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
`;



const Title = styled.div<{ $isdarkmode: boolean }>`
  font-size: 28px;
  font-weight: 600;
  color: ${({ $isdarkmode }) => ($isdarkmode ? "#fff" : "#000")};
  margin: 8px 6px 0px 6px;
  @media only screen and (max-width: 600px) {
    font-size: 24px;
    margin: 6px 6px 0px 6px;
  }
`;

const Desc = styled.div<{ $isdarkmode: boolean }>`
  font-size: 16px;
  font-weight: 400;
  color: ${({ $isdarkmode }) => ($isdarkmode ? "#fff" : "#000")};
  margin: 8px 6px;
  @media only screen and (max-width: 600px) {
    font-size: 14px;
    margin: 6px 6px;
  }
`;

const Date = styled.div`
  font-size: 16px;
  margin: 2px 6px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 12px;
  margin-top: 30px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
`;

const Label = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin: 8px 6px;
  @media only screen and (max-width: 600px) {
    font-size: 16px;
    margin: 8px 6px;
  }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 8px 0px;
  @media only screen and (max-width: 600px) {
    margin: 4px 0px;
  }
`;

const Tag = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.primary};
  margin: 4px;
  padding: 4px 8px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.primary + 20};
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

const Members = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex-wrap: wrap;
  margin: 12px 6px;
  @media only screen and (max-width: 600px) {
    margin: 4px 6px;
  }
`;

const Member = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const MemberImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 4px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
  @media only screen and (max-width: 600px) {
    width: 32px;
    height: 32px;
  }
`;

const MemberName = styled.div`
  font-size: 16px;
  font-weight: 500;
  width: 200px;
  color: ${({ theme }) => theme.text_primary};
  @media only screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 12px 0px;
  gap: 12px;
`;



const Button = styled.a<{   $isdarkmode?: boolean;
  dull?: boolean;
  theme: {
    primary: string;
    bgLight: string;
    text_secondary: string;
    bg: string;
  };
  onClick?: () => void;
  children: React.ReactNode; }>`
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  color: ${({ $isdarkmode }) => ($isdarkmode ? "#fff" : "#000")};
  padding: 12px 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.primary};
  ${({ dull, theme }) =>
    dull &&
    `
        background-color: ${theme.bgLight};
        color: ${theme.text_secondary};
        &:hover {
            background-color: ${theme.bg + 99};
        }
    `}
  cursor: pointer;
  text-decoration: none;
  transition: all 0.5s ease;

  &:hover {
    background-color: ${({ theme }) => theme.primary + 99};
  }

  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

const Index: React.FC<IndexProjectProps> = ({ openModal, setOpenModal }) => {
  const { isDarkMode } = useThemeLight();
  const project = openModal?.project?.projects?.info[0];

  const buttonGitHubTitle = openModal?.project?.projects?.buttonGitHubTitle;
  const buttonWebappTitle = openModal?.project?.projects?.buttonWebappTitle;

  if (!project) {
    return null;
  }

  const {
    image,
    title,
    date,
    tags = [],
    description,
    github,
    webapp,
    member,
  } = project;

  return (
    <Modal
      open={openModal.state}
      onClose={() => setOpenModal({ state: false, project: null })}
    >
      <Container>
        <Wrapper>
          <IoIosClose
            style={{
              position: "absolute",
              top: "10px",
              right: "20px",
              cursor: "pointer",
              width: "35px",
              height: "35px",
              color: isDarkMode ? "white" : "black",
            }}
            onClick={() => setOpenModal({ state: false, project: null })}
          />
          <Image src={image} />
          <Title $isdarkmode={isDarkMode}>{title}</Title>
          <Date>{date}</Date>
          <Tags>
            {tags.map((tag: string, index: number) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </Tags>
          <Desc $isdarkmode={isDarkMode}>{description}</Desc>
          {member && member.length > 0 && (
            <>
              <Label>Members</Label>
              <Members>
                {member.map((memberData: MemberData, index: number) => (
                  <Member key={index}>
                    <MemberImage src={memberData.img} />
                    <MemberName>{memberData.name}</MemberName>
                    <a
                      href={memberData.github}
                      target="_blank"
                      rel="noreferrer"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <FaGithub />
                    </a>
                    <a
                      href={memberData.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <FaLinkedin />
                    </a>
                  </Member>
                ))}
              </Members>
            </>
          )}
          <ButtonGroup>
            <Button
              $isdarkmode={isDarkMode}
              dull
              href={github}
              target="_blank"
              rel="noreferrer"
            >
              {buttonGitHubTitle}
            </Button>
            <Button
              $isdarkmode={isDarkMode}
              href={webapp}
              target="_blank"
              rel="noreferrer"
            >
              {buttonWebappTitle}
            </Button>
          </ButtonGroup>
        </Wrapper>
      </Container>
    </Modal>
  );
};

export default Index;
