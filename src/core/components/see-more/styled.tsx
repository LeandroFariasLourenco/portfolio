import {
  Button, Grid, Typography, styled,
} from '@mui/material';

export const Wrapper = styled(Grid)`
  min-height: 100px;
`;

export const TextContainer = styled(Typography)<{ $height: number }>`
  overflow: hidden;
  transition: height 0.5s ease-in-out;
  height: ${({ $height }) => $height}px;
`;

export const ToggleButton = styled(Button)`
  padding: 0;
`;
