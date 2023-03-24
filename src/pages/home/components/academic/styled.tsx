import { Grid, styled } from '@mui/material';

export const FormationTabs = styled(Grid)(({ theme }) => `
  border: 2px solid ${theme.palette.action.active};
  border-bottom: 0;

  ${theme.breakpoints.down('md')} {
    overflow-x: auto;
    padding-bottom: 5px;

    &::-webkit-scrollbar {
      height: 5px;
    },
    &::-webkit-scrollbar-thumb {
      background-color: ${theme.palette.action.active};
    },
    &::-webkit-scrollbar-thumb:hover {
      background-color: ${theme.palette.action.active};
    },
    &::-webkit-scrollbar-track {
      background: ${theme.palette.background.paper};
    },
  }
`);

export const FormationTab = styled(Grid)(({ theme }) => `
  transition: background-color 200ms ease-in-out;
  padding: 10px 0;
  background-color: #1C1630;
  cursor: pointer;

  ${theme.breakpoints.down('md')} {
    padding: 10px 15px;
  }

  &:not(:last-of-type) {
    border-right: 2px dashed ${theme.palette.action.active};
  }

  &:hover {
    background-color: ${theme.palette.action.hover};
  }

  &:not(.selected) {
    border-bottom: 2px solid ${theme.palette.action.active};
  }

  &.selected {
    background-color: ${theme.palette.action.focus};
  }
`);

export const CardContainer = styled(Grid)(({ theme }) => `
  background-color: #1C1630;
  border: 2px solid ${theme.palette.action.active};
  border-top: 0;
  padding: 20px;

  ${theme.breakpoints.down('md')} {
    padding: 10px;
  }
`);

export const FormationWrapper = styled(Grid)`
  ${({ theme }) => theme.breakpoints.up('md')} {
    height: 815px;
  }
`;
