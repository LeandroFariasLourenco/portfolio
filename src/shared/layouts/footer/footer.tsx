import { Email, GitHub, LinkedIn, Phone } from '@mui/icons-material';
import { Grid, Typography } from '@mui/material';
import { memo } from 'react';
import { FormattedMessage } from 'react-intl';
import { useLinkTarget } from '@/shared/hooks';
import { APP } from '@/shared/constants/app';

import "./footer.scss";

const Footer = () => {
  const linkTarget = useLinkTarget();

  return (
    <Grid
      className="footer"
      container
      component="footer"
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
        <Grid className="footer-column" item xs={12} md={4}>
          <Grid
            container
            justifyContent="center"
            alignItems="flex-start"
            flexDirection="column"
          >
            <h5 className="footer-title"><FormattedMessage id="home.footer.contact.title" /></h5>
            <a
              className="footer-link"
              href="mailto:leandro.farias01@outlook.com"
            >
              <Email fontSize="small" htmlColor="white" />
              <Typography>leandro.farias01@outlook.com</Typography>
            </a>
            <a className="footer-link" href="whatsapp://send/?phone=+5511983732412">
              <Phone fontSize="small" htmlColor="white" />
              <Typography>+55 (11) 98373-2412</Typography>
            </a>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <h5 className="footer-title"><FormattedMessage id="home.footer.socialmedia.title" /></h5>
          <Grid className="footer-row">
            <a className="footer-icon-container" href={APP.socials.linkedIn} target={linkTarget}><LinkedIn fontSize="large" htmlColor="#fff" /></a>
            <a className="footer-icon-container github" href={APP.socials.github} target={linkTarget}><GitHub fontSize="large" /></a>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <Grid>
            <h5 className="footer-title"><FormattedMessage id="home.footer.requirements.title" /></h5>
            <Grid className="footer-row">
              <Typography>
                <FormattedMessage id="home.footer.copyright" />
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default memo(Footer);
