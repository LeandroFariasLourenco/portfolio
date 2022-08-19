import { Grid, keyframes, styled } from '@mui/material';

const fadeIn = keyframes`
  from {
    transform: scale(0);
    border-radius: 100%;
  }

  to {
    transform: scale(1);
    border-radius: 0;
  }
`;

export const CertificateWrapper = styled(Grid)`
  position: relative;
  border: 2px dashed ${({ theme }) => theme.palette.secondary.main};
  padding: 10px;
  height: 100%;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
  animation-duration: 200ms;
`;

export const CertificateLogoContainer = styled(Grid)`
`;

export const CertificateLogo = styled('img')`
  object-fit: contain;
  margin: 0 auto;
`;

export const CertificateContainer = styled(Grid)`
  height: 100%;
`;

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
