import {
  AppBar, Box, Divider, Grid, Select, SwipeableDrawer,
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

  .MuiSelect {
    &-select {
      padding-bottom: 0;
    }

    &-iconStandard {
      color: #fff;
    }
  }

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
  z-index: 10;
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
  height: 100%;
  padding: 15px 10px;
`;

export const MobileDrawer = styled(SwipeableDrawer)`
  .MuiPaper-root {
    width: 100%;
    max-width: 330px;
  }
`;

export const MobileDrawerDivider = styled(Divider)(({ theme }) => `
  &::before,
  &::after {
    border-color: ${theme.palette.primary.main};
  }
`);

export const Signature = styled.img`
  width: 85px;
  margin: 0 auto;
  display: block;
  transform: rotate(-13deg);
`;
