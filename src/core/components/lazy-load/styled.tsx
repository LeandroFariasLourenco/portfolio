import {
  Box, Grid, keyframes, styled,
} from '@mui/material';

export const LazyloadWrapper = styled(Box)<{ $inView: boolean }>(({ $inView }) => `
  height: ${!$inView && '100vh'};
`);

export const LoaderContainer = styled(Grid)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const ChildrenWrapper = styled(Box)`
  animation-name: ${fadeIn};
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
`;
