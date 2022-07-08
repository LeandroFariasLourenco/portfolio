import { Grid, styled, Typography } from '@mui/material';

export const RepositoryContainer = styled('a')(({ theme }) => `
  padding: 5px;
  transition: 200ms opacity ease-in-out;
  display: block;
  border: 1px solid ${theme.palette.action.active};
  opacity: 0.45;

  & + & {
    margin-top: 10px;
  }

  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`);

export const RepositoryLanguageIcon = styled('img')`
  width: 25px;
`;

export const RepositoryId = styled(Typography)(({ theme }) => `
  font-size: 12px;
  color: ${theme.palette.secondary.main};
  text-shadow: 0 0 2px ${theme.palette.secondary.main};
`);

export const RepositorySize = styled(Typography)(({ theme }) => `
  font-size: 12px;
`);

export const RepositoryTitle = styled(Typography)(({ theme }) => `
  color: ${theme.palette.action.active};
  font-weight: bold;
  font-size: 13.5px;
`);

export const RepositoryRow = styled(Grid)`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;

  svg {
    margin-right: 5px;
  }
`;
