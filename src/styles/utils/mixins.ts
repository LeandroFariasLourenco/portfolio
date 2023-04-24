import { css, keyframes } from '@mui/material';

export const mixins = {
  flexCentered: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  pulseAnimation: keyframes`
  to {
    transform: scale(1.5);
    opacity: 0;
  }
  `,
  pulseStyle: css`
    z-index: 1;
    cursor: pointer;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: ${({ theme }) => theme.palette.primary.main};
      animation-duration: 2s;
      animation-iteration-count: infinite;
      z-index: -1;
      pointer-events: none;
    }

    &::before {
      animation-delay: 1s;
    }
  `,
  arrowDownAnimation: keyframes`
    from {
      transform: translateY(0);
      opacity: 1;
    }

    to {
      transform: translateY(90%);
      opacity: 0;
    }
  `,
  scrollbarStyle: ({
    height,
    backgroundThumbColor,
    backgroundHoverColor,
    backgroundTrackColor,
  }: {
    height: string;
    backgroundThumbColor: string;
    backgroundTrackColor: string;
    backgroundHoverColor?: string;
  }) => `
      &::-webkit-scrollbar {
        width: 8px;
        height: ${height};
      }
      &::-webkit-scrollbar-thumb {
        background-color: ${backgroundThumbColor};
      }
      &::-webkit-scrollbar-thumb:hover {
        background-color: ${backgroundHoverColor || backgroundThumbColor};
      }
      &::-webkit-scrollbar-track {
        background: ${backgroundTrackColor};
      }
    `,
  visibilityTransition: css`
    transition: all 200ms ease-in-out;
    opacity: 0;
    visibility: hidden;
    
    &.is--visible {
      opacity: 1;
      visibility: unset;
    }
  `,

  linearGradientBackground({
    backgroundImage,
    gradientColor,
  }: { backgroundImage: string; gradientColor: string; }) {
    return css(({ theme }) => `
      ${theme.breakpoints.up('md')} {
        background-image: url(${backgroundImage});
        position: relative;
        z-index: 1;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;

        > * {
          z-index: 3;
        }

        &::before {
          content: '';
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 2;
          background-image: ${gradientColor};
        }
      }
    `);
  },
};
