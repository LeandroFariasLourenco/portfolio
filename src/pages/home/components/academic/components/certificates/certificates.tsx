import { OpenInNew, RemoveRedEye } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { useRef } from 'react';

import { FormattedMessage } from 'react-intl';
import Responsive from 'src/core/components/responsive/responsive';

import { ICardProps } from './props';
import * as S from './styled';

const Certificates = ({
  card,
  index,
}: ICardProps) => {
  const cardWrapperRef = useRef<HTMLDivElement>();

  return (
    <S.CertificateWrapper
      ref={(ref) => {
        cardWrapperRef.current = ref as HTMLDivElement;
      }}
      style={{
        animationDuration: `${100 + 75 * index}ms`,
      }}
    >
      <S.CertificateContainer
        container
        alignItems="center"
        flexDirection="column"
        justifyContent="space-between"
      >
        <S.CertificateLogoContainer>
          <S.CertificateLogo src={card.logo} width={card.dimensions.width} />
        </S.CertificateLogoContainer>
        <Typography variant="h5" fontSize="20px" textAlign="center"><FormattedMessage id={card.title} /></Typography>
        <S.CertificateLink
          href={card.link}
          target="_blank"
        >
          <RemoveRedEye color="primary" />
          <Responsive
            breakpoint="md"
          >
            <Typography><FormattedMessage id="home.certifications.seemore" /></Typography>
          </Responsive>
          <OpenInNew color="primary" />
        </S.CertificateLink>
      </S.CertificateContainer>
    </S.CertificateWrapper>
  );
};

export default Certificates;
