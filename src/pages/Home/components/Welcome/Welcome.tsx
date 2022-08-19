import { Grid, Typography, useTheme } from '@mui/material';
import { Typewriter } from 'src/core/components';
import Particles from 'react-tsparticles';
import { Close, House } from '@mui/icons-material';
import { useEffect, useMemo, useState } from 'react';
import TypewriterEffect, { TypewriterClass } from 'typewriter-effect';
import { useIntl } from 'react-intl';
import { APP } from 'src/core/constants';
import * as S from './styled';
import { particlesConfig } from './particles-config';

const Welcome = () => {
  const theme = useTheme();
  const intl = useIntl();
  const [terminalRows, setTerminalRows] = useState([]);

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
    <S.Wrapper container alignItems="center" item justifyContent="center" xs={12}>
      <Particles
        id="welcome-background"
        canvasClassName="background-canvas"
        options={particlesConfig}
      />
      <S.ArrowDownContainer
        onClick={handleArrowDownClick}
      >
        <S.ArrowDown />
      </S.ArrowDownContainer>
      <Grid container xs={6} item spacing={20}>
        <Grid item xs={8}>
          <S.TypeWriterBackground
            elevation={3}
          >
            <S.TerminalHeading
              container
              flexWrap="nowrap"
              alignItems="center"
              justifyContent="space-between"
            >
              <S.TerminalWindowCircles
                container
                item
                xs={3}
              >
                <S.TerminalWindowCircle $color="#ED6152" />
                <S.TerminalWindowCircle $color="#E7C21C" />
                <S.TerminalWindowCircle $color="#4AC628" />
              </S.TerminalWindowCircles>

              <S.TerminalTitleContainer
                container
                item
                xs={6}
                alignItems="center"
              >
                <House fontSize="small" htmlColor={theme.palette.grey[400]} />
                <S.TerminalTitle variant="h6">
                  portfolio -- -bash --80x24
                </S.TerminalTitle>
              </S.TerminalTitleContainer>

              <Close fontSize="small" htmlColor={theme.palette.grey[400]} />
            </S.TerminalHeading>
            <S.TerminalContent>
              {terminalText.map((text) => (
                <S.TerminalRow
                  key={text.key}
                >
                  <S.TerminalText variant="h6">
                    Leandro:
                  </S.TerminalText>
                  <Typewriter
                    typographyProps={{
                      variant: 'h6',
                    }}
                    onInit={text.typeText}
                  />
                </S.TerminalRow>
              ))}
              <S.TerminalRow>
                <S.TerminalText variant="h6">
                  Leandro:
                </S.TerminalText>
                <Typography>
                  <TypewriterEffect
                    onInit={(typewriter) => {
                      typewriter.start();
                    }}
                  />
                </Typography>
              </S.TerminalRow>
            </S.TerminalContent>
          </S.TypeWriterBackground>
        </Grid>
        <Grid item xs={4}>
          <S.ProfileImage src="https://www.github.com/LeandroFariasLourenco.png?size=200" />
        </Grid>
      </Grid>
    </S.Wrapper>
  );
};

export default Welcome;
