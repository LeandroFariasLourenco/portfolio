'use client'

import { Responsive } from '@/shared/components';
import { APP } from '@/shared/constants/app';
import { useIsWindowTop, useLinkTarget, useResponsive } from '@/shared/hooks';
import { EAppSections, EResponsiveType } from '@/shared/models';
import { ArrowDownward } from '@mui/icons-material';
import { Grid, Typography } from '@mui/material';
import cx from 'classnames';
import { useCallback, useMemo, useState } from 'react';
import DesktopTerminal from './components/desktop-terminal/desktop-terminal';
import MobileTerminal from './components/mobile-terminal/mobile-terminal';
import SnakeGame from './components/snake-game/snake-game';
import { useWelcomeContext } from './context/welcome-context';

import Image from 'next/image';
import Particles, { ParticlesProps } from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { desktopParticlesConfig } from './particles/desktop-config';

import mobileAnimation from './mobile-animation.module.scss';
import styles from './welcome.module.scss';

const Welcome = () => {
  const isDesktop = useResponsive({});
  const { isWindowOnTop } = useIsWindowTop();
  const fadeAnimationTimer = useMemo(() => 1000, []);
  const [fadingOutContainer, setFadingOutContainer] = useState<boolean>(false);
  const fpsOptions = useMemo(() => [30, 60, 120], []);
  const linkTarget = useLinkTarget();
  const [particlesConfig, setParticlesConfig] = useState<ParticlesProps['options']>(desktopParticlesConfig);
  const { playingGame, setPlayingGame } = useWelcomeContext();

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
          width={240}
          height={240}
          quality={60}
          src={`https://www.github.com/LeandroFariasLourenco.png?size=240`}
          className={`${styles["welcome-profile-image"]} ${cx({ [styles.focused]: isWindowOnTop })}`}
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
    <div className={`${styles["welcome-fps-option"]} ${cx({ current: fps === particlesConfig?.fpsLimit })}`} onClick={() => changeFps(fps)} key={fps}>
      <h5>{fps}</h5>
    </div>
  ), [particlesConfig]);

  const initEngine = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  return (
    <Grid
      container
      className={styles["welcome"]}
      alignItems="center"
      item
      justifyContent="center"
      md={12}
    >
      <Responsive
        breakpoint="md"
        aboveComponent={(
          <>
            <div className="background-canvas">
              <Particles
                canvasClassName="background-canvas"
                init={initEngine}
                options={particlesConfig}
              />
            </div>
            <Grid
              className={`${styles["welcome-arrow-down"]} ${cx({
                'is--visible': isWindowOnTop && !playingGame,
              })}`}
              onClick={handleArrowDownClick}
            >
              <ArrowDownward />
            </Grid>
          </>
        )}
        belowComponent={(
          <div className={mobileAnimation["background-container"]}>
            <div className={mobileAnimation["background-stars1"]}></div>
            <div className={mobileAnimation["background-stars2"]}></div>
            <div className={mobileAnimation["background-stars3"]}></div>
            <div className={mobileAnimation["background-stars4"]}></div>
          </div>
        )}
      />
      <Grid
        className={`${styles["welcome-container"]} ${cx({ [styles.playing]: fadingOutContainer })}`}
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
          <div
            className={`${styles["welcome-fps-container"]} ${cx({
              'is--visible': isWindowOnTop,
            })}`}
          >
            <h6 className={styles["welcome-fps-title"]}>FPS</h6>
            <Grid container>
              {fpsOptions.map(renderFpsOption)}
            </Grid>
          </div>
        </Responsive>
      )}
    </Grid>
  );
};

export default Welcome;
