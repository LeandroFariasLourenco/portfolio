import {
  Box, Card, Typography, styled,
} from '@mui/material';

export const LanguageDescriptionContainer = styled(Box)(({ theme }) => `
  ${theme.breakpoints.down('md')} {
    padding: 15px 10px;
  }
`);

export const LanguageDescription = styled(Typography)`
  &::first-letter {
    margin-left: 10px;
  }
`;

export const LanguageDescriptionCard = styled(Card)(({ theme }) => `
  border-radius: 0;
  border-top: none;
  background-color: ${theme.palette.background.default};
  
  ${theme.breakpoints.down('md')} {
    transition: max-height 200ms ease-in;
    
    &:not(.is--selected) {
      display: none;
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

export const LanguageTopics = styled('ul')`
  margin-top: 20px;
`;

export const LanguageDividerTitle = styled(Typography)`
  margin-bottom: 10px;
`;

export const LanguageTopic = styled('li')(({ theme }) => `
  padding: 5px 10px;
  border: 1px solid ${theme.palette.primary.main};
  display: inline-block;
  margin: 5px;
`);
