import { Grid, styled } from '@mui/material';

export const CardWrapper = styled(Grid)(({ theme }) => `
  position: relative;
  border: 2px dashed ${theme.palette.secondary.main};
  padding: 10px;
`);

export const CardTitleContainer = styled(Grid)`
  height: 115px;
`;

export const CardLogo = styled('img')`
  width: 200px;
  object-fit: contain;
  height: 50px;
  margin: 0 auto;
`;

export const CardContainer = styled(Grid)`
  margin-bottom: 10px;
`;

export const CardRow = styled(Grid)`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  svg {
    margin-right: 10px;
  }
`;
