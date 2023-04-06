import {
  Box, Card, Grid, keyframes, styled, Typography,
} from '@mui/material';

const shutdownAnimation = keyframes`
  from {
    transform: scaleX(1);
  }

  to {
    transform: scaleX(0);
  }
`;

export const TerminalComponentWrapper = styled(Grid)`
  ${(({ theme }) => theme.breakpoints.down('md'))} {
    width: 100%;
  }

  &.closed {
    animation-delay: 500ms;
    animation: ${shutdownAnimation} 500ms forwards;
  }
`;

export const TypeWriterBackground = styled(Card)(({ theme }) => `
  background-color: #1E1E1E;
  border-radius: 5px;
  max-width: 600px;
  
  ${theme.breakpoints.down('md')} {
    width: 95%;
    margin: 0 auto;
  }
`);

export const TerminalHeading = styled(Grid)`
  background-color: #4A4A4A;
  padding: 5px 10px;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background-color: black;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

export const TerminalWrapper = styled(Box)`
  border: 1px solid black;
  border-radius: 5px;
  overflow: hidden;
  opacity: 0.35;
  transition: opacity 200ms ease-in-out;
  
  &:not(.is--focused) {
    pointer-events: none;
  }

  &.is--focused {
    opacity: 1;
    pointer-events: unset;
  }
`;

export const TerminalContent = styled(Grid)`
  padding: 5px 10px;
  height: 300px;
  overflow-y: auto;

  .Typewriter__cursor {
    font-weight: bold;
  }
`;

export const TerminalPrefixText = styled(Typography)(({ theme }) => `
  color: ${theme.palette.grey[300]};
  margin-right: 5px;
  display: flex;
  /* align-items: center; */

  > svg {
    margin-left: -8px;
    margin-right: 8px;
    width: 15px;
    margin-top: 5px;
  }
`);

export const TerminalText = styled(Typography)`
  display: flex;

  &.is--current--line {
    &::after {
      content: "|"
    }
  }
`;

export const TerminalRow = styled(Grid)`
  display: flex;
  /* white-space: pre; */
`;

export const TerminalTitleContainer = styled(Grid)``;

export const TerminalTitle = styled(Typography)(({ theme }) => `
  color: ${theme.palette.grey[400]};
  margin-left: 5px;
`);

export const TerminalWindowCircles = styled(Grid)`
  &:hover {
    .hover-icon {
      opacity: 1;
    }
  }
`;

export const TerminalWindowCircle = styled(Box)<{
  $color: string;
}>(({ $color }) => `
  background-color: ${$color};
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
`);

export const TerminalWindowWrapper = styled(Box)`
  position: relative;
  width: 17px;
  height: 17px;
  overflow: hidden;
  isolation: isolate;
  border-radius: 100%;
  margin-right: 10px;

  .hover-icon {
    opacity: 0;
    position: absolute;
    top: 3px;
    right: 3px;
    bottom: 3px;
    left: 3px;
    width: unset;
    height: unset;

    &.rotate {
      transform: rotate(90deg);
    }
  }
`;
