import { Email } from '@mui/icons-material';
import { EmailIcon, LinkedinIcon } from 'react-share';
import { Grid, Typography } from '@mui/material';
import { memo } from 'react';
import { FormattedMessage } from 'react-intl';
import * as S from './styled';

const Footer = () => (
  <S.FooterWrapper
    container
    justifyContent="center"
    xs={12}
  >
    <Grid
      item
      container
      xs={8}
    >
      <S.FooterColumn item xs={4}>
        <S.FooterContainer>
          <S.Title variant="h5"><FormattedMessage id="home.footer.contact.title" /></S.Title>
          <S.FooterLink
            href="mailto:leandro.farias01@outlook.com"
          >
            <Email fontSize="small" htmlColor="white" />
            <Typography>leandro.farias01@outlook.com</Typography>
          </S.FooterLink>
        </S.FooterContainer>
      </S.FooterColumn>
      <S.FooterColumn item xs={4}>
        <S.Title variant="h5"><FormattedMessage id="home.footer.socialmedia.title" /></S.Title>
        <S.FooterRow>
          <S.IconContainer href="" target="_blank"><LinkedinIcon /></S.IconContainer>
          <S.IconContainer href="" target="_blank"><EmailIcon /></S.IconContainer>
          <S.IconContainer href="" target="_blank">
            <S.GithubIcon />
          </S.IconContainer>
        </S.FooterRow>
      </S.FooterColumn>
      <S.FooterColumn item xs={4}>
        <S.Title variant="h5"><FormattedMessage id="home.footer.requirements.title" /></S.Title>
      </S.FooterColumn>
    </Grid>
  </S.FooterWrapper>
);

export default memo(Footer);
