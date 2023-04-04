import {
  GitHub, Info, KeyboardArrowUp, Mail, Menu, School, Terminal, Work,
} from '@mui/icons-material';
import {
  Box, Drawer, Grid, IconProps, MenuItem, SelectChangeEvent, Typography,
} from '@mui/material';
import cx from 'classnames';
import { observer } from 'mobx-react-lite';
import { cloneElement, useMemo, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { ElevationScroll } from 'src/core/components';
import Responsive from 'src/core/components/responsive/responsive';
import useIsWindowTop from 'src/core/hooks/useIsWindowTop';
import useResponsive from 'src/core/hooks/useResponsive/useResponsive';
import { EResponsiveType, Languages } from 'src/core/models';
import { useGlobalContext } from 'src/core/store/global/context';
import { IMenuOption } from './models/menu-option.interface';

import * as S from './styled';

const Header = () => {
  const globalContext = useGlobalContext();
  const { isWindowOnTop } = useIsWindowTop();
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const isMobile = useResponsive({ breakpoint: 'md', type: EResponsiveType.smaller });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const menuOptions: IMenuOption[] = useMemo<IMenuOption[]>(() => [
    { label: 'header.links.section1', href: '#home', icon: <Info /> },
    { label: 'header.links.section2', href: '#home', icon: <Work /> },
    { label: 'header.links.section3', href: '#home', icon: <Terminal /> },
    { label: 'header.links.section4', href: '#home', icon: <School /> },
    { label: 'header.links.section5', href: '#home', icon: <Mail /> },
  ], []);

  const handleLanguageSelect = (event: SelectChangeEvent<unknown>) => {
    globalContext.setLanguage(event.target.value as Languages);
  };

  const renderMenuOptions = (link: IMenuOption) => (
    <S.HeaderLink
      key={link.label}
    >
      {cloneElement(link.icon as any, { htmlColor: '#fff', fontSize: 'small' } as IconProps)}
      <Typography><FormattedMessage id={link.label} /></Typography>
    </S.HeaderLink>
  );

  return (
    <ElevationScroll>
      <S.HeaderBar elevation={4}>
        <Grid container item xs={12} justifyContent="center">
          <Grid container item alignItems="center" justifyContent="space-between" xs={12} md={8}>
            <Responsive
              breakpoint="md"
              belowComponent={(
                <>
                  <Drawer
                    anchor="left"
                    open={mobileMenuOpen}
                    onClose={() => {
                      setMobileMenuOpen(false);
                    }}
                  >
                    {menuOptions.map(renderMenuOptions)}
                  </Drawer>
                  <Grid onClick={() => {
                    setMobileMenuOpen(true);
                  }}
                  >
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
                <>
                  <GitHub htmlColor="#fff" fontSize="large" />
                  <Grid item maxWidth={700} container justifyContent="space-between" alignItems="center">
                    {menuOptions.map(renderMenuOptions)}
                  </Grid>
                </>
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
          className={cx({
            show: !isWindowOnTop,
          })}
        >
          <KeyboardArrowUp fontSize="large" />
        </S.ScrollToTopWrapper>
      </S.HeaderBar>
    </ElevationScroll>
  );
};

export default observer(Header);
