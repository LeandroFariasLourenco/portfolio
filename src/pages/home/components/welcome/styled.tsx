import { ArrowDownward } from '@mui/icons-material';
import {
  Card, Grid, keyframes, styled, Typography,
} from '@mui/material';

export const Wrapper = styled(Grid)`
  padding-top: 80px;
  position: relative;
  min-height: 100vh;

  ${({ theme }) => theme.breakpoints.down('md')} {
    padding-bottom: 40px;
  }
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

export const TypeWriterBackground = styled(Card)(({ theme }) => `
  background-color: #1E1E1E;
  border-radius: 5px;
  
  ${theme.breakpoints.down('md')} {
    width: 95%;
    margin: 0 auto;
  }
  
  ${theme.breakpoints.up('md')} {
    max-width: 600px;
  }
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

export const TerminalComponentWrapper = styled(Grid)(({ theme }) => `
  ${theme.breakpoints.down('md')} {
    width: 100%;
  }
`);

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
