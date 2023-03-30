import {
  Box, Grid, keyframes, styled,
} from '@mui/material';
import { getBucketResource } from 'src/core/functions';
import { mixins } from 'src/styles/utils';

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
  margin-top: 30px;
`);

export const TabContainer = styled(Grid)(({ theme }) => `
  cursor: pointer;
  transition: background-color 250ms ease-in-out;
  background-color: ${theme.palette.background.paper};
  padding: 10px;

  &:hover {
    background-color: ${theme.palette.action.hover};
  }

  &.selected {
    background-color: ${theme.palette.secondary.main};
  }

  &:not(&:last-of-type) {
    border-right: 2px dashed ${theme.palette.secondary.main};
  }
`);

export const StackLogo = styled('img')`
  object-fit: contain;
  width: 130px;
  max-height: 65px;
`;

export const TechnologyWrapper = styled(Box)``;

export const SectionWrapper = styled(Grid)`
  ${mixins.linearGradientBackground({
    backgroundImage: getBucketResource('/wallpapers/developer.png'),
    gradientColor: 'linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75))',
  })}
`;

export const TechnologyTabContainer = styled(Grid)`
  transition: transform 500ms ease-in-out;

  &.selected {
    animation: ${changeTechnologyTab};
    animation-fill-mode: forwards;
    animation-duration: 400ms;
  }

  &:not(&.selected) {
    position: absolute;
    opacity: 0;
  }
`;
