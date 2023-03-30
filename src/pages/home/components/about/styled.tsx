import {
  Grid, styled, Typography,
} from '@mui/material';
import { getBucketResource } from 'src/core/functions';
import { mixins } from 'src/styles/utils';

export const AboutCardHoverContainer = styled(Grid)<{
  $color: string;
}>(({ $color }) => `
  width: 100px;
  height: 100px;
  background-color: ${$color};
  border-radius: 100%;
  position: absolute;
  bottom: -30%;
  right: -30%;
  transition: all 350ms ease-in-out;
  
  * {
    font-size: 0;
  }
`);

export const AboutMeSummary = styled(Typography)`
  font-size: 15px;
`;

export const AboutMeTextLine = styled('div')`
  position: relative;
  padding-left: 16px;

  &:before {
    content: '';
    position: absolute;
    left: 2px;
    top: -3px;
    display: inline-block;
    width: 8px;
    height: 8px;
    background-color: ${({ theme }) => theme.palette.primary.main};
    border-radius: 100%;
    margin: 10px 5px 0 0;
  }
`;

export const HobbyText = styled(Typography)(({ theme }) => `
  font-size: 16px;

  ${theme.breakpoints.down('md')} {
    font-size: 13.5px;
  }
`);

export const AboutMeWrapper = styled(Grid)`
  ${mixins.linearGradientBackground({
    backgroundImage: getBucketResource('/wallpapers/web-developer-background.png'),
    gradientColor: 'linear-gradient(to top, rgba(28, 22, 45), rgba(28, 22, 48,0.95))',
  })}
`;
