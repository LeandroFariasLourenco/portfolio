import { AppBar, Select, styled } from '@mui/material';

export const HeaderLink = styled('a')(({ theme }) => `
  font-size: 12px;
  margin: 0 5px;
  cursor: pointer;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 200ms ease-in-out;

  &:hover {
    background-color: ${theme.palette.primary.main};

    > p {
      color: ${theme.palette.secondary.main};
    }
  }
`);

export const HeaderBar = styled(AppBar)`
  padding: 5px 0;
`;

export const LanguageSelect = styled(Select)`
  width: 75px;
  padding-left: 10px;

  &::before {
    display: none;
  }
`;
