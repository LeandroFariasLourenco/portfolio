import {
  GitHub, Info, KeyboardArrowUp, Mail, School, Terminal, Work,
} from '@mui/icons-material';
import {
  Grid,
  Box,
  MenuItem,
  Typography,
  useScrollTrigger,
  SelectChangeEvent,
  IconProps,
} from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useMemo, cloneElement } from 'react';
import { FormattedMessage } from 'react-intl';
import { ElevationScroll } from 'src/core/components';
import { Languages } from 'src/core/models';
import { useGlobalContext } from 'src/core/store/global/context';

import * as S from './styled';

const Header = () => {
  const trigger = useScrollTrigger();
  const globalContext = useGlobalContext();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const links = useMemo(() => [
    { label: 'header.links.section1', href: '#home', icon: <Info /> },
    { label: 'header.links.section2', href: '#home', icon: <Work /> },
    { label: 'header.links.section3', href: '#home', icon: <Terminal /> },
    { label: 'header.links.section4', href: '#home', icon: <School /> },
    { label: 'header.links.section5', href: '#home', icon: <Mail /> },
  ], []);

  const handleLanguageSelect = (event: SelectChangeEvent<unknown>) => {
    globalContext.setLanguage(event.target.value as Languages);
  };

  return (
    <ElevationScroll>
      {/* <Slide appear={false} direction="down" in={!trigger}> */}
      <S.HeaderBar elevation={100}>
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
                  {cloneElement(link.icon, { htmlColor: '#fff', fontSize: 'small' } as IconProps)}
                  <Typography><FormattedMessage id={link.label} /></Typography>
                </S.HeaderLink>
              ))}
            </Grid>
            <Grid item xs={1}>
              <S.LanguageSelect
                value={globalContext.language}
                onChange={handleLanguageSelect}
                variant="standard"
              >
                <MenuItem value={Languages.Portuguese}>
                  <Box component="span" className="fi fi-br" style={{ marginRight: 5 }} />
                  {' '}
                  PT
                </MenuItem>
                <MenuItem value={Languages.English}>
                  <Box component="span" className="fi fi-us" style={{ marginRight: 5 }} />
                  {' '}
                  EN
                </MenuItem>
              </S.LanguageSelect>
            </Grid>
          </Grid>
        </Grid>
        <S.ScrollToTopWrapper
          onClick={scrollToTop}
        >
          <KeyboardArrowUp fontSize="large" />
        </S.ScrollToTopWrapper>
      </S.HeaderBar>
      {/* </Slide> */}
    </ElevationScroll>
  );
};

export default observer(Header);
