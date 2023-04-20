import {
  Box,
  Button, Grid,
  styled,
} from '@mui/material';

export const Wrapper = styled(Grid)<{ $minHeight: number }>(({ $minHeight }) => `
  min-height: ${$minHeight}px;
`);

export const TextContainer = styled(Box) <{ $height: number, $heightTransitionDuration: number }>(({
  $height,
  $heightTransitionDuration,
}) => `
  overflow: hidden;
  transition: height ${$heightTransitionDuration}ms ease-in-out;
  height: ${$height}px;
`);

export const ToggleButton = styled(Button)`
  padding: 0;
`;
