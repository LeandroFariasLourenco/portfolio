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
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
  animation-duration: 200ms;
  border-style: dashed;
  border-color:  ${({ theme }) => theme.palette.secondary.main};
  
  ${({ theme }) => theme.breakpoints.up('md')} {
    border-width: 2px;
    padding: 10px;
    height: 100%;
    width: 100%;
  };
  
  ${({ theme }) => theme.breakpoints.down('md')} {
    border-width: 1px;
    margin-left: 8px;
    width: 100%;
    padding: 5px;
    margin-top: 10px;
  };
`;

export const CertificateLogoContainer = styled(Grid)(({ theme }) => `
  ${theme.breakpoints.down('md')} {
    margin-right: 5px;
  }
`);

export const CertificateLogo = styled('img')(({ theme }) => `
  ${theme.breakpoints.up('md')} {
    object-fit: contain;
    margin: 0 auto;
  }
`);

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
  ${theme.breakpoints.up('md')} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 10px;
    border: 1px dashed ${theme.palette.primary.main};
    width: 175px;
    margin-top: 5px;
  }
`);
