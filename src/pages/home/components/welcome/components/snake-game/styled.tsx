import {
  Box, Button, Card, Grid, Typography,
} from '@mui/material';
import { mixins } from 'src/styles/utils';
import styled, { css, keyframes } from 'styled-components';

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

export const Wrapper = styled(Box)<{ $closeTimer: number }>(({ theme, $closeTimer }) => css`
  ${theme.mixins.flexCentered};
  width: 700px;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  animation: ${showGameAnimation} 2s forwards;

  &.closed {
    animation-delay: 500ms;
    animation: ${closeAnimation} ${$closeTimer}ms forwards;
  }
`);

export const GobackButton = styled(Button)`
  margin-top: 30px;
`;

export const CanvasContainer = styled(Box)`
  position: relative;
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

export const FooterContainer = styled(Card)`
  display: flex;
  margin: 60px 0;
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
  padding: 20px 40px;
`;

export const FooterSection = styled(Grid)``;

export const Command = styled(Grid)`
  ${mixins.flexCentered};
`;

export const CommandKey = styled(Typography)`
  ${mixins.flexCentered};
  border: 2px solid ${({ theme }) => theme.palette.primary.main};
  padding: 5px 10px;
  margin: 5px 20px;
  white-space: nowrap;
`;

export const ScoreText = styled(Typography)`
  margin: 10px 0 15px;
  white-space: nowrap;
`;

export const GameoverText = styled(Typography)``;

export const PauseText = styled(Typography)`
  animation: 2s infinite ${pausedAnimation} alternate ease-in-out;
`;
