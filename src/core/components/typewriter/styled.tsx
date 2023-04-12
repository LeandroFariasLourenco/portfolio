import { Grid, styled } from '@mui/material';

export const TypewriterWrapper = styled(Grid)`
  .Typwriter__cursor {
    transition: font-size 200ms ease-in-out;
  }

  &.is--finished {
    .Typewriter__cursor {
      font-size: 0;
    }
  }
`;
