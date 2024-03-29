import {
  Box, Button, Grid, keyframes, styled,
} from '@mui/material';

const rotationKeyframe = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const ExperienceContainer = styled(Grid)`
  background-color: rgba(28, 22, 48, 0.70);

  .background-canvas {
    opacity: 0.30;
  }
`;

export const ExperienceAnimatedBorder = styled(Box)<{
  color: string;
}>(({ color }) => `
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
  background-color: ${color};
`);

export const ExperienceAnimatedContainer = styled(Box) <{
  $index: number;
  $direction: 'left' | 'right';
}>`
  width: 150%;
  height: 150%;
  position: absolute;
  z-index: -1;
  animation-name: ${rotationKeyframe};
  animation-duration: 40s;
  animation-direction: ${({ $direction }) => ($direction === 'left' ? 'normal' : 'reverse')};
  animation-iteration-count: infinite;

  ${ExperienceAnimatedBorder} {
    &:first-child {
      transform: translate(-50%, -50%);
    }

    &:last-child {
      transform: translate(50%, -50%);
    }
  }
`;

export const SwiperContainer = styled(Grid)(({ theme }) => `
  position: relative;
  margin-top: 40px;

  .swiper {
    &-slide {
      position: relative;
      overflow: hidden;

      &:not(.swiper-slide-active) {
        ${ExperienceAnimatedContainer} {
          display: none;
        }
      }

      ${theme.breakpoints.up('md')} {
        &::before {
          content: '""';
          position: absolute;
          display: block;
          width: 90%;
          height: 175px;
          border: 2px dashed ${theme.palette.secondary.main};
          padding: 5px;
          background-color: ${theme.palette.secondary.main};
          background-clip: content-box;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: -1;
        }
      }
    }
  }
`);

export const SeemoreButton = styled(Button)``;
