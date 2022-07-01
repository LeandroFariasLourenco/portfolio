import { Grid, styled } from '@mui/material';

export const TimelineWrapper = styled(Grid)(({ theme }) => `
  .landmark-date {
    font-size: 26px !important;
    font-family: 'Share Tech Mono', monospace;
    text-shadow: 0 0 2px ${theme.palette.primary.main};
    color: ${theme.typography.body1.color};
    margin: -10px 10px 0 10px;
  }

  .background-canvas {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
`);

// export const TimelineParticlesContainer = styled(Box)``;
