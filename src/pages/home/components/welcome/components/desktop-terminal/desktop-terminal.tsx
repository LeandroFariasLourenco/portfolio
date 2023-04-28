import {
  ArrowRightAlt,
  Close, House, OpenInFull, Remove,
} from '@mui/icons-material';
import { useTheme } from '@mui/material';
import cx from 'classnames';
import {
  useCallback,
  useEffect,
  useRef, useState,
} from 'react';
import { IntlShape, useIntl } from 'react-intl';
import { Typewriter } from 'src/core/components';
import { APP } from 'src/core/constants';
import { deleteLastCharacter } from 'src/core/functions';
import { useIsWindowTop, useLoginTime } from 'src/core/hooks';
import { EAppSections, ELanguages } from 'src/core/models';
import { TypewriterClass } from 'typewriter-effect';
import { useGlobalContext } from 'src/core/context/global/global-context';
import useIntroTerminalTexts from '../../hooks/use-intro-terminal-texts';
import { ITerminalLine } from '../mobile-terminal/models/terminal-line.interface';
import { IDesktopTerminalProps } from './props.interface';
import * as S from './styled';

const DesktopTerminal = ({
  onGameActivation,
  playingGame,
}: IDesktopTerminalProps) => {
  const theme = useTheme();
  const intl = useIntl();
  const { language } = useGlobalContext();
  const languageRef = useRef<ELanguages>(language);
  const [welcomeMessages, setWelcomeMessages] = useState<ITerminalLine[]>([]);
  const [terminalRows, setTerminalRowsCount] = useState<string[]>(['']);
  const { isWindowOnTop } = useIsWindowTop();
  const isWindowOnTopRef = useRef<boolean>(isWindowOnTop);
  const terminalContainerRef = useRef<HTMLDivElement>();
  const animationQueue = useRef<number[]>([]);
  const { loginTime } = useLoginTime();
  const intlRef = useRef<IntlShape>();
  const introTerminalTexts = useIntroTerminalTexts([
    {
      key: 'fifth',
      timer: 2900,
      typeText: (typewriter: TypewriterClass) => {
        typewriter.typeString(intl.formatMessage({ id: 'home.welcome.terminal.helper-command' })).start();
      },
    },
  ]);

  const clearAnimationQueue = () => {
    animationQueue.current.forEach((timeout) => { clearTimeout(timeout); });
    animationQueue.current = [];
  };

  const scrollToTerminalBottom = useCallback(() => {
    requestAnimationFrame(() => {
      if (!terminalContainerRef.current) return;

      terminalContainerRef.current.scrollTo({
        top: terminalContainerRef.current!.scrollHeight,
      });
    });
  }, [terminalContainerRef]);

  const handleSpacePress = useCallback((event: KeyboardEvent) => {
    setTerminalRowsCount((prevState) => {
      const newState = [...prevState];
      newState[newState.length - 1] += '&nbsp;';
      return newState;
    });
    event.preventDefault();
    scrollToTerminalBottom();
  }, []);

  const handleBackspacePress = useCallback(() => {
    setTerminalRowsCount((prevState) => {
      const newState = [...prevState];
      const currentIndex = newState.length - 1;
      newState[currentIndex] = deleteLastCharacter(newState[currentIndex]);
      return newState;
    });
  }, []);

  const handleEnterPress = useCallback(() => {
    setTerminalRowsCount((prevState) => {
      const currentIndex = prevState.length - 1;
      if (!prevState[currentIndex]) return prevState;
      const newState = [...prevState];
      const userInput = newState[currentIndex];
      const appSections = Object.values(EAppSections).filter((section) => section !== EAppSections.WELCOME) as string[];

      if (userInput === '/curriculum') {
        window.location.href = APP.aws.curriculum[languageRef.current];
        scrollToTerminalBottom();
        return [...newState, ''];
      }

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

      const answers = ['jogodacobrinha', 'cobrinha', 'serpente', 'jogodaserpente', 'snake', 'snakegame', 'jogodacobra'];
      if (answers.includes(userInput
        .trim()
        .toLowerCase()
        .replace(/\s|&nbsp;/g, ''))) {
        onGameActivation();
        return [''];
      }

      if (userInput === '/game') {
        newState.push(intlRef.current!.formatMessage({ id: 'home.welcome.terminal.game.question' }));
        scrollToTerminalBottom();
        return [...newState, ''];
      }

      if (userInput === '/help') {
        newState.push(intlRef.current!.formatMessage({ id: 'home.welcome.terminal.possible-commands' }));
        appSections.forEach((section) => {
          newState.push(`/${section}`);
        });
        newState.push('/curriculum');
        newState.push('/game');
        scrollToTerminalBottom();
        return [...newState, ''];
      }

      scrollToTerminalBottom();
      return [...newState, `${intlRef.current!.formatMessage({ id: 'home.welcome.terminal.not-found' })} ${userInput}`, ''];
    });
  }, []);

  const handleKeyPress = useCallback((key: string) => {
    setTerminalRowsCount((prevState) => {
      const currentIndex = prevState.length - 1;
      const newState = [...prevState];
      newState[currentIndex] += key;
      scrollToTerminalBottom();
      return newState;
    });
  }, []);

  const setupTerminalActions = useCallback((event: KeyboardEvent) => {
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

    clearAnimationQueue();
    setWelcomeMessages([...introTerminalTexts]);
    switch (event.code) {
      case 'Space': handleSpacePress(event);
        break;
      case 'Backspace': handleBackspacePress();
        break;
      case 'Enter': handleEnterPress();
        break;
      default: handleKeyPress(event.key);
    }
  }, []);

  useEffect(() => {
    if (!playingGame) {
      window.addEventListener('keydown', setupTerminalActions);
      return;
    }

    window.removeEventListener('keydown', setupTerminalActions);
  }, [playingGame]);

  useEffect(() => {
    isWindowOnTopRef.current = isWindowOnTop;
  }, [isWindowOnTop]);

  useEffect(() => {
    intlRef.current = intl;
  }, [intl]);

  useEffect(() => {
    languageRef.current = language;
  }, [language]);

  const initTerminal = useCallback(() => {
    clearAnimationQueue();
    setTerminalRowsCount(['']);
    setWelcomeMessages([]);

    introTerminalTexts.forEach((terminalText) => {
      const timeout = setTimeout(() => {
        if (welcomeMessages.length !== introTerminalTexts.length) {
          setWelcomeMessages((prevState) => [...prevState, terminalText]);
        }
        clearTimeout(timeout);
      }, terminalText.timer);
      animationQueue.current.push(timeout);
    });
  }, []);

  const renderTerminalMessage = useCallback((text: string, index: number) => (
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
  ), [intl, terminalRows.length]);

  const renderWelcomeMessage = useCallback((text: ITerminalLine, index: number) => (
    <S.TerminalRow
      key={`${text.key}-${index}`}
    >
      <S.TerminalPrefixText variant="h6">
        <ArrowRightAlt fontSize="small" />
        ~
      </S.TerminalPrefixText>
      <Typewriter
        options={{ delay: 0 }}
        typographyProps={{
          variant: 'h6',
        }}
        onInit={introTerminalTexts[index].typeText}
      />
    </S.TerminalRow>
  ), [intl]);

  useEffect(() => {
    initTerminal();
  }, [intl]);

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
          <S.TerminalContent ref={(ref: HTMLDivElement) => {
            terminalContainerRef.current = ref;
          }}
          >
            <S.TerminalRow>
              <S.TerminalPrefixText variant="h6">{loginTime}</S.TerminalPrefixText>
            </S.TerminalRow>
            {welcomeMessages.map(renderWelcomeMessage)}
            {welcomeMessages.length === introTerminalTexts.length && terminalRows.map(renderTerminalMessage)}
          </S.TerminalContent>
        </S.TerminalWrapper>
      </S.TypeWriterBackground>
    </S.TerminalComponentWrapper>
  );
};

export default DesktopTerminal;
