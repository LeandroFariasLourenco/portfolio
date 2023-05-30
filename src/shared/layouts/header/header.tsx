import {
  Article,
  GitHub, Info, KeyboardArrowUp, Mail, Menu, School, Terminal, Work,
} from '@mui/icons-material';
import {
  AppBar,
  Chip,
  Divider,
  Grid, IconProps,
  Slide, SwipeableDrawer, Typography, useScrollTrigger,
} from '@mui/material';
import cx from 'classnames';
import {
  cloneElement,
  useCallback,
  useMemo, useState,
} from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import Responsive from '@/shared/components/responsive/responsive';
import { getBucketResource, smoothScroll } from '@/shared/functions';
import { useIsWindowTop, useResponsive } from '@/shared/hooks';
import { EAppSections, EResponsiveType } from '@/shared/models';
import { LanguageSelect } from '@/shared/components';
import { useGlobalContext } from '@/shared/contexts/global/global';
import { IMenuOption } from './models/menu-option.interface';

import styles from './header.module.scss';

import { APP } from '@/shared/constants/app';
import Image from 'next/image';

const Header = () => {
  const { isWindowOnTop } = useIsWindowTop();
  const intl = useIntl();
  const { language } = useGlobalContext();
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const isMobile = useResponsive({ type: EResponsiveType.smaller });
  const triggerScroll = useScrollTrigger({
    threshold: 0,
  });

  const scrollToTop = useCallback(() => {
    if (!window) return;

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
    { label: 'header.links.section.curriculum', href: APP.aws.curriculum[language], icon: <Article /> },
  ], [language]);

  const menuOptions: IMenuOption[] = useMemo<IMenuOption[]>(() => (isMobile ? mobileMenuOptions : desktopMenuOptions), [isMobile, language]);

  const renderMenuOptions = useCallback((link: IMenuOption) => (
    <div
      key={link.label}
      className={styles["header-link"]}
      onClick={() => {
        if (isMobile) {
          setMobileMenuOpen(false);
        }
        smoothScroll(document.querySelector(link.href)!);
      }}
    >
      {cloneElement(link.icon as any, { htmlColor: '#fff', fontSize: 'small' } as IconProps)}
      <p className={styles["header-link-text"]}><FormattedMessage id={link.label} /></p>
    </div>
  ), [isMobile, intl]);

  const renderHeaderIcon = useCallback(() => (
    <>
      {/* <HashLink scroll={smoothScroll} to={`#${EAppSections.WELCOME}`}> */}
      <GitHub fontSize="large" htmlColor="#fff" />
      {/* </HashLink> */}
    </>
  ), []);

  return (
    <>
      <Slide in={!triggerScroll} mountOnEnter unmountOnExit={false}>
        <AppBar
          color="transparent"
          style={{ boxShadow: 'unset' }}
        >
          <Grid
            className={`${styles.header} ${cx({ [styles.transparent]: isWindowOnTop })}`}
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
                    <SwipeableDrawer
                      className={styles["mobile-drawer"]}
                      anchor="left"
                      open={mobileMenuOpen}
                      onClose={() => {
                        setMobileMenuOpen(false);
                      }}
                      onOpen={() => {
                        setMobileMenuOpen(true);
                      }}
                    >
                      {mobileMenuOpen ? (
                        <Grid className={styles["mobile-drawer-container"]} container flexDirection="column">
                          <Grid item xs flex={0}>
                            <Divider textAlign="center">
                              <Grid container flexWrap="nowrap" alignItems="center">
                                <GitHub htmlColor="#fff" style={{ marginRight: 10 }} />
                                <h2>Leandro</h2>
                              </Grid>
                            </Divider>
                          </Grid>
                          <Grid item flex={1}>
                            {menuOptions.map(renderMenuOptions)}
                          </Grid>
                          <Grid item xs flex={0}>
                            <Divider textAlign="center"><Chip label={<Typography variant="h3">{intl.formatMessage({ id: 'header.signature.made-by' })}</Typography>} /></Divider>
                            <Image
                              className={styles.signature}
                              width={85}
                              height={58}
                              src={getBucketResource('/signature.png')}
                              alt="signature"
                              quality={60}
                              priority
                            />
                          </Grid>
                        </Grid>
                      ) : null}
                    </SwipeableDrawer>
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
                <LanguageSelect />
              </Grid>
            </Grid>
          </Grid>
        </AppBar>
      </Slide>

      <div
        onClick={scrollToTop}
        className={`${styles['scroll-to-top']} ${cx({
          show: !isWindowOnTop,
        })}`}
      >
        <KeyboardArrowUp fontSize="large" />
      </div>
    </>
  );
};

export default Header;
