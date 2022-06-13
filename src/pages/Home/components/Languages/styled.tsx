import { Grid, styled } from '@mui/material';

export const TabContainer = styled(Grid) <{
  selected: boolean;
}>`
  transition: background-color 500ms ease-in-out;
  background-color: ${({ selected, theme }) => (selected ? theme.palette.secondary.main : theme.palette.background.paper)};
  cursor: pointer;
`;
