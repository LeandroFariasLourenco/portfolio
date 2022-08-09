import { Grid, styled } from '@mui/material';

export const CardWrapper = styled(Grid)(({ theme }) => `
  position: relative;
  border: 2px dashed ${theme.palette.secondary.main};
  padding: 10px;
  height: 100%;

  .MuiDrawer {
    &-modal {
      position: absolute;
    }

    &-paper {
      position: absolute;
    }
  }
`);

export const CardTitleContainer = styled(Grid)`
  height: 115px;
`;

export const CardLogo = styled('img')`
  width: 200px;
  object-fit: contain;
  height: 30px;
  margin: 0 auto;
`;

export const CardContainer = styled(Grid)``;

export const CardRow = styled(Grid)`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  svg {
    margin-right: 10px;
  }
`;
