import { Grid, styled } from '@mui/material';

export const CardWrapper = styled(Grid)(({ theme }) => `
  position: relative;
  border: 1px solid ${theme.palette.action.active};
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

export const CardTitleContainer = styled(Grid)(({ theme }) => `

`);

export const CardLogo = styled('img')`
  width: 200px;
  object-fit: contain;
  height: 60px;
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