import {
  Box, Button, Card, Grid, Typography, css, keyframes,
} from '@mui/material';
import { mixins } from 'src/styles/utils';
import styled from 'styled-components';

const closeAnimation = keyframes`
  from {
    opacity: 1;
    transform: scaleX(1);
  }

  to {
    opacity: 0;
    transform: scaleX(0);
  }
`;

const showGameAnimation = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const Wrapper = styled(Grid)<{ $closeTimer: number }>(({ theme, $closeTimer }) => css`
  ${mixins.flexCentered};
  animation: ${showGameAnimation} 2s forwards;
  z-index: 1;

  &.closed {
    animation-delay: 500ms;
    animation: ${closeAnimation} ${$closeTimer}ms forwards;
  }
`);

export const FooterWrapper = styled(Grid)`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const GobackButton = styled(Button)`
  margin-top: 30px;
`;

const rotateAnimation = keyframes`
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg)
  }
`;

export const CanvasContainer = styled(Box)`
  position: relative;
  overflow: hidden;
  padding: 5px;
  box-shadow: 0 0 5px orange;

  &::after {
    position: absolute;
    content: '';
    display: block;
    background-image: linear-gradient(45deg, #ff0000, #ffa500, #ef3a22);
    filter: blur(30px);
    left: -10px;
    top: -10px;
    width: 100%;
    height: 100%;
    z-index: -1;
    animation-name: ${rotateAnimation};
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-duration: 10s;
  }
`;

export const Canvas = styled.canvas`
`;

const pausedAnimation = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const OverlayContainer = styled(Grid)`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0,0,0,0.9);
  z-index: 1;
  top: 0;
  left: 0;

  &:not(.show) {
    display: none;
  }
`;

export const CommandWrapper = styled(Grid)`
  ${mixins.flexCentered};
  flex-flow: column;
`;

export const CommandLine = styled(Grid)`
  display: flex;
`;

export const GameinfoContainer = styled(Card)`
  display: flex;
  flex-flow: column;
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
  padding: 30px;
`;

export const GameinfoSection = styled(Grid)``;

export const Command = styled(Grid)`
  ${mixins.flexCentered};
  flex: 1;
`;

export const CommandKey = styled(Typography)`
  ${mixins.flexCentered};
  border: 2px solid ${({ theme }) => theme.palette.primary.main};
  padding: 5px 10px;
  margin: 5px 20px;
  white-space: nowrap;
`;

export const ScoreText = styled(Typography)`
  margin-bottom: 20px;
  text-align: center;
  white-space: nowrap;
`;

export const GameoverText = styled(Typography)``;

export const PauseText = styled(Typography)`
  animation: 2s infinite ${pausedAnimation} alternate ease-in-out;
`;
