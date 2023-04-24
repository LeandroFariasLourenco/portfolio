import {
  Article,
  GitHub, Info, KeyboardArrowUp, Mail, Menu, School, Terminal, Work,
} from '@mui/icons-material';
import {
  Chip,
  Grid, IconProps, MenuItem, SelectChangeEvent, Slide, Typography, useScrollTrigger,
} from '@mui/material';
import cx from 'classnames';
import { observer } from 'mobx-react-lite';
import {
  ReactNode,
  cloneElement,
  useCallback,
  useMemo, useState,
} from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { HashLink } from 'react-router-hash-link';
import Responsive from 'src/core/components/responsive/responsive';
import { getBucketResource, smoothScroll } from 'src/core/functions';
import { useResponsive, useIsWindowTop, usePreloadImages } from 'src/core/hooks';
import { EAppSections, EResponsiveType, Languages } from 'src/core/models';
import { useGlobalContext } from 'src/core/store/global/context';
import { APP } from 'src/core/constants';
import { IMenuOption } from './models/menu-option.interface';

import * as S from './styled';

const Header = () => {
  const globalContext = useGlobalContext();
  const { isWindowOnTop } = useIsWindowTop();
  const intl = useIntl();
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const imagesToPreload = useMemo(() => [
    getBucketResource('/languages/brazil.png'),
    getBucketResource('/languages/united-states.png'),
  ], []);
  const { imagesLoaded } = usePreloadImages(imagesToPreload);
  const isMobile = useResponsive({ breakpoint: 'md', type: EResponsiveType.smaller });
  const triggerScroll = useScrollTrigger({
    threshold: 0,
  });

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  const desktopMenuOptions: IMenuOption[] = useMemo<IMenuOption[]>(() => [
    { label: 'header.links.section.about-me', href: `#${EAppSections.ABOUT}`, icon: <Info /> },
    { label: 'header.links.section.experience', href: `#${EAppSections.EXPERIENCES}`, icon: <Work /> },
    { label: 'header.links.section.stack', href: `#${EAppSections.STACK}`, icon: <Work /> },
    { label: 'header.links.section.formation', href: `#${EAppSections.ACADEMIC}`, icon: <Terminal /> },
    { label: 'header.links.section.projects', href: `#${EAppSections.PROJECTS}`, icon: <School /> },
    { label: 'header.links.section.trajectory', href: `#${EAppSections.MY_TIMELINE}`, icon: <Mail /> },
  ], []);

  const mobileMenuOptions: IMenuOption[] = useMemo<IMenuOption[]>(() => [
    ...desktopMenuOptions,
    { label: 'header.links.section.curriculum', href: APP.aws.curriculum, icon: <Article /> },
  ], []);

  const menuOptions: IMenuOption[] = useMemo<IMenuOption[]>(() => (isMobile ? mobileMenuOptions : desktopMenuOptions), [isMobile]);

  const handleLanguageSelect = useCallback((event: SelectChangeEvent<unknown>) => {
    globalContext.setLanguage(event.target.value as Languages);
  }, [globalContext]);

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
  ), [isMobile, intl]);

  const renderHeaderIcon = useCallback(() => (
    <HashLink scroll={smoothScroll} to={`#${EAppSections.WELCOME}`}>
      <GitHub fontSize="large" htmlColor="#fff" />
    </HashLink>
  ), []);

  const renderCountryIcon = useCallback((value: Languages): ReactNode => {
    let source: string;
    let alt: string;
    switch (value) {
      case Languages.Portuguese:
        source = getBucketResource('/languages/brazil.png');
        alt = 'Brazil flag';
        break;
      case Languages.English:
        source = getBucketResource('/languages/united-states.png');
        alt = 'United States Flag';
        break;
      default:
        break;
    }

    return (
      <S.CountryIcon src={source!} alt={alt!} />
    );
  }, []);

  return (
    <>
      <Slide in={!triggerScroll} mountOnEnter unmountOnExit={false}>
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
                {imagesLoaded && (
                  <S.LanguageSelect
                    value={globalContext.language}
                    onChange={handleLanguageSelect}
                    variant="standard"
                    MenuProps={{
                      keepMounted: true,
                    }}
                    native={false}
                    renderValue={renderCountryIcon as (value: any) => ReactNode}
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
                )}
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
