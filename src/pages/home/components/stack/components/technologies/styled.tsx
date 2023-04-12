import { ArrowUpward } from '@mui/icons-material';
import {
  Box,
  Card, Grid, styled, Typography,
} from '@mui/material';
import { mixins } from 'src/styles/utils';

export const LanguageDescriptionCard = styled(Card)(({ theme }) => `
  border-radius: 0;
  border-top: none;
  background-color: ${theme.palette.background.default};
  
  ${theme.breakpoints.down('md')} {
    transition: max-height 500ms ease-in;
    max-height: 0;
    
    &.is--selected {
      max-height: 2000px
    }
  }
  
  ${theme.breakpoints.up('md')} {
    padding: 15px;
    height: 100%;
    border: 2px solid ${theme.palette.secondary.main};
    border-left-style: dashed;
    border-top: none;
  }
`);

export const LanguageDescriptionContainer = styled(Box)(({ theme }) => `
  ${theme.breakpoints.down('md')} {
    padding: 15px;
  }
`);

export const LanguagesTabWrapper = styled(Grid)(({ theme }) => `
  height: 100%;
  border: 2px solid ${theme.palette.secondary.main};
  background-color: ${theme.palette.background.default};
  border-top: none;
  overflow-y: auto;
  
  ${theme.breakpoints.up('md')} {
    border-right: none;
  }

  ${mixins.scrollbarStyle({
    height: '5px',
    backgroundThumbColor: theme.palette.secondary.main,
    backgroundTrackColor: theme.palette.secondary.main,
  })
}
`);

export const LanguageDividerTitle = styled(Typography)`
  margin-bottom: 10px;
`;

export const LanguageDescription = styled(Typography)`
  &::first-letter {
    margin-left: 10px;
  }
`;

export const LanguageContainer = styled(Grid)`
  ${({ theme }) => theme.breakpoints.up('md')} {
    height: 475px;
  }
`;

export const LanguageTopics = styled('ul')`
  margin-top: 20px;
`;

export const LanguageTopic = styled('li')(({ theme }) => `
  padding: 5px 10px;
  border: 1px solid ${theme.palette.primary.main};
  display: inline-block;
  margin: 5px;
`);

export const TechnologyTabWrapper = styled(Grid)(({ theme }) => `
  ${theme.breakpoints.down('md')} {
    justify-content: space-between;
  }
`);

export const TechnologyImageContainer = styled(Box)(({ theme }) => `
  margin-right: 10px;

  ${theme.breakpoints.up('md')} {
    width: 75px;
  }
`);

export const TechnologyTitle = styled(Typography)(({ theme }) => `
  ${theme.breakpoints.down('md')} {
    flex: 1;
  }
`);

export const TechnologyMobileArrow = styled(ArrowUpward)<{ selected: boolean }>(({ selected }) => `
  transform: ${selected ? 'rotate(180deg)' : 'rotate(0)'};
  transition: transform 200ms ease-in-out;
`);

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
