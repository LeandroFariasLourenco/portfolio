import {
  Close, CropDin, Remove,
} from '@mui/icons-material';
import { Grid } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import { useIntl } from 'react-intl';
import { Typewriter } from 'src/core/components';
import { getBucketResource } from 'src/core/functions';
import { TypewriterClass } from 'typewriter-effect';
import { ITerminalLine } from './models/terminal-line.interface';
import * as S from './styled';

const MobileTerminal = () => {
  const intl = useIntl();
  const [terminalRows, setTerminalRows] = useState<ITerminalLine[]>([]);

  const terminalTexts = useMemo<ITerminalLine[]>(() => ([
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
      timer: 3250,
      typeText: (typewriter: TypewriterClass) => {
        typewriter.typeString(intl.messages['home.welcome.terminal.text2.string1'] as string)
          .start();
      },
    },
    {
      key: 'third',
      timer: 7250,
      typeText: (typewriter: TypewriterClass) => {
        typewriter.typeString(intl.messages['home.welcome.terminal.text3.string1'] as string)
          .start();
      },
    },
    {
      key: 'fourth',
      timer: 8450,
      typeText: (typewriter: TypewriterClass) => {
        typewriter.typeString(intl.messages['home.welcome.terminal.text4.string1'] as string)
          .start();
      },
    },
    {
      key: 'fifth',
      timer: 10850,
      typeText: (typewriter: TypewriterClass) => {
        typewriter.typeString(':)').start();
      },
    },
  ]), [intl]);

  const setupTerminalTimer = () => {
    terminalTexts.forEach((terminalText) => {
      const timeout = setTimeout(() => {
        if (terminalRows.length !== terminalTexts.length) {
          setTerminalRows((prevState) => [...prevState, terminalText]);
        }
        clearTimeout(timeout);
      }, terminalText.timer);
    });
  };

  useEffect(() => {
    setupTerminalTimer();
  }, []);

  return (
    <S.TerminalComponentWrapper
      item
      xs={12}
    >
      <S.TypeWriterBackground
        elevation={3}
      >
        <S.TerminalWrapper item xs={12}>
          <S.TerminalHeading
            container
            flexDirection="row"
            flexWrap="nowrap"
          >
            <S.TerminalTab
              container
              flexDirection="row"
              flexWrap="nowrap"
            >
              <S.TerminalTabIcon src={getBucketResource('/assets/git-for-windows.ico')} />

              <S.TerminalTabText>Bash</S.TerminalTabText>

              <S.TerminalTabClose>
                <Close htmlColor="white" fontSize="small" />
              </S.TerminalTabClose>
            </S.TerminalTab>
            <S.TerminalWindowOptions
              container
              justifyContent="flex-end"
              alignItems="center"
            >
              <Remove htmlColor="white" fontSize="small" />
              <CropDin htmlColor="white" fontSize="small" style={{ marginLeft: 15, marginRight: 15 }} />
              <Close htmlColor="white" fontSize="small" />
            </S.TerminalWindowOptions>
          </S.TerminalHeading>
          <S.TerminalContent>
            {terminalRows.map((text) => (
              <S.TerminalRow
                container
                flexDirection="column"
                key={text.key}
              >
                <S.TerminalText
                  container
                  flexDirection="row"
                  flexWrap="nowrap"
                >
                  <S.TerminalTextUser>Leand@DESKTOP</S.TerminalTextUser>
                  <S.TerminalTextCPU>MINGW64</S.TerminalTextCPU>
                  <S.TerminalTextPath>/c/WINDOWS/system32</S.TerminalTextPath>
                </S.TerminalText>
                <Grid
                  container
                  flexWrap="nowrap"
                  alignItems="flex-start"
                >
                  <S.TerminalTabCommandPrefix variant="h6">$</S.TerminalTabCommandPrefix>
                  <Typewriter
                    options={{
                      delay: 50,
                    }}
                    typographyProps={{
                      variant: 'h6',
                      fontSize: 14.5,
                    }}
                    onInit={text.typeText}
                  />
                </Grid>
              </S.TerminalRow>
            ))}
          </S.TerminalContent>
        </S.TerminalWrapper>
      </S.TypeWriterBackground>
    </S.TerminalComponentWrapper>
  );
};

export default MobileTerminal;
