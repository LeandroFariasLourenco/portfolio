import { Typography, Grid, styled } from '@mui/material';
import { mixins } from 'src/styles/utils';

export const CurrentExperience = styled(Typography)`
  position: absolute;
  top: 2%;  
  left: -8%;
  background-color: ${({ theme }) => theme.palette.primary.main};
  display: block;
  z-index: 1;
  transform: rotate(-45deg);
  font-size: 20px;
  color: white;
  padding: 5px 30px;
  text-shadow: 0 0 2px black;
  width: 132px;
  height: 40px;
  ${mixins.flexCentered};
  text-shadow: 0 0 2px black;
`;

export const ExperienceContainer = styled(Grid)(({ theme }) => `
  position: relative;
  height: 550px;
  overflow: hidden;
`);
