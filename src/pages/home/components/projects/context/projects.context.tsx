import {
  createContext,
  useState,
} from 'react';
import { IProjectsContext } from './context.interface';
import { IProjectsContextProps } from './props.interface';

export const ProjectsContext = createContext<IProjectsContext>({} as IProjectsContext);

const ProjectsProvider = ({ children }: IProjectsContextProps) => {
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);

  return (
    <ProjectsContext.Provider value={{
      mobile: {
        lightbox: {
          open: lightboxOpen,
          setOpen: setLightboxOpen,
        },
      },
    }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};

export default ProjectsProvider;
