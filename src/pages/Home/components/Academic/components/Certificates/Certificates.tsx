import { OpenInNew, RemoveRedEye } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { useRef } from 'react';

import { FormattedMessage } from 'react-intl';

import { ICardProps } from './props';
import * as S from './styled';

const Certificates = ({
  card,
}: ICardProps) => {
  const cardWrapperRef = useRef<HTMLDivElement>();

  return (
    <S.CertificateWrapper
      item
      container
      flexWrap="nowrap"
      flexDirection="column"
      justifyContent="space-between"
      ref={(ref) => {
        cardWrapperRef.current = ref as HTMLDivElement;
      }}
    >
      <S.CertificateTitleContainer
        container
        justifyContent="center"
      >
        <S.CertificateLogo src={card.logo} />
        <Typography variant="h5" fontSize="20px" textAlign="center"><FormattedMessage id={card.title} /></Typography>
      </S.CertificateTitleContainer>

      <S.CertificateContainer>
        <S.CertificateLink
          href={card.link}
          target="_blank"
        >
          <RemoveRedEye color="primary" />
          <Typography><FormattedMessage id="home.certifications.seemore" /></Typography>
          <OpenInNew color="primary" />
        </S.CertificateLink>
      </S.CertificateContainer>
    </S.CertificateWrapper>
  );
};

export default Certificates;
