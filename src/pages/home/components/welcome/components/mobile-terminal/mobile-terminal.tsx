import {
  Close, CropDin, Remove,
} from '@mui/icons-material';
import { Grid } from '@mui/material';
import cx from 'classnames';
import {
  useCallback, useEffect,
  useState,
} from 'react';
import { Typewriter } from 'src/core/components';
import { getBucketResource } from 'src/core/functions';
import { useIsWindowTop } from 'src/core/hooks';
import useIntroTerminalTexts from '../../hooks/use-intro-terminal-texts';
import { ITerminalLine } from './models/terminal-line.interface';
import * as S from './styled';

const MobileTerminal = () => {
  const [terminalRows, setTerminalRows] = useState<ITerminalLine[]>([]);
  const { isWindowOnTop } = useIsWindowTop();
  const terminalTexts = useIntroTerminalTexts();

  const setupTerminalTimer = useCallback(() => {
    terminalTexts.forEach((terminalText) => {
      const timeout = setTimeout(() => {
        if (terminalRows.length !== terminalTexts.length) {
          setTerminalRows((prevState) => [...prevState, terminalText]);
        }
        clearTimeout(timeout);
      }, terminalText.timer);
    });
  }, []);

  useEffect(() => {
    setupTerminalTimer();
  }, []);

  return (
    <S.TerminalComponentWrapper
      item
      xs={12}
      className={cx({
        'is--focused': isWindowOnTop,
      })}
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
              <S.TerminalTabIcon src={getBucketResource('/git-for-windows.ico')} />

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
              <S.TerminalIconContainer>
                <Remove htmlColor="white" fontSize="small" />
              </S.TerminalIconContainer>

              <S.TerminalIconContainer>
                <CropDin htmlColor="white" fontSize="small" />
              </S.TerminalIconContainer>

              <S.TerminalIconContainer>
                <Close htmlColor="white" fontSize="small" />
              </S.TerminalIconContainer>
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
                      delay: 10,
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
