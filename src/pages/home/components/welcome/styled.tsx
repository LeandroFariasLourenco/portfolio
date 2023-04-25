import { ArrowDownward } from '@mui/icons-material';
import {
  Button,
  Card, css, Grid, keyframes,
} from '@mui/material';
import { mixins } from 'src/styles/utils';
import styled from 'styled-components';

export const Wrapper = styled(Grid)`
  position: relative;
  min-height: 100vh;
  position: relative;
  background-color: rgb(28, 22, 48);

  ${({ theme }) => theme.breakpoints.down('md')} {
    padding-bottom: 40px;
  }
`;

export const ProfileImage = styled.img<{ $width: number; }>(({ theme, $width }) => `
  --frame-size: 15px;
  --border-thickness: 2px;
  --width: ${$width}px;
  --color: ${theme.palette.primary.main};
  --gradient-color: var(--color) var(--border-thickness),#0000 0 calc(100% - var(--border-thickness)),var(--color) 0;
  
  min-height: 165px;
  width: var(--width);
  padding: calc(2*var(--frame-size));
  filter: brightness(0.75) drop-shadow(2px 4px 6px ${theme.palette.secondary.main}) grayscale(0.88);
  background:
    linear-gradient(      var(--gradient-color)) 50%/100% var(--_i,100%) no-repeat,
    linear-gradient(90deg,var(--gradient-color)) 50%/var(--_i,100%) 100% no-repeat;
  outline: calc(var(--width)/2) solid #0005;
  outline-offset: ${-($width)}px;
  transition: 400ms;
  cursor: pointer;
  margin: 0 auto;
  display: block;

  &.focused {
    filter: brightness(0.85) drop-shadow(2px 4px 6px ${theme.palette.secondary.main}) grayscale(0.25);
    outline: var(--border-thickness) solid var(--color);
    outline-offset: calc(var(--frame-size)/-2);
    --_i: calc(100% - 2*var(--frame-size));
  }
`);

export const ArrowDown = styled(ArrowDownward)`
  animation: ${mixins.arrowDownAnimation} 1.5s ease-in-out alternate-reverse infinite;
  transition: transform 200ms ease-in-out;
`;

export const TerminalComponentWrapper = styled(Grid)(({ theme }) => `
  ${theme.breakpoints.down('md')} {
    width: 100%;
  }
`);

const hide = keyframes`
  to {
    max-height: 0;
    max-width: 0;
  }
`;

export const WelcomeContainer = styled(Grid)<{ $animationTimer: number }>(({ $animationTimer }) => css`
  z-index: 1;
  transition: opacity ${$animationTimer}ms ease-in-out;
  max-width: 1200px;

  ${({ theme }) => theme.breakpoints.up('md')} {
    padding: 0 20px;
  }

  &.playing {
    opacity: 0;
    animation: ${hide} forwards;
    animation-delay: 1s;
  }
`);

export const ArrowDownContainer = styled(Grid)`
  ${mixins.visibilityTransition};
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
  ${mixins.pulseStyle};

  &:not(:hover) {
    &::after {
      animation-name: ${mixins.pulseAnimation};
    }
  }

  &::after {
    border-radius: 100%;
  }
  
  &:hover {
    background-color: ${({ theme }) => theme.palette.secondary.main};
    ${ArrowDown} {
      animation-name: inherit;
    }
  }
`;

export const FpsContainer = styled(Grid)`
  position: absolute;
  right: 10px;
  bottom: 10px;
  ${mixins.visibilityTransition};
`;

export const FpsOption = styled(Button)(({ theme }) => `
  border: 1px solid ${theme.palette.primary.main};
  padding: 5px 7.5px;
  border-radius: 0;
  background-color: ${theme.palette.background.default};
  cursor: pointer;
  transition: background-color 200ms ease-in-out;
  z-index: 1;

  &.current {
    background-color: ${theme.palette.background.paper};
  }
`);
