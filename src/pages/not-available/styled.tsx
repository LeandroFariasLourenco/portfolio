import {
  Card, Grid, Typography, styled,
} from '@mui/material';

export const NotAvailableWrapper = styled(Grid)`
  height: 100vh;
  width: 100vw;
  background-color: black;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

export const NotAvailableCard = styled(Card)(({ theme }) => `
  background-color: #141C26;
  padding: 10px 15px;
  border: 2px solid ${theme.palette.secondary.main};
  border-radius: 0;
  width: 100%;
  max-width: 575px;

  ${theme.breakpoints.down('md')} {
    max-width: 315px;
  }
`);

export const NotAvailableTitle = styled(Typography)(({ theme }) => `
  position: relative;

  &::after {
    content: '',
    position: absolute;
    bottom: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 2px;
    background-color: ${theme.palette.secondary.main};
  }
`);

export const NotAvailableText = styled(Typography)(({ theme }) => `
  margin: 10px 0;

  &::first-letter {
    margin-left: 20px
  }

  ${theme.breakpoints.down('md')} {
    font-size: 12px;
    margin: 5px;
  }
`);

export const NotAvailableTextContainer = styled(Grid)(({ theme }) => `
  display: flex;
  align-items: center;

  ${theme.breakpoints.down('md')} {
    flex-flow: column;
  }
`);
