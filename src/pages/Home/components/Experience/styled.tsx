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

export const ExperienceCard = styled(Card)`
  padding: 16px;
  height: 98%;
  width: 98%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: background-color 500ms ease-in-out;
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
`;

export const SwiperContainer = styled(Box)(({ theme }) => `
  position: relative;

  .swiper {
    &-slide {
      height: 350px;
      border-radius: 10px;
      position: relative;
      overflow: hidden;
      transition: background-color 200ms ease-in-out;

      &.selected {
        background-color: ${theme.palette.action.active};

       ${ExperienceCard} {
         background-color: ${theme.palette.primary.main};
       }
      }
    }
    
    &-wrapper {
      margin-top: 40px;
      padding-bottom: 30px;
    }

    &-pagination {
      &-bullet {
        width: 12px;
        height: 12px;
        background-color: ${theme.palette.secondary.main};

        &-active {
          background-color: ${theme.palette.primary.main}
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

      &-prev {
        left: -45px;
      }

      &-next {
        right: -45px
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

export const ExperienceCardContent = styled(Grid)``;

export const ExperienceTitle = styled(Typography)`
  text-align: center;
  height: 60px;
`;

export const ExperienceHeader = styled(Grid)``;

export const SeemoreButton = styled(Button)``;

export const ExperienceTopic = styled(Grid)`
  margin-top: 16px;

  svg {
    margin-right: 10px;
  }
`;

export const ExperienceAnimatedContainer = styled(Box) <{
  index: number;
}>`
  width: 100%;
  height: 100%;
  animation-delay: ${({ index }) => index * 2}s;
  animation-name: ${rotationKeyframe};
  animation-duration: 40s;
  animation-direction: ${({ index }) => (index % 2 === 0 ? 'normal' : 'reverse')};
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
