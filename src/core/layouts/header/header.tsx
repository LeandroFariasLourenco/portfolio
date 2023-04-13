import {
  GitHub, Info, KeyboardArrowUp, Mail, Menu, School, Terminal, Work,
} from '@mui/icons-material';
import {
  Chip,
  Grid, IconProps, MenuItem, SelectChangeEvent, Slide, Typography, useScrollTrigger,
} from '@mui/material';
import cx from 'classnames';
import { observer } from 'mobx-react-lite';
import {
  cloneElement,
  useCallback,
  useMemo, useState,
} from 'react';
import { FormattedMessage } from 'react-intl';
import { HashLink } from 'react-router-hash-link';
import Responsive from 'src/core/components/responsive/responsive';
import { getBucketResource, smoothScroll } from 'src/core/functions';
import useIsWindowTop from 'src/core/hooks/useIsWindowTop';
import useResponsive from 'src/core/hooks/useResponsive/useResponsive';
import { EAppSections, EResponsiveType, Languages } from 'src/core/models';
import { useGlobalContext } from 'src/core/store/global/context';
import { IMenuOption } from './models/menu-option.interface';

import * as S from './styled';

const Header = () => {
  const globalContext = useGlobalContext();
  const { isWindowOnTop } = useIsWindowTop();
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const languageOptions = useMemo(() => [
    getBucketResource('/languages/brazil.png'),
    getBucketResource('/languages/united-states.png'),
  ], []);
  const isMobile = useResponsive({ breakpoint: 'md', type: EResponsiveType.smaller });
  const triggerScroll = useScrollTrigger({
    threshold: 0,
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const menuOptions: IMenuOption[] = useMemo<IMenuOption[]>(() => [
    { label: 'header.links.section1', href: `#${EAppSections.ABOUT}`, icon: <Info /> },
    { label: 'header.links.section2', href: `#${EAppSections.EXPERIENCES}`, icon: <Work /> },
    { label: 'header.links.section3', href: `#${EAppSections.STACK}`, icon: <Work /> },
    { label: 'header.links.section4', href: `#${EAppSections.ACADEMIC}`, icon: <Terminal /> },
    { label: 'header.links.section5', href: `#${EAppSections.PROJECTS}`, icon: <School /> },
    { label: 'header.links.section6', href: `#${EAppSections.MY_TIMELINE}`, icon: <Mail /> },
  ], []);

  const setupLanguageOptions = () => {
    languageOptions.forEach(() => {});
  };

  const handleLanguageSelect = (event: SelectChangeEvent<unknown>) => {
    globalContext.setLanguage(event.target.value as Languages);
  };

  const renderMenuOptions = useCallback((link: IMenuOption) => (
    <S.HeaderLink
      key={link.label}
      to={link.href}
      scroll={(element) => {
        if (isMobile) {
          setMobileMenuOpen(false);
        }
        smoothScroll(element);
      }}
    >
      {cloneElement(link.icon as any, { htmlColor: '#fff', fontSize: 'small' } as IconProps)}
      <Typography><FormattedMessage id={link.label} /></Typography>
    </S.HeaderLink>
  ), [isMobile]);

  const renderHeaderIcon = useCallback(() => (
    <HashLink scroll={smoothScroll} to={`#${EAppSections.WELCOME}`}>
      <GitHub fontSize="large" htmlColor="#fff" />
    </HashLink>
  ), []);

  return (
    <>
      <Slide in={!triggerScroll}>
        <S.HeaderBar
          color="transparent"
        >
          <S.HeaderWrapper
            className={cx({
              transparent: isWindowOnTop,
            })}
            container
            item
            xs={12}
            justifyContent="center"
          >
            <Grid container item alignItems="center" justifyContent="space-between" xs={12} md={10} lg={8}>
              <Responsive
                breakpoint="md"
                belowComponent={(
                  <>
                    <S.MobileDrawer
                      anchor="left"
                      open={mobileMenuOpen}
                      onClose={() => {
                        setMobileMenuOpen(false);
                      }}
                      onOpen={() => {
                        setMobileMenuOpen(true);
                      }}
                    >
                      <S.MobileDrawerContainer container flexDirection="column">
                        <Grid item xs flex={0}>
                          <S.MobileDrawerDivider textAlign="center">
                            <Grid container flexWrap="nowrap" alignItems="center">
                              <GitHub htmlColor="#fff" style={{ marginRight: 10 }} />
                              <Typography variant="h2">Leandro</Typography>
                            </Grid>
                          </S.MobileDrawerDivider>
                        </Grid>
                        <Grid item flex={1}>
                          {menuOptions.map(renderMenuOptions)}
                        </Grid>
                        <Grid item xs flex={0}>
                          <S.MobileDrawerDivider textAlign="center"><Chip label={<Typography variant="h3">Feito por</Typography>} /></S.MobileDrawerDivider>
                          <S.Signature src={getBucketResource('/signature.png')} alt="signature" />
                        </Grid>
                      </S.MobileDrawerContainer>
                    </S.MobileDrawer>
                    <Grid onClick={() => {
                      setMobileMenuOpen(true);
                    }}
                    >
                      <Menu htmlColor="#fff" />
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
                      {renderHeaderIcon()}
                      <Typography variant={isMobile ? 'h5' : 'h4'}>Leandro Farias</Typography>
                    </Grid>
                  </>
                )}
                aboveComponent={(
                  <>
                    {renderHeaderIcon()}
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
                  MenuProps={{
                    keepMounted: true,
                  }}
                  renderValue={(value) => {
                    let source: string;
                    let alt: string;
                    switch (value) {
                      case 'pt-BR':
                        source = getBucketResource('/languages/brazil.png');
                        alt = 'Brazil flag';
                        break;
                      case 'en-US':
                        source = getBucketResource('/languages/united-states.png');
                        alt = 'United States Flag';
                        break;
                      default:
                        break;
                    }

                    return (
                      <S.CountryIcon src={source!} alt={alt!} />
                    );
                  }}
                >
                  <MenuItem value={Languages.Portuguese}>
                    <S.CountryIcon src={getBucketResource('/languages/brazil.png')} alt="Brazil flag" />
                    <S.CountryText component="span">
                      {!isMobile && 'PT'}
                    </S.CountryText>
                  </MenuItem>
                  <MenuItem value={Languages.English}>
                    <S.CountryIcon src={getBucketResource('/languages/united-states.png')} alt="United States flag" />
                    <S.CountryText component="span">
                      {!isMobile && 'EN'}
                    </S.CountryText>
                  </MenuItem>
                </S.LanguageSelect>
              </Grid>
            </Grid>
          </S.HeaderWrapper>
        </S.HeaderBar>
      </Slide>

      <S.ScrollToTopWrapper
        onClick={scrollToTop}
        className={cx({
          show: !isWindowOnTop,
        })}
      >
        <KeyboardArrowUp fontSize="large" />
      </S.ScrollToTopWrapper>
    </>
  );
};

export default observer(Header);
