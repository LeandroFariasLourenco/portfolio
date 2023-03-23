import { ArrowDownward } from '@mui/icons-material';
import {
  Card, Grid, keyframes, styled, Typography,
} from '@mui/material';

export const Wrapper = styled(Grid)`
  padding-top: 80px;
  position: relative;
  height: 100vh;
`;

export const ProfileImage = styled('img')`
  border-radius: 100%;
  width: 260px;

  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 185px;
    margin: 0 auto;
    display: block;
  }
`;

export const TypeWriterBackground = styled(Card)`
  background-color: #1E1E1E;
  border-radius: 5px;
  max-width: 600px;
`;

export const TerminalHeading = styled(Grid)`
  background-color: #4A4A4A;
  padding: 5px 10px;
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

export const TerminalContent = styled(Grid)`
  padding: 5px 10px;

  .Typewriter__cursor {
    font-weight: bold;
  }
`;

export const TerminalText = styled(Typography)(({ theme }) => `
  color: ${theme.palette.grey[300]};
  margin-right: 5px;
`);

export const TerminalRow = styled(Grid)`
  display: flex;
`;

export const TerminalTitleContainer = styled(Grid)``;

export const TerminalTitle = styled(Typography)(({ theme }) => `
  color: ${theme.palette.grey[400]};
  margin-left: 5px;
`);

export const TerminalWindowCircles = styled(Grid)``;

export const TerminalWindowCircle = styled('div')<{
  $color: string;
}>(({ $color }) => `
  border-radius: 100%;
  width: 17px;
  height: 17px;
  background-color: ${$color};
  margin-right: 10px;
`);

const arrowDownAnimation = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }

  to {
    transform: translateY(90%);
    opacity: 0;
  }
`;

export const ArrowDown = styled(ArrowDownward)`
  animation: ${arrowDownAnimation} 1.5s ease-in-out alternate-reverse infinite;
`;

const pulse = keyframes`
  to {
    transform: scale(1.5);
    opacity: 0;
  }
`;

export const ArrowDownContainer = styled(Grid)`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${({ theme }) => theme.palette.primary.main};
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7.5px;
  cursor: pointer;
  transition: background-color 200ms ease-in-out;

  &::before,
  &::after {
    content: '';
    border-radius: 100%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.palette.primary.main};
    animation-name: ${pulse};
    animation-duration: 2s;
    animation-iteration-count: infinite;
    z-index: -1;
  }


  &::before {
    animation-delay: 1s;
  }

  &:hover {
    background-color: ${({ theme }) => theme.palette.secondary.main};
    ${ArrowDown} {
      animation-name: inherit;
    }
  }
`;
