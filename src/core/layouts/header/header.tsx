import {
  GitHub, Info, KeyboardArrowUp, Mail, School, Terminal, Work, Menu,
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
import Responsive from 'src/core/components/responsive/responsive';
import useResponsive from 'src/core/hooks/useResponsive/useResponsive';
import { EResponsiveType, Languages } from 'src/core/models';
import { useGlobalContext } from 'src/core/store/global/context';

import * as S from './styled';

const Header = () => {
  const trigger = useScrollTrigger();
  const globalContext = useGlobalContext();
  const isMobile = useResponsive({ breakpoint: 'md', type: EResponsiveType.smaller });

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
      <S.HeaderBar elevation={4}>
        <Grid container item xs={12} justifyContent="center">
          <Grid container item alignItems="center" justifyContent="space-between" xs={12} md={8}>
            <Responsive
              breakpoint="md"
              belowComponent={(
                <>
                  <Grid>
                    <Menu />
                  </Grid>
                  <Grid
                    item
                    xs={8}
                    flexWrap="nowrap"
                    flexDirection="row"
                    alignItems="center"
                    container
                    justifyContent="space-around"
                  >
                    <GitHub fontSize="large" />
                    <Typography variant={isMobile ? 'h5' : 'h4'}>Leandro Farias</Typography>
                  </Grid>
                </>
              )}
              aboveComponent={(
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
              )}
            />
            <Grid item md={1}>
              <S.LanguageSelect
                value={globalContext.language}
                onChange={handleLanguageSelect}
                variant="standard"
              >
                <MenuItem value={Languages.Portuguese}>
                  <Box component="span" className="fi fi-br" style={{ marginRight: 5 }} />
                  {' '}
                  {!isMobile && 'PT'}
                </MenuItem>
                <MenuItem value={Languages.English}>
                  <Box component="span" className="fi fi-us" style={{ marginRight: 5 }} />
                  {' '}
                  {!isMobile && 'EN'}
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
