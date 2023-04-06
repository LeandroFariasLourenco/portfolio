import {
  ArrowRightAlt,
  Close, House, OpenInFull, Remove,
} from '@mui/icons-material';
import { useTheme } from '@mui/material';
import cx from 'classnames';
import {
  useEffect, useMemo, useRef, useState,
} from 'react';
import { useIntl } from 'react-intl';
import { Typewriter } from 'src/core/components';
import { useLoginTime } from 'src/core/hooks';
import useIsWindowTop from 'src/core/hooks/useIsWindowTop';
import { TypewriterClass } from 'typewriter-effect';
import { deleteLastCharacter } from 'src/core/functions';
import { EAppSections } from 'src/core/models';
import { ITerminalLine } from '../mobile-terminal/models/terminal-line.interface';
import * as S from './styled';

const DesktopTerminal = () => {
  const theme = useTheme();
  const intl = useIntl();
  const [welcomeMessages, setWelcomeMessages] = useState<ITerminalLine[]>([]);
  const [terminalRows, setTerminalRowsCount] = useState<string[]>(['']);
  const { isWindowOnTop } = useIsWindowTop();
  const isWindowOnTopRef = useRef<boolean>(isWindowOnTop);
  const terminalContainerRef = useRef<HTMLDivElement>();
  const { loginTime } = useLoginTime();
  const [playingGame, setPlayingGame] = useState<boolean>(false);

  const introTerminalTexts = useMemo<ITerminalLine[]>(() => ([
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
        typewriter.typeString('Digite /help para mais informações').start();
      },
    },
  ]), [intl]);

  const scrollToTerminalBottom = () => {
    requestAnimationFrame(() => {
      terminalContainerRef.current!.scrollTo({
        top: terminalContainerRef.current!.scrollHeight,
      });
    });
  };

  const handleSpacePress = (event: KeyboardEvent) => {
    setTerminalRowsCount((prevState) => {
      const newState = [...prevState];
      newState[newState.length - 1] += '&nbsp;';
      return newState;
    });
    event.preventDefault();
    scrollToTerminalBottom();
  };

  const handleBackspacePress = () => {
    setTerminalRowsCount((prevState) => {
      const newState = [...prevState];
      const currentIndex = newState.length - 1;
      newState[currentIndex] = deleteLastCharacter(newState[currentIndex]);
      return newState;
    });
  };

  const handleEnterPress = () => {
    setTerminalRowsCount((prevState) => {
      const currentIndex = prevState.length - 1;
      if (!prevState[currentIndex]) return prevState;
      const newState = [...prevState];
      const userInput = newState[currentIndex];
      const appSections = Object.values(EAppSections) as string[];

      if (appSections.includes(userInput.replace('/', ''))) {
        requestAnimationFrame(() => {
          document.querySelector(`#${userInput.replace('/', '')}`)!.scrollIntoView();
        });
        scrollToTerminalBottom();
        return [...newState, ''];
      }

      if (userInput === 'clear') {
        return [''];
      }

      const answers = ['Snake game', 'jogo da cobrinha', 'cobrinha', 'serpente', 'jogo da serpente', 'snake'];
      if (answers.includes(`${userInput.toLowerCase()}`)) {
        setPlayingGame(true);
        return [''];
      }

      if (userInput === '/game') {
        newState.push('Qual jogo foi inspirado pelo Blockade de 1976?');
        scrollToTerminalBottom();
        return [...newState, ''];
      }

      if (userInput === '/help') {
        newState.push('Aqui está uma lista de comandos possíveis:');
        appSections.forEach((section) => {
          newState.push(`/${section}`);
        });
        newState.push('/game');
        scrollToTerminalBottom();
        return [...newState, ''];
      }

      scrollToTerminalBottom();
      return [...newState, `Bash: comando não encontrado: ${userInput}`, ''];
    });
  };

  const handleKeyPress = (key: string) => {
    setTerminalRowsCount((prevState) => {
      const currentIndex = prevState.length - 1;
      const newState = [...prevState];
      newState[currentIndex] += key;
      scrollToTerminalBottom();
      return newState;
    });
  };

  const setupTerminalActions = (event: KeyboardEvent) => {
    if (!isWindowOnTopRef.current) {
      return;
    }

    const keyBlacklist = [
      'ShiftLeft', 'ShiftRight', 'CapsLock', 'Control', 'ScrollLock', 'Tab', 'ContextMenu',
      'Meta', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8',
      'F9', 'F10', 'F11', 'F12', 'Escape', 'Dead', 'Shift',
    ];

    const keysToPreventDefault = [
      'PageDown', 'PageUp', 'End', 'Home', 'AltRight', 'AltLeft',
      'ControlLeft', 'ControlRight', 'Delete', 'Insert', 'ScrollLock', 'Pause',
      'ArrowRight', 'ArrowDown', 'ArrowUp', 'ArrowDown',
    ];

    if (keyBlacklist.includes(event.key) || keysToPreventDefault.includes(event.code)) {
      event.preventDefault();
      return;
    }

    switch (event.code) {
      case 'Space': handleSpacePress(event);
        break;
      case 'Backspace': handleBackspacePress();
        break;
      case 'Enter': handleEnterPress();
        break;
      default: handleKeyPress(event.key);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', setupTerminalActions);

    return () => {
      window.removeEventListener('keydown', setupTerminalActions);
    };
  }, []);

  useEffect(() => {
    isWindowOnTopRef.current = isWindowOnTop;
  }, [isWindowOnTop]);

  const setupTerminalTimer = () => {
    introTerminalTexts.forEach((terminalText) => {
      const timeout = setTimeout(() => {
        if (welcomeMessages.length !== introTerminalTexts.length) {
          setWelcomeMessages((prevState) => [...prevState, terminalText]);
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
      className={cx({
        closed: playingGame,
      })}
      item
      md={8}
      sm={12}
    >
      <S.TypeWriterBackground
        elevation={3}
      >
        <S.TerminalWrapper
          className={cx({
            'is--focused': isWindowOnTop,
          })}
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
              md={3}
            >
              <S.TerminalWindowWrapper>
                <S.TerminalWindowCircle $color="#ED6152" />
                <Close className="hover-icon" />
              </S.TerminalWindowWrapper>
              <S.TerminalWindowWrapper>
                <S.TerminalWindowCircle $color="#E7C21C" />
                <Remove className="hover-icon" />
              </S.TerminalWindowWrapper>
              <S.TerminalWindowWrapper>
                <S.TerminalWindowCircle $color="#4AC628" />
                <OpenInFull className="hover-icon rotate" />
              </S.TerminalWindowWrapper>
            </S.TerminalWindowCircles>

            <S.TerminalTitleContainer
              container
              item
              md={8}
              alignItems="center"
            >
              <House fontSize="small" htmlColor={theme.palette.grey[400]} />
              <S.TerminalTitle variant="h6">
                portfolio -- -bash --80x24
              </S.TerminalTitle>
            </S.TerminalTitleContainer>
          </S.TerminalHeading>
          {/* @ts-ignore */}
          <S.TerminalContent ref={terminalContainerRef}>
            <S.TerminalRow>
              <S.TerminalPrefixText variant="h6">{loginTime}</S.TerminalPrefixText>
            </S.TerminalRow>
            {welcomeMessages.map((text, index) => (
              <S.TerminalRow
                key={`${text.key}-${index}`}
              >
                <S.TerminalPrefixText variant="h6">
                  <ArrowRightAlt fontSize="small" />
                  ~
                </S.TerminalPrefixText>
                <Typewriter
                  options={{
                    delay: 50,
                  }}
                  typographyProps={{
                    variant: 'h6',
                  }}
                  onInit={introTerminalTexts[index].typeText}
                />
              </S.TerminalRow>
            ))}
            {terminalRows.map((text, index) => (
              <S.TerminalRow key={`${text}-${index}`}>
                <S.TerminalPrefixText variant="h6">
                  <ArrowRightAlt fontSize="small" />
                  ~
                </S.TerminalPrefixText>
                <S.TerminalText
                  variant="h6"
                  className={cx({
                    'is--current--line': index === terminalRows.length - 1,
                  })}
                  dangerouslySetInnerHTML={{ __html: text }}
                />
              </S.TerminalRow>
            ))}
          </S.TerminalContent>
        </S.TerminalWrapper>
      </S.TypeWriterBackground>
    </S.TerminalComponentWrapper>
  );
};

export default DesktopTerminal;
