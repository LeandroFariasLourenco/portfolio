import { Box, Select } from '@mui/material';
import styled from 'styled-components';

export const CountryIcon = styled.img`
  width: 25px;
`;

export const CountryText = styled(Box)(({ theme }) => `
  ${theme.breakpoints.up('md')} {
    margin-left: 10px;
  }
`);

export const LanguageSelect = styled(Select)(({ theme }) => `
  padding-left: 10px;
  color: ${theme.palette.common.white};

  &::before {
    display: none;
  }
`);
