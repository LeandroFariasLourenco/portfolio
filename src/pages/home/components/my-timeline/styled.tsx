import { Grid, styled, Box } from '@mui/material';
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

export const TimelineWrapper = styled(Grid)(({ theme }) => `
  .landmark-date {
    font-size: 26px !important;
    font-family: 'Share Tech Mono', monospace;
    text-shadow: 0 0 2px ${theme.palette.primary.main};
    color: ${theme.typography.body1.color};
    margin: -10px 10px 0 10px;
  }

  ${theme.breakpoints.down('md')} {
    overflow-x: hidden;
  }

  svg {
    opacity: 1 !important;
  }
`);
