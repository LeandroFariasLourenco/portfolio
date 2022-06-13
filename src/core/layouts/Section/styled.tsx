import { Grid } from '@mui/material';
import styled from 'styled-components';

export const SectionChildWrapper = styled(Grid)``;

export const SectionHeader = styled(Grid)``;

export const SectionContainer = styled(Grid) <{
  background?: string;
  color?: string;
}>`
  background: ${({ background }) => background};
  position: relative;
`;
