import styled, { keyframes } from 'styled-components';

export const CanvasWrapper = styled.div`
  width: 700px;
  height: 500px;
  position: relative;
  ${({ theme }) => theme.mixins.flexCentered};
`;

export const Canvas = styled.canvas``;

const pausedAnimation = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const PausedNotification = styled.div`
  width: 100%;
  height: 40px;
  position: absolute;
  bottom: -60px;
  text-align: center;
  left: 0;
  color: #fff;
  font-weight: 700;
  font-size: 20px;
  letter-spacing: 6px;
  animation-name: ${pausedAnimation};
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;

  &.hidden {
    display: none;
  }
`;
