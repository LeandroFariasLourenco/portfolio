import { Grid, keyframes, styled } from '@mui/material';

const slideUp = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const CardWrapper = styled(Grid)`
  position: relative;
  border: 2px dashed ${({ theme }) => theme.palette.secondary.main};
  padding: 10px;
  animation-name: ${slideUp};
  animation-fill-mode: forwards;
`;

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
