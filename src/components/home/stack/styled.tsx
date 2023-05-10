import {
  Box, Grid, keyframes, styled,
} from '@mui/material';
import { mixins } from '@/shared/styles/utils';

const changeTechnologyTab = keyframes`
  from {
    transform: translateX(70%);
  }

  60% {
    transform: translateX(-2%);
  }

  to {
    transform: translateX(0);
  }
`;

export const StackWrapper = styled(Grid)(({ theme }) => `
  border: 2px solid ${theme.palette.secondary.main};
  border-bottom: 0;
  margin-top: 30px;

  ${theme.breakpoints.down('md')} {
    position: relative;
    flex-flow: row nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
    ${mixins.scrollbarStyle({ backgroundThumbColor: theme.palette.action.active, backgroundTrackColor: theme.palette.background.paper, height: '2px' })};
    padding-bottom: 5px;
  }
`);

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

  &:not(.selected) {
    border-bottom: 2px solid ${theme.palette.action.active};
  }

  &.selected {
    background-color: ${theme.palette.action.focus};
  }
`);

export const TechnologyWrapper = styled(Box)``;

export const SectionWrapper = styled(Grid)`
  background-color: rgba(28, 22, 48, 0.55);
`;

export const TechnologyTabContainer = styled(Grid)`
  transition: transform 500ms ease-in-out;

  &.selected {
    animation: ${changeTechnologyTab};
    animation-fill-mode: forwards;
    animation-duration: 400ms;
  }

  &:not(&.selected) {
    display: none;
  }
`;
