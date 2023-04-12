import {
  Button, Card, Grid,
} from '@mui/material';
import styled from 'styled-components';

export const ProjectTechnologiesWrapper = styled(Grid)(({ theme }) => `
  display: flex;

  ${theme.breakpoints.down('md')} {
    max-height: 50px;
  }
`);

export const ActionButton = styled(Button)`
  border-radius: 0;
  text-transform: unset;
  padding: 5px 10px;
  width: 100%;
`;

export const ActionLink = styled('a')`
  width: 100%;
  display: block;
`;

export const ProjectTechnologyIcon = styled.img(({ theme }) => `
  width: 50px;
  height: 50px;
  
  ${theme.breakpoints.down('md')} {
    width: 40px;
    height: 40px;
  }
`);

export const ProjectSlideContainer = styled(Grid)(({ theme }) => `
  ${theme.breakpoints.up('md')} {
    padding: 20px;
  }

  ${theme.breakpoints.down('md')} {
    height: 100%;
    padding: 10px;
    display: flex;
    flex-flow: column;
    align-items: space-between;
  }
`);

export const ProjectSlideCard = styled(Card)(({ theme }) => `
  margin-top: 15px;
  border: 1px solid ${theme.palette.secondary.main};
  border-radius: 0;
  background-color: rgb(19 22 38 / 98%);
`);

export const ProjectPreview = styled(Grid)`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0,0,0,0.75);
  transform: scale(0);
  transition: transform 350ms ease-in-out;

  &.is--open {
    transform: scale(1);
    transform-origin: center;
  }
`;

export const ProjectPreviewImage = styled.img`
  
`;
