export interface MemberData {
  img: string;
  name: string;
  github: string;
  linkedin: string;
}

export interface ProjectInfo {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  github: string;
  webapp: string;
  member?: MemberData[];
}

export interface Nav {
  ProjectAll: string;
  ProjectWeb: string;
  Bootcamp: string;
}

export interface ProjectsData {
  nav: Nav;
  buttonGitHubTitle: string;
  buttonWebappTitle: string;
  title: string;
  desc: string;
  info: ProjectInfo[];
}

export interface ProjectDataInterface {
  projects: ProjectsData;
}