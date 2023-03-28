import { css, Grid, styled } from '@mui/material';
import { APP } from 'src/core/constants';
import { getBucketResource } from 'src/core/functions';
import { SwiperSlide } from 'swiper/react';

export const ProjectsContainer = styled(Grid)(({ theme }) => `
  padding: 10px;
  margin-top: 20px;
  width: 100%;
  border: 2px solid ${theme.palette.secondary.main};
  background-color: ${theme.palette.background.default};

  ${theme.breakpoints.up('md')} {
    height: 500px;
  }
`);

export const ProjectsTabs = styled(Grid)`
  background-image: linear-gradient(rgba(28, 22, 48,1), rgba(28, 22, 48,0.93)), url(${getBucketResource('/wallpapers/personal-projects.jpg')});
  background-size: cover;
  background-position: center;
  padding: 10px;

  ${({ theme }) => theme.breakpoints.down('md')} {
    height: 500px;
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    height: 100%;
  }

  .swiper {
    &-pagination {
      &-bullet {
        width: 100px;
        height: 5px;
        border-radius: 0;
        background-color: ${({ theme }) => theme.palette.grey['500']};
      }
    }
  }
`;

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
  
  ${theme.breakpoints.up('md')} {
    overflow-y: auto;
    height: 92%;
  }

  ${theme.breakpoints.down('md')} {
    overflow-x: auto;
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
  background-image: linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.75));
  position: absolute;
  bottom: 0;
  padding: 20px;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export const ProjectSlideContainer = styled(Grid)`
  padding: 20px;
`;

const ProjectBackground = css`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ProjectBackgroundImage = styled('img')`
  ${ProjectBackground};
`;

export const ProjectBackgroundVideo = styled('video')`
  ${ProjectBackground};
`;
