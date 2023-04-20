import { Box, styled } from '@mui/material';

export const SwiperControls = styled(Box)(({ theme }) => `
  &.horizontal {
    .swiper {
      &-button {
        &-next {
          bottom: -40px;
          top: unset;
        }
        
        &-prev {
          top: -20px;
          bottom: unset;
        }

        &-next,
        &-prev {
          left: 50%;
          right: 0;
          transform: translateX(-50%) rotate(90deg);
        }
      }

      &-pagination {
        left: -36px;
        top: 50%;
        transform: translateY(-50%);

        &-bullet {
          margin-bottom: 20px;

          &:not(&:last-of-type) {
            &::before {
              width: 5px;
              height: 35px;
              left: 50%;
              bottom: -35px;
              transform: translateX(-50%);
            }
          }
        }
      }
    }
  }

  &.vertical {
    .swiper {
      &-button {
        &-next {
          right: -4px;
        }

        &-prev {
          left: -4px;
        }
      }

      &-pagination {
        display: flex;
        left: 50%;
        bottom: -6px;
        transform: translateX(-50%);

        &-bullet {
          margin-right: 10px;
          
          &:not(&:last-of-type) {
            &::before {
              width: 30px;
              left: 100%;
              top: 50%;
              transform: translateY(-50%);
              height: 5px;
            }
          }
        }
      }
    }
  }

  .swiper {
    &-pagination {
      position: absolute;

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

        &:not(&:last-of-type) {
          &::before {
            content: '';
            display: block;
            position: absolute;
            transition: background-color 500ms ease-in-out;
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
      &-next,
      &-prev {
        &.disabled {
          display: none;
        }
        
        &::after,
        &::before {
          font-size: 32px;
          color: ${theme.palette.primary.main};
        }
      }

      &-disabled {
        display: none;
      }
    }
  }  
`);
