import {
  Box,
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

export const AboutMeSummary = styled(Typography)(({ theme }) => `
  font-size: 15px;

  &::first-letter {
    margin-left: 20px;
  }

  & + & {
    margin-top: 5px;
  }

  &:last-of-type {
    margin-bottom: 30px;

    ${theme.breakpoints.down('md')} {
      margin-bottom: 10px;
    }
  }
`);

export const HobbyText = styled(Typography)(({ theme }) => `
  position: relative;
  padding-left: 16px;
  font-size: 16px;

  ${theme.breakpoints.down('md')} {
    font-size: 13.5px;
  }

  &:before {
    content: '';
    position: absolute;
    left: 2px;
    top: -3px;
    display: inline-block;
    width: 8px;
    height: 8px;
    background-color: ${theme.palette.primary.main};
    border-radius: 100%;
    margin: 10px 5px 0 0;
  }
`);

export const HobbyContainer = styled(Grid)``;

export const AboutMeWrapper = styled(Grid)`
  background-color: rgba(28, 22, 48, 0.85);
`;
