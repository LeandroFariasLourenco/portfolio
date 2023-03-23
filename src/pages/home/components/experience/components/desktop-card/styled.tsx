import { Typography, Grid } from '@mui/material';
import styled from 'styled-components';

export const CurrentExperience = styled(Typography)`
  position: absolute;
  top: 5px;
  left: -26px;
  background-color: ${({ theme }) => theme.palette.primary.main};
  display: block;
  z-index: 1;
  transform: rotate(-45deg);
  font-size: 20px;
  color: white;
  padding: 5px 30px;
  text-shadow: 0 0 2px black;
`;

export const ExperienceContainer = styled(Grid)(({ theme }) => `
  position: relative;
  height: 550px;
  overflow: hidden;
  border-radius: 10px;
`);
