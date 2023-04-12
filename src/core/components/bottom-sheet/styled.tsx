import { Grid, styled } from '@mui/material';

export const BottomSheetContainer = styled(Grid)(({ theme }) => `
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${theme.palette.background.paper};
  padding: 5px 10px 20px 10px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`);
