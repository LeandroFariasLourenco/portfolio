import {
  AppBar, Grid, Select,
} from '@mui/material';
import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components';

export const HeaderLink = styled(HashLink)(({ theme }) => `
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

export const HeaderWrapper = styled(Grid)(({ theme }) => `
  background-color: rgba(20, 134, 168, 0.75);
  transition: background-color 200ms ease-in-out;
  padding: 5px 0;

  ${theme.breakpoints.down('md')} {
    padding: 10px;
  }

  &.transparent {
    background-color: transparent;
  }
`);

export const HeaderBar = styled(AppBar)(({ theme }) => `
  box-shadow: unset;
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
  bottom: 10px;
  right: 10px;
  background-color: ${theme.palette.primary.main};
  padding: 1px;
  transition: all 200ms ease-in-out;
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  z-index: 2;
  width: 40px;
  height: 40px;

  svg {
    width: unset;
    height: unset;
  }

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
