import { Grid } from '@mui/material';
import styled from 'styled-components';

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
