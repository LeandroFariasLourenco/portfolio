import {
  Card, Grid, styled, Typography,
} from '@mui/material';

export const LanguageDescriptionCard = styled(Card)(({ theme }) => `
  padding: 15px;
  border-radius: 0;
  height: 100%;
  border: 2px dashed ${theme.palette.secondary.main};
  border-top: none;
`);

export const LanguagesTabWrapper = styled(Grid)(({ theme }) => `
  height: 100%;
  border: 2px dashed ${theme.palette.secondary.main};
  background-color: ${theme.palette.background.paper};
  border-top: none;
  border-right: none;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 10,
  },
  &::-webkit-scrollbar-thumb {
    background-color: ${theme.palette.secondary.main},
  },
  &::-webkit-scrollbar-thumb:hover {
    background-color: ${theme.palette.secondary.main},
  },
  &::-webkit-scrollbar-track {
    background: ${theme.palette.background.paper},
  },
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
  height: 475px;
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

export const TabContainer = styled(Grid)(({ theme }) => `
  cursor: pointer;
  transition: background-color 200ms ease-in-out;
  background-color: ${theme.palette.background.paper} ;
  padding: 0 15px;
  border-radius: 0;
  min-height: 58px;
  max-height: 58px;
  
  flex: 1;

  &.selected {
    background-color: ${theme.palette.secondary.main} !important;
  }

  &:hover {
    background-color: ${theme.palette.action.hover};
  }
`);
