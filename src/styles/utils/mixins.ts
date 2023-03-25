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
};
