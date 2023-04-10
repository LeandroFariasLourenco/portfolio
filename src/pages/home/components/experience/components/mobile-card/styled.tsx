import {
  Typography, Grid, Card, Box,
} from '@mui/material';
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
  overflow: hidden;
  border-radius: 10px;
  padding-bottom: 8px;
  isolation: isolate;
`);

export const ExperienceCardContent = styled(Grid)`
  margin: 0 0 10px;
`;

export const ExperienceIcon = styled('img')`
  width: 50px;
`;

export const ExperienceTitle = styled(Typography)`
  text-align: center;
  margin-left: 10px;
`;

export const ExperienceHeader = styled(Grid)`
  height: 50px;
  padding: 0 10px;
`;

export const ExperienceTopic = styled(Grid)`
  margin-top: 10px;

  svg {
    margin-right: 5px;
  }
`;

export const ExperienceCard = styled(Card)(({ theme }) => `
  padding: 16px;
  height: 100%;
  width: 100%;
  margin: 4px;
  transition: background-color 500ms ease-in-out;
  border-radius: 10px;

  &::after,
  &::before {
    content: "";
    position: absolute;
    display: block;
    width: 10px;
    height: 175px;
    border: 2px dashed ${theme.palette.secondary.main};
    padding: 5px;
    background-color: ${theme.palette.secondary.main};
    background-clip: content-box;
    top: 50%;
    transform: translateY(-50%);
  }
  
  &::after {
    left: -11px;
  }
  
  &::before {
    right: -11px;
  }
`);

export const CompanyLogo = styled('img')`
  width: 80px;
`;

export const StackTechnologyListContainer = styled(Box)``;

export const StackTechnologyListItem = styled(Box)(({ theme }) => `
  padding: 5px;
  border: 1px solid ${theme.palette.primary.main};
  display: inline-block;
  margin: 2px;
`);
