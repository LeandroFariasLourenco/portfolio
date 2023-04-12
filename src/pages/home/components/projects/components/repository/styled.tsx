import { Grid, Typography } from '@mui/material';
import styled from 'styled-components';

export const RepositoryContainer = styled('a')(({ theme }) => `
  transition: 200ms opacity ease-in-out;
  display: block;
  border: 1px solid ${theme.palette.action.active};
  scroll-snap-align: center;
  z-index: 3;
  
  ${theme.breakpoints.up('md')} {
    padding: 5px;
    opacity: 0.45;
    width: 100%;

    & + & {
      margin-top: 10px;
    }
  }

  ${theme.breakpoints.down('md')} {
    padding: 5px 10px;
    min-width: 175px;
    margin-right: 10px;
    opacity: 0.75;
  }

  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`);

export const RepositoryLanguageIcon = styled.img`
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
  white-space: nowrap;
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
