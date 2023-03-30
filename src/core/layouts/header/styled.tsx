import {
  AppBar, Grid, Select,
} from '@mui/material';
import styled from 'styled-components';

export const HeaderLink = styled('a')(({ theme }) => `
  font-size: 12px;
  cursor: pointer;
  padding: 10px;
  display: flex;
  align-items: center;
  transition: background-color 200ms ease-in-out;
  
  svg {
    margin-right: 5px;

    ${theme.breakpoints.down('md')} {
      margin-right: 15px;
    }
  }

  ${theme.breakpoints.down('md')} {
    padding: 10px 25px;
  }

  ${theme.breakpoints.up('md')} {
    justify-content: center;

    &:hover {
      background-color: ${theme.palette.primary.main};

      > p {
        color: ${theme.palette.secondary.main};
      }
    }
  }
`);

export const HeaderBar = styled(AppBar)<{ isTop: boolean }>(({ isTop, theme }) => `
  padding: 5px 0;
  box-shadow: unset;
  
  svg {
    transition: fill 200ms ease-in-out;
    fill: ${isTop ? 'white' : theme.palette.text.primary}
  }

  ${theme.breakpoints.down('md')} {
    padding: 10px;
  }
`);

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
  padding: 1px;
  border-radius: 100%;
  transition: all 200ms ease-in-out;
  cursor: pointer;
  opacity: 0;
  visibility: hidden;

  &.show {
    opacity: 1;
    visibility: inherit;
  }

  ${theme.breakpoints.up('md')} {
    &:hover {
      background-color: ${theme.palette.secondary.main};
    }
  }
`);

export const MobileDrawerContainer = styled(Grid)`

`;
