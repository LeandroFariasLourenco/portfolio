import { Grid, styled } from '@mui/material';

export const SectionContainer = styled(Grid) <{
  color?: string;
}>`
  position: relative;
  overflow-x: hidden;
  padding: 20px 0 60px 0;

  ${({ theme }) => theme.breakpoints.down('md')} {
    padding: 15px 10px;
  }
`;
