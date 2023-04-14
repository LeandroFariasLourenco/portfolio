import {
  Box,
  Button, Grid,
  styled,
} from '@mui/material';

export const Wrapper = styled(Grid)<{ $minHeight: number }>(({ $minHeight }) => `
  min-height: ${$minHeight}px;
`);

export const TextContainer = styled(Box)<{ $height: number }>`
  overflow: hidden;
  transition: height 0.5s ease-in-out;
  height: ${({ $height }) => $height}px;
`;

export const ToggleButton = styled(Button)`
  padding: 0;
`;
