import { Grid, styled } from '@mui/material';
import { mixins } from 'src/styles/utils';

export const FormationTabs = styled(Grid)(({ theme }) => `
  border: 2px solid ${theme.palette.action.active};
  border-bottom: 0;
  position: relative;

  svg {
    opacity: 1;
    transform: scale(1.3) !important;
  }

  ${theme.breakpoints.down('md')} {
    overflow-x: auto;
    overflow-y: hidden;
    padding-bottom: 5px;
    scroll-snap-type: x mandatory;
    ${mixins.scrollbarStyle({ backgroundThumbColor: theme.palette.action.active, backgroundTrackColor: theme.palette.background.paper, height: '2px' })};
  }
`);

export const FormationTab = styled(Grid)(({ theme }) => `
  transition: background-color 200ms ease-in-out;
  padding: 10px 0;
  background-color: ${theme.palette.background.default};
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
  background-color: rgba(28, 22, 48, 0.87);
  border: 2px solid ${theme.palette.action.active};
  border-top: 0;
  padding: 20px;

  ${theme.breakpoints.down('md')} {
    padding: 10px;
  }
`);

export const FormationWrapper = styled(Grid)`
  position: relative;
  ${({ theme }) => theme.breakpoints.up('md')} {
    height: 815px;
  }
`;
