import { Box, styled } from '@mui/material';

export const SwiperControls = styled(Box)<{ $paginationLayout?: 'horizontal' | 'vertical' }>(({ theme, $paginationLayout }) => `
  .swiper {
    &-pagination {
      display: ${$paginationLayout === 'vertical' ? 'flex' : 'unset'};
      position: absolute;
      bottom: -6px;
      left: 50%;
      transform: translateX(-50%);

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
        margin-right: 10px;

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
            width: 30px;
            left: 100%;
            top: 50%;
            transform: translateY(-50%);
            height: 5px;
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
      &-next {
        right: -4px;
      }

      &-prev {
        left: -4px;
      }
      
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
