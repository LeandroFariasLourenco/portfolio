import { css } from 'styled-components';

export const mixins = {
  scrollbarStyle({
    height,
    backgroundThumbColor,
    backgroundTrackColor,
  }: { height: string; backgroundThumbColor: string, backgroundTrackColor: string }) {
    return css`
      &::-webkit-scrollbar {
        width: 10px;
        height: ${height};
      }
      &::-webkit-scrollbar-thumb {
        background-color: ${backgroundThumbColor};
      }
      &::-webkit-scrollbar-thumb:hover {
        background-color: ${backgroundThumbColor};
      }
      &::-webkit-scrollbar-track {
        background: ${backgroundTrackColor};
      }
    `;
  },

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
    return css`
      background-image: url(${backgroundImage});
      position: relative;
      z-index: 1;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      background-attachment: fixed;
      @supports (-webkit-overflow-scrolling: touch) {
        background-attachment: scroll;
      }

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
    `;
  },
};
