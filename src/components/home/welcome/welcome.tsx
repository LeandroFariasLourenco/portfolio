'use client'

import { Responsive } from '@/shared/components';
import LoadParticles from '@/shared/components/load-particles/load-particles';
import { APP } from '@/shared/constants/app';
import { useIsWindowTop, useLinkTarget, useResponsive } from '@/shared/hooks';
import { EAppSections, EResponsiveType } from '@/shared/models';
import { useTheme } from '@emotion/react';
import { ArrowDownward } from '@mui/icons-material';
import { Box, Button, Grid, Typography } from '@mui/material';
import cx from 'classnames';
import { useCallback, useMemo, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { ParticlesProps } from 'react-tsparticles';
import DesktopTerminal from './components/desktop-terminal/desktop-terminal';
import MobileTerminal from './components/mobile-terminal/mobile-terminal';
import SnakeGame from './components/snake-game/snake-game';
import { useWelcomeContext } from './context/welcome-context';
import { desktopParticlesConfig } from './particles/desktop-config';

import Image from 'next/image';
import './welcome.scss';

const Welcome = () => {
  const isDesktop = useResponsive({});
  const { isWindowOnTop } = useIsWindowTop();
  const { ref: animationContainerRef, inView } = useInView({
    triggerOnce: false, threshold: 0.1, initialInView: true, trackVisibility: true, delay: 100,
  });
  const fadeAnimationTimer = useMemo(() => 1000, []);
  const [fadingOutContainer, setFadingOutContainer] = useState<boolean>(false);
  const [particlesConfig, setParticlesConfig] = useState<ParticlesProps['options']>(desktopParticlesConfig);
  const fpsOptions = useMemo(() => [30, 60, 120], []);
  const linkTarget = useLinkTarget();
  const { playingGame, setPlayingGame } = useWelcomeContext();
  const theme = useTheme();

  const handleArrowDownClick = useCallback(() => {
    // window.scrollTo({
    //   top: window.innerHeight - APP.header.height,
    //   behavior: 'smooth',
    // });
  }, []);

  const awaitFadeAnimation = useCallback(() => {
    setTimeout(() => {
      setPlayingGame(true);
    }, fadeAnimationTimer);
  }, []);

  const renderProfileImage = useCallback(() => {
    return (
      <a href={APP.socials.github} target={linkTarget} rel="noreferrer">
        <Image
          width={280}
          height={280}
          quality={60}
          src={`https://www.github.com/LeandroFariasLourenco.png?size=280`}
          className={`welcome-profile-image ${cx({
            focused: isWindowOnTop,
          })}`}
          alt="My profile photo"
          priority
        />
      </a>
    );
  }, [isWindowOnTop, isDesktop, linkTarget]);

  const changeFps = useCallback((fps: number) => {
    setParticlesConfig((prevState) => ({
      ...prevState,
      fpsLimit: fps,
    }));
  }, []);

  const renderFpsOption = useCallback((fps: number) => (
    <Button className={`welcome-fps-option ${cx({ current: fps === particlesConfig?.fpsLimit })}`} onClick={() => changeFps(fps)} key={fps}>
      <h5>{fps}</h5>
    </Button>
  ), [particlesConfig]);

  return (
    <Grid
      container
      className="welcome"
      alignItems="center"
      item
      justifyContent="center"
      md={12}
      id={EAppSections.WELCOME}
    >
      <Responsive
        breakpoint="md"
      >
        <>
          <Box ref={animationContainerRef} className="background-canvas">
            {!playingGame && inView ? <LoadParticles id="welcome-section" options={particlesConfig} /> : null}
          </Box>
          <Grid
            className={`welcome-arrow-down ${cx({
              'is--visible': isWindowOnTop && !playingGame,
            })}`}
            onClick={handleArrowDownClick}
          >
            <ArrowDownward />
          </Grid>
        </>
      </Responsive>
      <Grid
        className={`welcome-container ${cx({ playing: fadingOutContainer })}`}
        container
        justifyContent="center"
        alignItems="center"
        xs={12}
        item
        spacing={isDesktop ? 0 : 5}
      >
        <Responsive
          breakpoint="md"
          type={EResponsiveType.smaller}
        >
          <Grid item xs={12}>
            {renderProfileImage()}
          </Grid>
        </Responsive>
        {isDesktop ? (
          <DesktopTerminal
            playingGame={fadingOutContainer}
            onGameActivation={() => {
              setFadingOutContainer(true);
              awaitFadeAnimation();
            }}
          />
        ) : <MobileTerminal />}
        <Responsive
          breakpoint="md"
        >
          <Grid item md={4}>
            {renderProfileImage()}
          </Grid>
        </Responsive>
      </Grid>
      {playingGame ? (
        <SnakeGame
          onClose={() => {
            setFadingOutContainer(false);
            setPlayingGame(false);
          }}
        />
      ) : (
        <Responsive
          breakpoint="md"
        >
          <Grid
            className={`welcome-fps-container ${cx({
              'is--visible': isWindowOnTop,
            })}`}
          >
            <Typography textAlign="center" variant="h6">FPS</Typography>
            <Grid container>
              {fpsOptions.map(renderFpsOption)}
            </Grid>
          </Grid>
        </Responsive>
      )}
    </Grid>
  );
};

export default Welcome;
