import { Card, Grid, styled } from '@mui/material';

export const FormationTabs = styled(Grid)(({ theme }) => `
  border: 2px solid ${theme.palette.secondary.main};
  border-bottom: 0;
`);

export const FormationTab = styled(Grid)(({ theme }) => `
  transition: background-color 200ms ease-in-out;
  padding: 10px 0;
  background-color: ${theme.palette.background.paper};
  cursor: pointer;

  &:not(:last-of-type) {
    border-right: 2px dashed ${theme.palette.secondary.main};
  }

  &:hover {
    background-color: ${theme.palette.action.hover};
  }

  &:not(.selected) {
    border-bottom: 2px solid ${theme.palette.secondary.main};
  }

  &.selected {
    background-color: #15e283bc;
  }
`);

export const CardContainer = styled(Grid)(({ theme }) => `
  background-color: ${theme.palette.background.paper};
  height: 500px;
  border: 2px solid ${theme.palette.secondary.main};
  border-top: 0;
  padding: 20px;
`);
