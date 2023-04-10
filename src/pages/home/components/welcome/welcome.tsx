import { Grid } from '@mui/material';
import cx from 'classnames';
import LazyLoadParticles from 'src/core/components/lazy-load/lazy-load';
import Responsive from 'src/core/components/responsive/responsive';
import { APP } from 'src/core/constants';
import useIsWindowTop from 'src/core/hooks/useIsWindowTop';
import useResponsive from 'src/core/hooks/useResponsive/useResponsive';
import { EAppSections, EResponsiveType } from 'src/core/models';
import { useMemo, useState } from 'react';
import DesktopTerminal from './components/desktop-terminal/desktop-terminal';
import MobileTerminal from './components/mobile-terminal/mobile-terminal';
import { desktopParticlesConfig } from './particles/desktop-config';
import { mobileParticlesConfig } from './particles/mobile-config';
import * as S from './styled';
import SnakeGame from './components/snake-game/snake-game';

const Welcome = () => {
  const isDesktop = useResponsive({});
  const { isWindowOnTop } = useIsWindowTop();
  const fadeAnimationTimer = useMemo(() => 1000, []);
  const [showGame, setShowGame] = useState<boolean>(false);
  const [fadingOutContainer, setFadingOutContainer] = useState<boolean>(false);

  const handleArrowDownClick = () => {
    window.scrollTo({
      top: window.innerHeight - APP.header.height,
      behavior: 'smooth',
    });
  };

  const awaitFadeAnimation = () => {
    setTimeout(() => {
      setShowGame(true);
    }, fadeAnimationTimer);
  };

  return (
    <S.Wrapper container alignItems="center" item justifyContent="center" md={12} id={EAppSections.WELCOME}>
      <LazyLoadParticles id="welcome-section" particlesConfig={isDesktop ? desktopParticlesConfig : mobileParticlesConfig} />
      <Responsive
        breakpoint="md"
      >
        <S.ArrowDownContainer
          className={cx({
            'is--visible': isWindowOnTop,
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
        md={10}
        lg={8}
        sm={8}
        item
        spacing={isDesktop ? 10 : 5}
      >
        <Responsive
          breakpoint="md"
          type={EResponsiveType.smaller}
        >
          <Grid item xs={12}><S.ProfileImage src="https://www.github.com/LeandroFariasLourenco.png?size=200" /></Grid>
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
          <Grid item md={4}><S.ProfileImage src="https://www.github.com/LeandroFariasLourenco.png?size=200" /></Grid>
        </Responsive>
      </S.WelcomeContainer>
      {showGame ? (
        <SnakeGame
          onClose={() => {
            setFadingOutContainer(false);
            setShowGame(false);
          }}
        />
      ) : null}
    </S.Wrapper>
  );
};

export default Welcome;
