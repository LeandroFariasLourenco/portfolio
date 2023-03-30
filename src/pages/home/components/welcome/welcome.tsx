import { Grid, Typography, useTheme } from '@mui/material';
import { Typewriter } from 'src/core/components';
import Particles from 'react-tsparticles';
import { Close, House } from '@mui/icons-material';
import { useEffect, useMemo, useState } from 'react';
import TypewriterEffect, { TypewriterClass } from 'typewriter-effect';
import { useIntl } from 'react-intl';
import { APP } from 'src/core/constants';
import Responsive from 'src/core/components/responsive/responsive';
import { EResponsiveType } from 'src/core/models';
import useResponsive from 'src/core/hooks/useResponsive/useResponsive';
import * as S from './styled';
import { mobileParticlesConfig } from './particles/mobile-config';
import { desktopParticlesConfig } from './particles/desktop-config';
import DesktopTerminal from './components/desktop-terminal/desktop-terminal';
import MobileTerminal from './components/mobile-terminal/mobile-terminal';

const Welcome = () => {
  const theme = useTheme();
  const intl = useIntl();
  const [terminalRows, setTerminalRows] = useState([]);
  const isDesktop = useResponsive({});

  const terminalText = useMemo(() => ([
    {
      key: 'first',
      timer: 0,
      typeText: (typewriter: TypewriterClass) => {
        typewriter.typeString(intl.messages['home.welcome.terminal.text1.string1'] as string)
          .deleteChars(4)
          .typeString(intl.messages['home.welcome.terminal.text1.string2'] as string)
          .deleteChars(2)
          .typeString(intl.messages['home.welcome.terminal.text1.string3'] as string)
          .start();
      },
    },
    {
      key: 'second',
      timer: 6500,
      typeText: (typewriter: TypewriterClass) => {
        typewriter.typeString(intl.messages['home.welcome.terminal.text2.string1'] as string)
          .start();
      },
    },
    {
      key: 'third',
      timer: 13500,
      typeText: (typewriter: TypewriterClass) => {
        typewriter.typeString(intl.messages['home.welcome.terminal.text3.string1'] as string)
          .start();
      },
    },
    {
      key: 'fourth',
      timer: 14500,
      typeText: (typewriter: TypewriterClass) => {
        typewriter.typeString(intl.messages['home.welcome.terminal.text4.string1'] as string)
          .start();
      },
    },
    {
      key: 'fifth',
      timer: 16000,
      typeText: (typewriter: TypewriterClass) => {
        typewriter.typeString(':)').start();
      },
    },
  ]), [intl]);

  const setupTerminalTimers = () => { };

  const handleArrowDownClick = () => {
    window.scrollTo({
      top: window.innerHeight - APP.header.height,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    setupTerminalTimers();
  }, []);

  return (
    <S.Wrapper container alignItems="center" item justifyContent="center" md={12}>
      <Particles
        id="welcome-background"
        canvasClassName="background-canvas"
        options={isDesktop ? desktopParticlesConfig : mobileParticlesConfig}
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
      <Grid container justifyContent="center" alignItems="center" md={10} lg={8} sm={8} item spacing={isDesktop ? 10 : 5}>
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
      </Grid>
    </S.Wrapper>
  );
};

export default Welcome;
