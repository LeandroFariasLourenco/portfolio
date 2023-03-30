import { Grid } from '@mui/material';
import Particles from 'react-tsparticles';
import Responsive from 'src/core/components/responsive/responsive';
import { APP } from 'src/core/constants';
import loadParticlesEngine from 'src/core/functions/load-particles-engine';
import useResponsive from 'src/core/hooks/useResponsive/useResponsive';
import { EResponsiveType } from 'src/core/models';
import DesktopTerminal from './components/desktop-terminal/desktop-terminal';
import MobileTerminal from './components/mobile-terminal/mobile-terminal';
import { desktopParticlesConfig } from './particles/desktop-config';
import { mobileParticlesConfig } from './particles/mobile-config';
import * as S from './styled';

const Welcome = () => {
  const isDesktop = useResponsive({});

  const handleArrowDownClick = () => {
    window.scrollTo({
      top: window.innerHeight - APP.header.height,
      behavior: 'smooth',
    });
  };

  return (
    <S.Wrapper container alignItems="center" item justifyContent="center" md={12}>
      <Particles
        id="welcome-background"
        canvasClassName="background-canvas"
        init={loadParticlesEngine}
        params={isDesktop ? desktopParticlesConfig : mobileParticlesConfig}
      />
      <Responsive
        breakpoint="md"
      >
        <S.ArrowDownContainer
          onClick={handleArrowDownClick}
        >
          <S.ArrowDown />
        </S.ArrowDownContainer>
      </Responsive>
      <S.WelcomeContainer container justifyContent="center" alignItems="center" md={10} lg={8} sm={8} item spacing={isDesktop ? 10 : 5}>
        <Responsive
          breakpoint="md"
          type={EResponsiveType.smaller}
        >
          <Grid item xs={12}><S.ProfileImage src="https://www.github.com/LeandroFariasLourenco.png?size=200" /></Grid>
        </Responsive>
        <S.TerminalComponentWrapper item md={8} sm={12}>
          <S.TypeWriterBackground
            elevation={3}
          >
            {isDesktop ? <DesktopTerminal /> : <MobileTerminal />}
          </S.TypeWriterBackground>
        </S.TerminalComponentWrapper>
        <Responsive
          breakpoint="md"
        >
          <Grid item md={4}><S.ProfileImage src="https://www.github.com/LeandroFariasLourenco.png?size=200" /></Grid>
        </Responsive>
      </S.WelcomeContainer>
    </S.Wrapper>
  );
};

export default Welcome;
