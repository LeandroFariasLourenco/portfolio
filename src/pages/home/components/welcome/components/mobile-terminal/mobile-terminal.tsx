import {
  Close, CropDin, Remove,
} from '@mui/icons-material';
import { Typography, useTheme } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import { useIntl } from 'react-intl';
import { Typewriter } from 'src/core/components';
import { APP } from 'src/core/constants';
import TypewriterEffect, { TypewriterClass } from 'typewriter-effect';
import * as S from './styled';

const MobileTerminal = () => {
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

  useEffect(() => {
    setupTerminalTimers();
  }, []);

  return (
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
          <S.TerminalTabIcon src={`${APP.aws.assets}/assets/git-for-windows.ico`} />

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
        {terminalText.map((text) => (
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
            <Typewriter
              typographyProps={{
                variant: 'h6',
              }}
              onInit={text.typeText}
            />
          </S.TerminalRow>
        ))}
        {/* <S.TerminalRow>
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
        </S.TerminalRow> */}
      </S.TerminalContent>
    </S.TerminalWrapper>
  );
};

export default MobileTerminal;
