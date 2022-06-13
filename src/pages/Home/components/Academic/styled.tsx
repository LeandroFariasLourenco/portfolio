import {
  Box, Card, Grid, Typography,
} from '@mui/material';
import styled from 'styled-components';

export const SwiperContainer = styled(Box)(({ theme }) => `
  .swiper {
    &-slide {
      height: 350px;
      border-radius: 10px;
      position: relative;
      overflow: hidden;
      transition: background-color 200ms ease-in-out;

      &.selected {
        background-color: ${theme.palette.action.active};
      }
    }
    
    &-wrapper {
      margin-top: 40px;
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
        }
      }
    }
  }
`);

export const AcademicCard = styled(Card)`
  height: 350px;
  padding: 20px;
`;

export const AcademicHeader = styled(Grid)`
  height: 90px;
`;

export const AcademicTitle = styled(Typography)`
  text-align: center;
`;

export const AcademicRow = styled(Grid)`
  & + & {
    margin-top: 10px;
  }

  svg {
    margin-right: 10px;
  }
`;
