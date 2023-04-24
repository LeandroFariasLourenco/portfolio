import { Add, ArrowDownward } from '@mui/icons-material';
import {
  Grid, styled, Box, css,
} from '@mui/material';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import { getBucketResource } from 'src/core/functions';
import { mixins } from 'src/styles/utils';

export const TimelineContainer = styled(Box)`
  ${mixins.linearGradientBackground({
    backgroundImage: getBucketResource('/wallpapers/terminal.png'),
    gradientColor: 'linear-gradient(rgba(28, 22, 48, 0.88), rgba(28, 22, 48,0.95))',
  })};
  
  ${({ theme }) => theme.breakpoints.up('md')} {
    background-attachment: fixed;
  }
`;

export const CustomTimelineElement = styled(VerticalTimelineElement)<{
  $background: string;
}>(({ theme, $background }) => `
  .vertical-timeline-element-content {
    background-color: ${theme.palette.background.paper};
    border-bottom: none;
    border-radius: 0;
    padding: 15px;
    box-shadow: 0 0 2px ${$background};

    .landmark-date {
      text-shadow: 0 0 5px ${$background};
    }
  }

  .landmark {
    &-icon {
      background-color: ${$background};
      box-shadow: 0 0 6px ${$background};
      border-radius: 0;
    }

    &-date {
      font-size: 26px !important;
      font-family: 'Share Tech Mono', monospace;
      color: ${theme.typography.body1.color};
      margin: -10px 10px 0 10px;
    }
  }
`);

export const ArrowDown = styled(ArrowDownward)`
  animation: ${mixins.arrowDownAnimation} 1.5s ease-in-out alternate-reverse infinite;
`;

export const ShowMore = styled(Grid)(({ theme }) => css`
  position: relative;
  height: 55px;
  width: 55px;
  background-color: ${theme.palette.primary.main};
  z-index: 1;
  cursor: pointer;
  margin-left: calc(55px / -2);
  margin-top: -15px;
  ${mixins.pulseStyle};

  svg {
    margin: 0 !important;
    position: unset !important;
    top: unset !important;
    left: unset !important;
  }

  &:not(:hover) {
    &::after {
      animation-name: ${mixins.pulseAnimation};
    }
  }

  &:hover {
    background-color: ${({ theme }) => theme.palette.secondary.main};

    ${ArrowDown} {
      animation-name: unset;
    }
  }
`);

export const TimelineWrapper = styled(Grid)(({ theme }) => `
  ${theme.breakpoints.down('md')} {
    overflow-x: hidden;
  }
`);
