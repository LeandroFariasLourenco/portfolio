import {
  Box, Button, Card, Grid, Typography,
} from '@mui/material';
import styled, { keyframes } from 'styled-components';

const rotationKeyframe = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled(Grid)`
  
`;

export const CurrentExperience = styled(Typography)`
  position: absolute;
  top: 5px;
  left: -26px;
  background-color: ${({ theme }) => theme.palette.primary.main};
  display: block;
  z-index: 1;
  transform: rotate(-45deg);
  font-size: 20px;
  color: white;
  padding: 5px 30px;
  text-shadow: 0 0 2px black;
`;

export const SwiperContainer = styled(Grid)(({ theme }) => `
  position: relative;
  margin-top: 40px;

  .swiper {
    &-slide {
      position: relative;
      overflow: hidden;

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

    &-pagination {
      top: 50%;
      left: -40px;
      bottom: unset;
      right: unset;
      transform: translateY(-50%);
      display: flex;
      flex-flow: column;

      &-bullet {
        width: 25px;
        height: 25px;
        border: 1px solid ${theme.palette.secondary.main};
        opacity: 1;
        padding: 2px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;

        &.first {
          border-color: ${theme.palette.primary.main};

          &.filled {
            &::after {
              background-color: ${theme.palette.primary.main};
            }
          }
        }

        &:not(&:first-of-type) {
          margin-top: 35px;
        }

        &:not(&:last-of-type) {
          &::before {
            content: '';
            display: block;
            position: absolute;
            width: 5px;
            transition: background-color 500ms ease-in-out;
            bottom: -35px;
            left: 50%;
            transform: translateX(-50%);
            height: 34px;
          }
        }

        &.filled {
          &::before {
            background-color: ${theme.palette.secondary.main};
          }

          &::after {
            content: '';
            display: block;
            width: 100%;
            height: 100%;
            border-radius: 100%;
            background-color: ${theme.palette.secondary.main}
          }
        }
      }
    }

    &-button {
      &-prev,
      &-next {
        &::after {
          color: ${theme.palette.primary.main};
          font-size: 32px;
          font-weight: bold;
        }
      }

      &-prev,
      &-next {
        right: unset;
        top: unset;

        left: 50%;
      }

      &-prev {
        top: -20px;
        transform: translateX(-50%) rotate(90deg);
      }

      &-next {
        bottom: -50px;
        transform: translateX(-50%) rotate(90deg);
      }
    }
  }
`);

export const ExperienceAnimatedBorder = styled(Box)<{
  color: string;
}>(({ color }) => `
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
  background-color: ${color};
`);

export const SeemoreButton = styled(Button)``;

export const ExperienceContainer = styled(Grid)(({ theme }) => `
  position: relative;
  height: 550px;
  overflow: hidden;
  border-radius: 10px;
`);

export const ExperienceAnimatedContainer = styled(Box) <{
  $index: number;
  $direction: 'left' | 'right';
}>`
  width: 150%;
  height: 150%;
  animation-delay: ${({ $index }) => $index * 2}s;
  animation-name: ${rotationKeyframe};
  animation-duration: 40s;
  animation-direction: ${({ $index }) => ($index % 2 === 0 ? 'normal' : 'reverse')};
  /* animation-direction: ${({ $direction }) => ($direction === 'left' ? 'normal' : 'reverse')}; */
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
