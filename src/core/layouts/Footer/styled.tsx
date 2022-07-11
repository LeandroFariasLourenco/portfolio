import { GitHub } from '@mui/icons-material';
import { Grid, styled, Typography } from '@mui/material';

export const FooterWrapper = styled(Grid)(({ theme }) => `
  background-color: ${theme.palette.background.paper};
  width: 100%;
  padding: 20px;
`);

export const FooterColumn = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const FooterContainer = styled(Grid)(() => `

`);

export const Title = styled(Typography)(({ theme }) => `
  margin-bottom: 20px;

  &::after {
    content: '';
    display: block;
    width: 40%;
    height: 2px;
    background-color: ${theme.palette.secondary.main};
  }
`);

export const FooterRow = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FooterLink = styled('a')`
  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    margin-right: 10px;
  }

  p {
    font-size: 14px;
  }
`;

export const IconContainer = styled('a')`
  height: 65px;
  width: 60px;
  background-color: #161B22;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  transition: transform 200ms ease-in-out;

  &:hover {
    transform: scale(1.05) translateY(-10px);
  }
`;

export const GithubIcon = styled(GitHub)`
  color: white;
  font-size: 36px;
`;
