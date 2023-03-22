import { Grid, styled } from '@mui/material';

export const SectionHeader = styled(Grid)``;

export const SectionContainer = styled(Grid) <{
  color?: string;
}>`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  position: relative;
  min-height: 70vh;
  overflow: hidden;
  padding: 20px 0 60px 0;

  ${({ theme }) => theme.breakpoints.down('md')} {
    padding: 15px;
  }
`;
