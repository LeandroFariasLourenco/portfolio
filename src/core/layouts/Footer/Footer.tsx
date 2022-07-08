import { Grid } from '@mui/material';
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
      xs={10}
    >
      <S.FooterColumn item xs={4}>
        <S.Title variant="h5"><FormattedMessage id="home.footer.contact.title" /></S.Title>
      </S.FooterColumn>
      <S.FooterColumn item xs={4}>
        <S.Title variant="h5"><FormattedMessage id="home.footer.socialmedia.title" /></S.Title>
      </S.FooterColumn>
      <S.FooterColumn item xs={4}>
        <S.Title variant="h5"><FormattedMessage id="home.footer.requirements.title" /></S.Title>
      </S.FooterColumn>
    </Grid>
  </S.FooterWrapper>
);

export default memo(Footer);
