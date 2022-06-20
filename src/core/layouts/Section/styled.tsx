import { Grid } from '@mui/material';
import styled from 'styled-components';

export const SectionHeader = styled(Grid)``;

export const SectionContainer = styled(Grid) <{
  background?: string;
  color?: string;
}>`
  ${({ background }) => background};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  position: relative;
  min-height: 70vh;
  overflow: hidden;
  padding: 20px 0 60px 0;
`;
