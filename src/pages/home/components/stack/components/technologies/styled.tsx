import {
  Grid, styled,
} from '@mui/material';
import { mixins } from 'src/styles/utils';

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
    backgroundTrackColor: theme.palette.background.paper,
    backgroundHoverColor: theme.palette.primary.main,
  })
}
`);

export const LanguageContainer = styled(Grid)`
  ${({ theme }) => theme.breakpoints.up('md')} {
    height: 475px;
  }
`;
