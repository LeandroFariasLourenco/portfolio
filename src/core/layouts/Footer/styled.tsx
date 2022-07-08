import { Grid, styled, Typography } from '@mui/material';

export const FooterWrapper = styled(Grid)(({ theme }) => `
  background-color: ${theme.palette.background.paper};
  width: 100%;
  padding: 20px;
`);

export const FooterColumn = styled(Grid)(({ theme }) => `
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`);

export const Title = styled(Typography)(({ theme }) => `
  margin-bottom: 20px;

  &::after {
    content: '';
    display: block;
    width: 40%;
    height: 2px;
    background-color: ${theme.palette.secondary.main};
  }
`);
