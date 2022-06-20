import { Grid, styled } from '@mui/material';

export const TabWrapper = styled(Grid)(({ theme }) => `
  border: 2px solid ${theme.palette.secondary.main};
`);

export const TabContainer = styled(Grid)<{
  selected: boolean;
}>(({ theme, selected }) => `
  cursor: pointer;
  transition: background-color 500ms ease-in-out;
  background-color: ${selected ? theme.palette.secondary.main : theme.palette.background.paper};
  padding: 10px;

  &:not(&:last-of-type) {
    border-right: 2px dashed ${theme.palette.secondary.main};
  }
`);
