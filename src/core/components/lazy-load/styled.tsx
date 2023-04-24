import { Box, Grid, styled } from '@mui/material';

export const LazyloadWrapper = styled(Box)<{ $inView: boolean }>(({ $inView }) => `
  height: ${!$inView && '100vh'};
`);

export const LoaderContainer = styled(Grid)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
