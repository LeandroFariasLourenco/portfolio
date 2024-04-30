import { Email, Phone } from '@mui/icons-material';
import { Grid, Typography } from '@mui/material';
import { memo } from 'react';
import { FormattedMessage } from 'react-intl';
import { LinkedinIcon } from 'react-share';
import { useLinkTarget } from 'src/core/hooks';
import { APP } from 'src/core/constants';
import * as S from './styled';

const Footer = () => {
  const linkTarget = useLinkTarget();

  return (
    <S.FooterWrapper
      container
      justifyContent="center"
      xs={12}
      item
    >
      <Grid
        item
        container
        xs={10}
        md={8}
        justifyContent="center"
      >
        <S.FooterColumn item xs={12} md={4}>
          <S.FooterContainer
            container
            justifyContent="center"
            alignItems="flex-start"
            flexDirection="column"
          >
            <S.Title variant="h5"><FormattedMessage id="home.footer.contact.title" /></S.Title>
          </S.FooterContainer>
        </S.FooterColumn>
        <S.FooterColumn item xs={12} md={4}>
          <S.Title variant="h5"><FormattedMessage id="home.footer.socialmedia.title" /></S.Title>
          <S.FooterRow>
            <S.IconContainer href={APP.socials.linkedIn} target={linkTarget}><LinkedinIcon /></S.IconContainer>
            <S.IconContainer href={APP.socials.github} target={linkTarget}><S.GithubIcon /></S.IconContainer>
          </S.FooterRow>
        </S.FooterColumn>
        <S.FooterColumn item xs={12} md={4}>
          <S.FooterContainer>
            <S.Title variant="h5"><FormattedMessage id="home.footer.requirements.title" /></S.Title>
            <S.FooterRow>
              <Typography>
                <FormattedMessage id="home.footer.copyright" />
              </Typography>
            </S.FooterRow>
          </S.FooterContainer>
        </S.FooterColumn>
      </Grid>
    </S.FooterWrapper>
  );
};

export default memo(Footer);
