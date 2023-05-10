import {
  Box, Grid, Typography, css, keyframes, styled,
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

export const LoaderHint = styled(Typography)(({ theme }) => `
  margin-top: 10px;
  color: ${theme.palette.primary.main};
  text-shadow: 0 0 3px ${theme.palette.primary.main};
  display: flex;
  justify-content: center;
  font-size: 15px;
`);

const fadeDotAnimation = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1
  }
`;

export const LoaderDot = styled(Box)(({ theme }) => css`
  animation-name: ${fadeDotAnimation};
  animation-iteration-count: infinite;
  animation-duration: 700ms;

  &:nth-of-type(1) { animation-delay: 300ms; }
  &:nth-of-type(2) { animation-delay: 400ms; }
  &:nth-of-type(3) { animation-delay: 500ms; }

  &::after {
    content: '.';
    font-size: 15px;
  }
`);
