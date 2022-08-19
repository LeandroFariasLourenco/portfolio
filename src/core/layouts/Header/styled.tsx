import {
  AppBar, Grid, Select, styled,
} from '@mui/material';

export const HeaderLink = styled('a')(({ theme }) => `
  font-size: 12px;
  cursor: pointer;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 200ms ease-in-out;

  svg {
    margin-right: 5px;
  }

  &:hover {
    background-color: ${theme.palette.primary.main};

    > p {
      color: ${theme.palette.secondary.main};
    }
  }
`);

export const HeaderBar = styled(AppBar)`
  padding: 5px 0;
  background-color: blue;
`;

export const LanguageSelect = styled(Select)(({ theme }) => `
  padding-left: 10px;
  color: ${theme.palette.common.white};

  &::before {
    display: none;
  }
`);

export const ScrollToTopWrapper = styled(Grid)(({ theme }) => `
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: ${theme.palette.primary.main};
  padding: 5px;
  border-radius: 100px;
  transition: background-color 200ms ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: ${theme.palette.secondary.main};
  }
`);
