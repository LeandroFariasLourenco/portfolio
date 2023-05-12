'use client'

import { Responsive } from '@/shared/components';
import { APP } from '@/shared/constants/app';
import { useIsWindowTop, useLinkTarget, useResponsive } from '@/shared/hooks';
import { EAppSections, EResponsiveType } from '@/shared/models';
import { ArrowDownward } from '@mui/icons-material';
import { Button, Grid, Typography } from '@mui/material';
import cx from 'classnames';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import DesktopTerminal from './components/desktop-terminal/desktop-terminal';
import MobileTerminal from './components/mobile-terminal/mobile-terminal';
import SnakeGame from './components/snake-game/snake-game';
import { useWelcomeContext } from './context/welcome-context';
/* @ts-ignore */
import WAVES from 'vanta/dist/vanta.waves.min.js';

import Image from 'next/image';
import './welcome.scss';

const Welcome = () => {
  const isDesktop = useResponsive({});
  const { isWindowOnTop } = useIsWindowTop();
  const fadeAnimationTimer = useMemo(() => 1000, []);
  const [fadingOutContainer, setFadingOutContainer] = useState<boolean>(false);
  const fpsOptions = useMemo(() => [30, 60, 120], []);
  const linkTarget = useLinkTarget();
  const { playingGame, setPlayingGame } = useWelcomeContext();
  const welcomeContainerRef = useRef<HTMLDivElement>();
  const [vantaEffect, setVantaEffect] = useState(null);

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

  useEffect(() => {
    if (welcomeContainerRef) {
      setVantaEffect(WAVES({
        el: welcomeContainerRef.current
      }));
    }

    return () => {
      if (vantaEffect) {
        /* @ts-ignore */
        vantaEffect.destroy();
      }
    }
  }, [vantaEffect]);

  const renderProfileImage = useCallback(() => {
    return (
      <a href={APP.socials.github} target={linkTarget} rel="noreferrer">
        <Image
          width={280}
          height={280}
          quality={60}
          src={`https://www.github.com/LeandroFariasLourenco.png?size=280`}
          className="welcome-profile-image"
          alt="My profile photo"
          priority
        />
      </a>
    );
  }, [isWindowOnTop, isDesktop, linkTarget]);

  return (
    <Grid
      container
      className="welcome"
      alignItems="center"
      item
      justifyContent="center"
      md={12}
      id={EAppSections.WELCOME}
      ref={welcomeContainerRef}
    >
      <Responsive
        breakpoint="md"
      >
        <Grid
          className={`welcome-arrow-down ${cx({
            'is--visible': isWindowOnTop && !playingGame,
          })}`}
          onClick={handleArrowDownClick}
        >
          <ArrowDownward />
        </Grid>
      </Responsive>
      <Grid
        className={`welcome-container ${cx({ playing: fadingOutContainer, 'not--visible': !isWindowOnTop })}`}
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
      {playingGame && (
        <SnakeGame
          onClose={() => {
            setFadingOutContainer(false);
            setPlayingGame(false);
          }}
        />
      )}
    </Grid>
  );
};

export default Welcome;
