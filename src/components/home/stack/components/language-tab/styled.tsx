import { Grid, styled } from '@mui/material';

export const StackLogo = styled('img')(({ theme }) => `
  object-fit: contain;
  width: 130px;
  max-height: 65px;

  ${theme.breakpoints.down('md')} {
    max-width: 55px;
  }
`);

export const TabContainer = styled(Grid)(({ theme }) => `
  cursor: pointer;
  transition: background-color 250ms ease-in-out;
  background-color: ${theme.palette.background.default};
  padding: 10px;

  ${theme.breakpoints.down('md')} {
    padding: 10px;
  }

  &:not(:last-of-type) {
    border-right: 2px dashed ${theme.palette.action.active};
  }

  &:hover {
    background-color: ${theme.palette.action.hover};
  }

  &:not(.open) {
    border-bottom: 2px solid ${theme.palette.action.active};
  }

  &.open {
    background-color: ${theme.palette.action.focus};
  }
`);
