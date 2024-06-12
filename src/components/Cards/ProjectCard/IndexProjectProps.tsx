import { ProjectDataInterface, ProjectInfo } from './ProjectDataInterface.tsx';

export interface IndexProjectProps {
  project: ProjectInfo;
  openModal: {
    state: boolean;
    project: ProjectDataInterface | null;
  };
  setOpenModal: React.Dispatch<
    React.SetStateAction<{
      state: boolean;
      project: ProjectDataInterface | null;
    }>
  >;
}