import {
  Button, css, Grid, styled,
} from '@mui/material';
import { getBucketResource } from 'src/core/functions';
import { mixins } from 'src/styles/utils';

export const ProjectsContainer = styled(Grid)(({ theme }) => `
  padding: 10px;
  margin-top: 20px;
  width: 100%;
  border: 2px solid ${theme.palette.secondary.main};

  ${theme.breakpoints.up('md')} {
    height: 500px;
  }
`);

export const ProjectsWrapper = styled(Grid)`
  ${mixins.linearGradientBackground({
    backgroundImage: getBucketResource('/wallpapers/terminal.png'),
    gradientColor: 'linear-gradient(rgba(28, 22, 48, 0.88), rgba(28, 22, 48,0.95))',
  })};
  background-attachment: fixed;
`;

export const ProjectsTabs = styled(Grid)(({ theme }) => `
  background-size: cover;
  background-position: center;
  z-index: 2;

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: linear-gradient(rgba(28, 22, 48,1), rgba(28, 22, 48,0.93));
    z-index: 1;
  }
  
  ${theme.breakpoints.up('md')} {
    height: 100%;
    padding: 10px;
  }

  .swiper {
  }
`);

export const RepositoryTitle = styled(Grid)(({ theme }) => `
  margin-bottom: 10px;
  border-bottom: 2px solid ${theme.palette.secondary.main};
  width: 95%;

  svg {
    margin-right: 10px;
  }
`);

export const RepositoriesWrapper = styled(Grid)(({ theme }) => `
  padding-right: 5px;
  
  ${theme.breakpoints.up('md')} {
    border-right: dashed 2px ${theme.palette.secondary.main};
    height: 100%;
  }
`);

export const RepositoriesList = styled(Grid)(({ theme }) => `
  padding-right: 10px;
  position: relative;
  scroll-snap-type: both mandatory;
  
  ${theme.breakpoints.up('md')} {
    overflow-y: auto;
    overflow-x: hidden;
    height: 92%;
  }

  ${theme.breakpoints.down('md')} {
    overflow-x: auto;
    overflow-y: hidden;
    padding-bottom: 10px;
  }

  &::-webkit-scrollbar {
    width: 5px;

    ${theme.breakpoints.down('md')} {
      height: 5px;
    }
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${theme.palette.secondary.main};
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: ${theme.palette.primary.main};
  }
  &::-webkit-scrollbar-track {
    background: ${theme.palette.background.paper};
  }
`);

export const ProjectSlideOverlay = styled(Grid)`
  background-image: linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0));
  position: absolute;
  bottom: 0;
  padding: 20px;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export const ProjectSlideContainer = styled(Grid)(({ theme }) => `
  ${theme.breakpoints.up('md')} {
    padding: 20px;
  }

  ${theme.breakpoints.down('md')} {
    padding-top: 20px;
    height: 100%;
    display: flex;
    flex-flow: column;
    align-items: space-between;
  }
`);

export const ProjectBackgroundImage = styled('img')`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const ProjectTechnologyIcon = styled('img')(({ theme }) => `
  width: 50px;
  height: 50px;
  
  ${theme.breakpoints.down('md')} {
    width: 40px;
    height: 40px;
  }
`);

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
`;
