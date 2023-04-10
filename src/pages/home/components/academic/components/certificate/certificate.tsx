import { OpenInNew, RemoveRedEye } from '@mui/icons-material';
import { Typography, Grid } from '@mui/material';
import { useRef } from 'react';

import { FormattedMessage } from 'react-intl';
import Responsive from 'src/core/components/responsive/responsive';
import useResponsive from 'src/core/hooks/useResponsive/useResponsive';
import { EResponsiveType } from 'src/core/models';

import { ICardProps } from './props.interface';
import * as S from './styled';

const Certificate = ({
  certificate: card,
  index,
}: ICardProps) => {
  const cardWrapperRef = useRef<HTMLDivElement>();
  const isMobile = useResponsive({ breakpoint: 'md', type: EResponsiveType.smaller });

  return (
    <S.CertificateWrapper
      ref={(ref) => {
        cardWrapperRef.current = ref as HTMLDivElement;
      }}
      style={{
        animationDuration: `${100 + 75 * index}ms`,
      }}
    >
      <Responsive
        aboveComponent={(
          <S.CertificateContainer
            container
            alignItems="center"
            flexDirection="column"
            justifyContent="space-between"
          >
            <S.CertificateLogoContainer>
              <S.CertificateLogo src={card.logo} width={card.width.desktop} />
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
        )}
        belowComponent={(
          <S.CertificateLink
            href={card.link}
            target="_blank"
          >
            <S.CertificateContainer
              container
              alignItems="center"
              flexDirection="row"
              flexWrap="nowrap"
              justifyContent="space-between"
            >
              <S.CertificateLogoContainer minWidth={card.width.mobile}>
                <S.CertificateLogo src={card.logo} width={card.width.mobile} />
              </S.CertificateLogoContainer>
              <Typography variant="h5" fontSize="14.5px" textAlign="center"><FormattedMessage id={card.title} /></Typography>
              <OpenInNew style={{ marginLeft: '5px' }} color="primary" />
            </S.CertificateContainer>
          </S.CertificateLink>
        )}
        breakpoint="md"
      />
    </S.CertificateWrapper>
  );
};

export default Certificate;
