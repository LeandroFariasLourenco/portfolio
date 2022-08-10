import { Grid, styled } from '@mui/material';

export const CertificateWrapper = styled(Grid)(({ theme }) => `
  position: relative;
  border: 2px dashed ${theme.palette.secondary.main};
  padding: 10px;
  height: 100%;
`);

export const CertificateTitleContainer = styled(Grid)`
  height: 115px;
`;

export const CertificateLogo = styled('img')`
  width: 200px;
  object-fit: contain;
  height: 35px;
  margin: 0 auto;
`;

export const CertificateContainer = styled(Grid)``;

export const CertificateRow = styled(Grid)`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  svg {
    margin-right: 10px;
  }
`;

export const CertificateLink = styled('a')(({ theme }) => `
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  width: 175px;
  border: 1px dashed ${theme.palette.primary.main};
  padding: 5px 10px;
`);
