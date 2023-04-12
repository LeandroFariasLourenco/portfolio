import { Card, Grid } from '@mui/material';
import styled from 'styled-components';

export const ProjectBackgroundImage = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const ProjectSlideContainer = styled(Grid)``;

export const ProjectTechnologyIcon = styled.img(({ theme }) => `
  width: 50px;
  height: 50px;
  
  ${theme.breakpoints.down('md')} {
    width: 40px;
    height: 40px;
  }
`);

export const ProjectTechnologiesWrapper = styled(Grid)(({ theme }) => `
  display: flex;
`);

export const ProjectDescriptionCard = styled(Card)(({ theme }) => `
  padding: 10px;
  overflow-y: auto;
  max-height: 330px;
`);

export const TogglePreview = styled(Grid)`
  position: absolute;
  top: 5px;
  right: 5px;
`;

export const ProjectSlideOverlay = styled(Grid)`
  background-image: linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0));
  position: absolute;
  bottom: 0;
  padding: 20px 20px 40px;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 1;
  transition: background-image 200ms ease-in-out;
  > * {
    transition: opacity 200ms ease-in-out;
  }

  &.closed {
    background-image: unset;
  
    ${TogglePreview} {
      opacity: 1;
    }

    > * {
      opacity: 0;
    }
  }
`;
