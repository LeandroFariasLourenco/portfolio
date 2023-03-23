import { Grid, styled } from '@mui/material';

export const TypewriterWrapper = styled(Grid)<{
  timer?: number;
}>(({ timer }) => `
  .Typewriter__cursor {
    font-size: 0;
  }
`);
