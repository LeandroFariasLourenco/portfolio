import { Grid, styled } from '@mui/material';

export const ProjectsContainer = styled(Grid)(({ theme }) => `
  padding: 10px;
  margin-top: 20px;
  height: 500px;
  width: 100%;
  border: 2px solid ${theme.palette.secondary.main};
  background-color: ${theme.palette.background.default};
`);

export const ProjectsTabs = styled(Grid)`
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
