import { Grid, Typography } from '@mui/material';
import cx from 'classnames';
import { useCallback, useMemo, useState } from 'react';
import { Responsive } from 'src/core/components';
import LoadParticles from 'src/core/components/load-particles/load-particles';
import { APP } from 'src/core/constants';
import { useIsWindowTop, useLinkTarget, useResponsive } from 'src/core/hooks';
import { EAppSections, EResponsiveType } from 'src/core/models';
import { ParticlesProps } from 'react-tsparticles';
import DesktopTerminal from './components/desktop-terminal/desktop-terminal';
import MobileTerminal from './components/mobile-terminal/mobile-terminal';
import SnakeGame from './components/snake-game/snake-game';
import { desktopParticlesConfig } from './particles/desktop-config';
import { mobileParticlesConfig } from './particles/mobile-config';
import * as S from './styled';
import WelcomeProvider, { useWelcomeContext } from './context/welcome-context';

const Welcome = () => {
  const isDesktop = useResponsive({});
  const { isWindowOnTop } = useIsWindowTop();
  const fadeAnimationTimer = useMemo(() => 1000, []);
  const [fadingOutContainer, setFadingOutContainer] = useState<boolean>(false);
  const [particlesConfig, setParticlesConfig] = useState<ParticlesProps['options']>(isDesktop ? desktopParticlesConfig : mobileParticlesConfig);
  const fpsOptions = useMemo(() => [30, 60, 120], []);
  const linkTarget = useLinkTarget();
  const { playingGame, setPlayingGame } = useWelcomeContext();

  const handleArrowDownClick = useCallback(() => {
    window.scrollTo({
      top: window.innerHeight - APP.header.height,
      behavior: 'smooth',
    });
  }, []);

  const awaitFadeAnimation = useCallback(() => {
    setTimeout(() => {
      setPlayingGame(true);
    }, fadeAnimationTimer);
  }, []);

  const renderProfileImage = useCallback(() => {
    const imageWidth = isDesktop ? 280 : 225;
    return (
      <a href={APP.socials.github} target={linkTarget} rel="noreferrer">
        <S.ProfileImage
          $width={imageWidth}
          src={`https://www.github.com/LeandroFariasLourenco.png?size=${imageWidth}`}
          className={cx({
            focused: isWindowOnTop,
          })}
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
    <S.FpsOption className={cx({ current: fps === particlesConfig?.fpsLimit })} onClick={() => changeFps(fps)} key={fps}>
      <Typography variant="h5">{fps}</Typography>
    </S.FpsOption>
  ), [particlesConfig]);

  return (
    <S.Wrapper
      container
      alignItems="center"
      item
      justifyContent="center"
      md={12}
      id={EAppSections.WELCOME}
    >
      {!playingGame ? <LoadParticles id="welcome-section" options={particlesConfig} /> : null}
      <Responsive
        breakpoint="md"
      >
        <S.ArrowDownContainer
          className={cx({
            'is--visible': isWindowOnTop && !playingGame,
          })}
          onClick={handleArrowDownClick}
        >
          <S.ArrowDown />
        </S.ArrowDownContainer>
      </Responsive>
      <S.WelcomeContainer
        $animationTimer={fadeAnimationTimer}
        className={cx({ playing: fadingOutContainer })}
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
      </S.WelcomeContainer>
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
          <S.FpsContainer
            className={cx({
              'is--visible': isWindowOnTop,
            })}
          >
            <Typography textAlign="center" variant="h6">FPS</Typography>
            <Grid container>
              {fpsOptions.map(renderFpsOption)}
            </Grid>
          </S.FpsContainer>
        </Responsive>
      )}
    </S.Wrapper>
  );
};

export default Welcome;
