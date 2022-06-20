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
  border-top: none;
  border-right: none;
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
  min-height: 400px;
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

export const TabContainer = styled(Card) <{
  selected: boolean;
}>`
  cursor: pointer;
  transition: background-color 500ms ease-in-out;
  background-color: ${({ selected, theme }) => (selected ? theme.palette.secondary.main : theme.palette.background.paper)};
  padding: 10px 15px;
  flex: 1;
  border-radius: 0;
`;
