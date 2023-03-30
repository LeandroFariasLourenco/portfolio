import { Box } from '@mui/material';
import styled from 'styled-components';

export const SwipeAnimationOverlay = styled(Box)`
  background-color: rgba(0,0,0,0.2);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: all 200ms ease-in-out;
  visibility: hidden;
  opacity: 0;
  z-index: 1;

  svg {
    opacity: 0.85;
  }

  &.is--open {
    visibility: unset;
    opacity: 1;
    z-index: 2;
  }
`;
