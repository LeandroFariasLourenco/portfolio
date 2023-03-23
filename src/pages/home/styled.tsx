import { Box, Grid, styled } from '@mui/material';

export const HomeContainer = styled(Box)``;

export const FullPageControlButton = styled('button')<{
  active: boolean,
}>(({ theme, active }) => `
  border-radius: 100%;
  width: 30px;
  height: 30px;
  border: 0;
  font-size: 0;
  background-color: ${active ? theme.palette.primary.main : theme.palette.background.paper};
  transition: background-color 0.3s ease;
  border: 1px solid ${theme.palette.primary.main};
  margin-top: 5px;
`);

export const FullPageControl = styled(Grid)`
  position: fixed;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  z-index: 2;
  width: 100px;
`;
