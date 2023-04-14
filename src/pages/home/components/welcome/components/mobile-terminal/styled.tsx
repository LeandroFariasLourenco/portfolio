import {
  Card, Grid, Typography,
} from '@mui/material';
import { mixins } from 'src/styles/utils';
import styled from 'styled-components';

export const TerminalHeading = styled(Grid)`
  background-color: rgba(74, 74, 74, 0.1);
  padding: 12px 10px 0 10px;
  border-radius: 5px 5px 0 0;
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

export const TerminalComponentWrapper = styled(Grid)`
  width: 100%;
  opacity: 0.50;
  max-width: 525px;

  &.is--focused {
    opacity: 1;
    pointer-events: unset;
  }
`;

export const TypeWriterBackground = styled(Card)(({ theme }) => `
  background-color: #1E1E1E;
  border-radius: 5px;
  max-width: 600px;
  width: 95%;
  margin: 0 auto;
`);

export const TerminalContent = styled(Grid)`
  padding: 5px 10px;
  background-color: black;

  .Typewriter__cursor {
    font-weight: bold;
  }
`;

export const TerminalWrapper = styled(Grid)`
  border: 1px solid black;
`;

export const TerminalTabIcon = styled.img`
  width: 20px;
  margin: 2px 10px 2px 2px;
`;

export const TerminalTab = styled(Grid)`
  align-items: center;
  padding: 5px;
  margin-bottom: 0;
  max-width: 160px;
  background-color: black;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  overflow: hidden;
  isolation: isolate;
  position: relative;
`;

export const TerminalTabClose = styled(Grid)`
  background-color: black;
  padding: 4px;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  ${mixins.flexCentered};
`;

export const TerminalTabCommandPrefix = styled(Typography)(({ theme }) => `
  font-size: 14px;
  color: white;
  margin-right: 5px;
`);

export const TerminalTabText = styled(Typography)(({ theme }) => `
  color: white;
  white-space: nowrap;
  font-size: 14px;
`);

export const TerminalText = styled(Grid)`
  font-size: 12px;
`;

export const TerminalTextUser = styled(Typography)`
  font-size: 12px;
  color: #4a9206;
`;

export const TerminalTextCPU = styled(Typography)`
  font-size: 12px;
  color: #644469;
  margin: 0 5px;
`;

export const TerminalTextPath = styled(Typography)`
  color: #c4a000;
  font-size: 12px;
`;

export const TerminalIconContainer = styled(Grid)`
  ${mixins.flexCentered};
  height: 100%;
  padding: 8px 10px;
  transition: background-color 200ms ease-in-out;

  &:hover {
    background-color: rgba(0,0,0,0.2);

    &:last-of-type {
      background-color: rgba(117, 16, 16, 0.75);
    }
  }
`;

export const TerminalRow = styled(Grid)``;

export const TerminalTitleContainer = styled(Grid)``;

export const TerminalTitle = styled(Typography)(({ theme }) => `
  color: ${theme.palette.grey[400]};
  margin-left: 5px;
`);

export const TerminalWindowOptions = styled(Grid)`
  margin-bottom: 10px;
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
`;

export const TerminalWindowCircle = styled('div')<{
  $color: string;
}>(({ $color }) => `
  border-radius: 100%;
  width: 17px;
  height: 17px;
  background-color: ${$color};
  margin-right: 10px;
`);
