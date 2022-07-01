import { GitHub, LightMode } from '@mui/icons-material';
import {
  Grid, AppBar, Box, Button, MenuItem, Select, Typography, useTheme, useScrollTrigger, Slide,
} from '@mui/material';
import { FormattedMessage } from 'react-intl';
import { ElevationScroll } from 'src/core/components';

import * as S from './styled';

const Header = () => {
  const theme = useTheme();
  const trigger = useScrollTrigger();

  const links = [
    { label: 'header.links.section1', href: '#home' },
    { label: 'header.links.section2', href: '#home' },
    { label: 'header.links.section3', href: '#home' },
    { label: 'header.links.section4', href: '#home' },
    { label: 'header.links.section5', href: '#home' },
  ];

  return (
    <ElevationScroll>
      {/* <Slide appear={false} direction="down" in={!trigger}> */}
      <AppBar color="primary" elevation={0}>
        <Grid container item xs={12} justifyContent="center">
          <Grid container item alignItems="center" justifyContent="space-between" xs={8}>
            <Grid item xs={3} flexWrap="nowrap" flexDirection="row" alignItems="center" container justifyContent="space-evenly">
              <GitHub fontSize="large" />
              <Typography variant="h4">Leandro Farias</Typography>
            </Grid>
            <Grid item xs={8} container justifyContent="flex-end" flexWrap="nowrap">
              {links.map((link) => (
                <S.HeaderLink
                  key={link.label}
                >
                  <Typography><FormattedMessage id={link.label} /></Typography>
                </S.HeaderLink>
              ))}
            </Grid>
            <Grid item xs={1}>
              <Select>
                <MenuItem><Box component="span" className="fi fi-br" /></MenuItem>
                <MenuItem><Box component="span" className="fi fi-us" /></MenuItem>
              </Select>
            </Grid>
          </Grid>
        </Grid>
      </AppBar>
      {/* </Slide> */}
    </ElevationScroll>
  );
};

export default Header;
