import {
  Grid, styled, Typography,
} from '@mui/material';
import { getBucketResource } from 'src/core/functions';
import { mixins } from 'src/styles/utils';

export const ProjectsContainer = styled(Grid)(({ theme }) => `
  padding: 10px;
  margin-top: 20px;
  width: 100%;
  border: 2px solid ${theme.palette.secondary.main};

  ${theme.breakpoints.down('md')} {
    .swiper {
      &-button {
        &-prev,
        &-next {
          bottom: 35%;
          top: unset;
          transform: unset;
          right: 0;
        }
      }
    }
  }

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
  position: relative;

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

export const ProjectDescriptionText = styled(Typography)`
  margin-top: 10px;
`;
