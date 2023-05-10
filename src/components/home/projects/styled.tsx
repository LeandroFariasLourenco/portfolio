import {
  Grid, styled, Typography,
} from '@mui/material';
import { getBucketResource } from '@/shared/functions';
import { mixins } from '@/shared/styles/utils';

export const ProjectsContainer = styled(Grid)(({ theme }) => `
  padding: 10px;
  margin-top: 20px;
  width: 100%;
  border: 2px solid ${theme.palette.secondary.main};

  ${theme.breakpoints.down('md')} {
    padding: 5px;

    .swiper {
      &-button {
        &-prev {
          left: -1px;
        }

        &-next {
          right: -7px;
        }

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
  background-color: rgba(28, 22, 48, 0.25);
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

  ${theme.breakpoints.down('md')} {
    padding-top: 15px;
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
  scroll-snap-type: x mandatory;
  
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

  ${mixins.scrollbarStyle({
    backgroundThumbColor: theme.palette.secondary.main,
    backgroundTrackColor: theme.palette.background.paper,
    backgroundHoverColor: theme.palette.primary.main,
    height: '5px',
  })}
`);

export const ProjectDescriptionText = styled(Typography)`
  margin-top: 10px;
`;
