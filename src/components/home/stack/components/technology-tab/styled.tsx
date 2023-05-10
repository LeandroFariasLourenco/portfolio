import { ArrowUpward } from '@mui/icons-material';
import { Box, Grid, Typography, styled } from '@mui/material';

export const TabContainer = styled(Grid)(({ theme }) => `
  cursor: pointer;
  transition: background-color 200ms ease-in-out;
  background-color: ${theme.palette.background.default} ;
  padding: 0 15px;
  border-radius: 0;
  min-height: 58px;
  max-height: 58px;
  flex: 1;

  &.selected {
    background-color: ${theme.palette.secondary.main} !important;
  }

  ${theme.breakpoints.up('md')} {
    &:hover {
      background-color: ${theme.palette.action.hover};
    }
  }
`);

export const TechnologyTitle = styled(Typography)(({ theme }) => `
  ${theme.breakpoints.down('md')} {
    flex: 1;
  }
`);

export const TechnologyImageContainer = styled(Box)(({ theme }) => `
  margin-right: 10px;

  ${theme.breakpoints.up('md')} {
    width: 75px;
  }
`);

export const TechnologyTabWrapper = styled(Grid)(({ theme }) => `
  ${theme.breakpoints.down('md')} {
    justify-content: space-between;
  }
`);

export const TechnologyMobileArrow = styled(ArrowUpward)<{ $selected: boolean }>(({ $selected }) => `
  transform: ${$selected ? 'rotate(180deg)' : 'rotate(0)'};
  transition: transform 200ms ease-in-out;
`);
