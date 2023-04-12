import {
  Card, Grid, Typography,
} from '@mui/material';
import styled from 'styled-components';

export const ExperienceCardContent = styled(Grid)`
  margin: 10px 0;
`;

export const ExperienceIcon = styled.img`
  width: 50px;
`;

export const ExperienceTitle = styled(Typography)`
  text-align: center;
  margin-left: 10px;
`;

export const ExperienceHeader = styled(Grid)`
  height: 60px;
  padding: 0 15px;
`;

export const ExperienceTopic = styled(Grid)`
  margin-top: 16px;

  svg {
    margin-right: 10px;
  }
`;

export const ExperienceCard = styled(Card)<{
  $direction: 'left' | 'right'
}>(({ theme, $direction }) => `
  padding: 16px;
  height: 98%;
  width: 98%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: background-color 500ms ease-in-out;
  border-radius: 10px;

  &::after {
    content: "";
    position: absolute;
    display: block;
    width: 1%;
    height: 175px;
    border: 2px dashed ${theme.palette.secondary.main};
    padding: 5px;
    background-color: ${theme.palette.secondary.main};
    background-clip: content-box;
    top: 50%;
    ${$direction}: -7px;
    transform: translateY(-50%);
  }
`);

export const CompanyLogo = styled.img`
  width: 100px;
`;
