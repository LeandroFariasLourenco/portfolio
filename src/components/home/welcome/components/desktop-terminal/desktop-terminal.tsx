'use client'

import { Typewriter } from '@/shared/components';
import { useGlobalContext } from '@/shared/contexts/global/global';
import { deleteLastCharacter } from '@/shared/functions';
import { useIsWindowTop, useLoginTime } from '@/shared/hooks';
import { EAppSections, ELanguages } from '@/shared/models';
import {
  ArrowRightAlt,
  Close, House, OpenInFull, Remove,
} from '@mui/icons-material';
import { Card, Grid, useTheme } from '@mui/material';
import cx from 'classnames';
import {
  useCallback,
  useEffect,
  useRef, useState,
} from 'react';
import { IntlShape, useIntl } from 'react-intl';
import { TypewriterClass } from 'typewriter-effect';
import useIntroTerminalTexts from '../../hooks/use-intro-terminal-texts';
import { ITerminalLine } from '../mobile-terminal/models/terminal-line.interface';
import { IDesktopTerminalProps } from './props.interface';

import styles from './desktop-terminal.module.scss';

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
        // window.location.href = APP.aws.curriculum[languageRef.current];
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
    if (!window) return;

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
      const timeout: number = setTimeout(() => {
        if (welcomeMessages.length !== introTerminalTexts.length) {
          setWelcomeMessages((prevState) => [...prevState, terminalText]);
        }
        clearTimeout(timeout);
      }, terminalText.timer) as unknown as number;

      animationQueue.current.push(timeout);
    });
  }, []);

  const renderTerminalMessage = useCallback((text: string, index: number) => (
    <div className={styles["desktop-terminal-row"]} key={`${text}-${index}`}>
      <h6 className={styles["desktop-terminal-subtitle"]}><ArrowRightAlt fontSize="small" />~</h6>
      <h6 className={`${styles["desktop-terminal-text"]} ${cx({
          [styles['is--current--line']]: index === terminalRows.length - 1,
        })}`}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </div>
  ), [intl, terminalRows.length]);

  const renderWelcomeMessage = useCallback((text: ITerminalLine, index: number) => (
    <div
      className={styles["desktop-terminal-row"]}
      key={`${text.key}-${index}`}
    >
      <h6 className={styles["desktop-terminal-subtitle"]}>
        <ArrowRightAlt fontSize="small" />
        ~
      </h6>
      <Typewriter
        options={{ delay: 0 }}
        variant='h6'
        variantProps={{
          /* @ts-ignore */
          style: {
            color: '#9AA5C6',
          }
        }}
        onInit={introTerminalTexts[index].typeText}
      />
    </div>
  ), [intl]);

  useEffect(() => {
    initTerminal();
  }, [intl]);

  return (
    <Grid
      className={`${styles["desktop-terminal"]} ${cx({
        [styles.closed]: playingGame,
      })}`}
      item
      md={8}
      sm={12}
    >
      <Card
        className={styles["desktop-terminal-typewriter-background"]}
        elevation={3}
      >
        <Grid
          className={`${styles["desktop-terminal-wrapper"]} ${cx({
            [styles['is--focused']]: isWindowOnTop,
          })}`}
        >
          <Grid
            className={styles["desktop-terminal-heading"]}
            container
            flexWrap="nowrap"
            alignItems="center"
            justifyContent="space-between"
          >
            <Grid
              className={styles["desktop-terminal-window-circles"]}
              container
              item
              md={3}
            >
              <div className={styles["desktop-terminal-window-wrapper"]}>
                <div className={styles["desktop-terminal-window-circle"]} style={{ backgroundColor: '#ED6152' }} />
                <Close className={styles["hover-icon"]} />
              </div>
              <div className={styles["desktop-terminal-window-wrapper"]}>
                <div className={styles["desktop-terminal-window-circle"]} style={{ backgroundColor: '#E7C21C' }} />
                <Remove className={styles["hover-icon"]} />
              </div>
              <div className={styles["desktop-terminal-window-wrapper"]}>
                <div className={styles["desktop-terminal-window-circle"]} style={{ backgroundColor: '#4AC628' }} />
                <OpenInFull className={styles["hover-icon rotate"]} />
              </div>
            </Grid>

            <Grid
              container
              item
              md={8}
              alignItems="center"
            >
              <House fontSize="small" htmlColor={theme.palette.grey[400]} />
              <h6 className={styles["desktop-terminal-title"]}>portfolio -- -bash --80x24</h6>
            </Grid>
          </Grid>
          <div className={styles["desktop-terminal-content"]} ref={(ref: HTMLDivElement) => {
            terminalContainerRef.current = ref;
          }}
          >
            <div className={styles["desktop-terminal-row"]}>
              <h6 className={`${styles["desktop-terminal-subtitle"]} ${styles["desktop-terminal-subtitle-login"]}`}>{loginTime}</h6>
            </div>
            {welcomeMessages.map(renderWelcomeMessage)}
            {welcomeMessages.length === introTerminalTexts.length && terminalRows.map(renderTerminalMessage)}
          </div>
        </Grid>
      </Card>
    </Grid>
  );
};

export default DesktopTerminal;
