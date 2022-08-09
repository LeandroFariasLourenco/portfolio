import { Grid, styled } from '@mui/material';
import { APP } from 'src/core/constants';

export const ProjectsContainer = styled(Grid)(({ theme }) => `
  padding: 10px;
  margin-top: 20px;
  height: 500px;
  width: 100%;
  border: 2px solid ${theme.palette.secondary.main};
  background-color: ${theme.palette.background.default};
`);

export const ProjectsTabs = styled(Grid)`
  background-image: linear-gradient(rgba(28, 22, 48,1), rgba(28, 22, 48,0.93)), url(${APP.aws.assets}/wallpapers/personal-projects.jpg);
  background-size: cover;
  background-position: center;
  padding: 10px;
`;

export const RepositoryTitle = styled(Grid)(({ theme }) => `
  margin-bottom: 10px;
  border-bottom: 2px solid ${theme.palette.secondary.main};
  width: 95%;

  svg {
    margin-right: 10px;
  }
`);

export const RepositoriesWrapper = styled(Grid)(({ theme }) => `
  height: 100%;
  border-right: dashed 2px ${theme.palette.secondary.main};
  padding-right: 5px;
`);

export const RepositoriesList = styled(Grid)(({ theme }) => `
  overflow-y: auto;
  height: 92%;
  padding-right: 10px;

  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${theme.palette.secondary.main};
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: ${theme.palette.primary.main};
  }
  &::-webkit-scrollbar-track {
    background: ${theme.palette.background.paper};
  }
`);
