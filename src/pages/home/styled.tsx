import { Box, styled } from '@mui/material';
import { getBucketResource } from 'src/core/functions';
import { mixins } from 'src/styles/utils';

export const HomeContainer = styled(Box)`
  ${mixins.linearGradientBackground({
    backgroundImage: getBucketResource('/wallpapers/terminal.png'),
    gradientColor: 'linear-gradient(rgba(28, 22, 48, 0.85), rgba(28, 22, 48,0.97))',
  })};
`;
