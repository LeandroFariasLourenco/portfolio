'use client'

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
import { Typewriter } from '@/shared/components';
import { deleteLastCharacter } from '@/shared/functions';
import { useIsWindowTop, useLoginTime } from '@/shared/hooks';
import { EAppSections, ELanguages } from '@/shared/models';
import { TypewriterClass } from 'typewriter-effect';
import { useGlobalContext } from '@/shared/contexts/global/global';
import useIntroTerminalTexts from '../../hooks/use-intro-terminal-texts';
import { ITerminalLine } from '../mobile-terminal/models/terminal-line.interface';
import { IDesktopTerminalProps } from './props.interface';
import { APP } from '@/shared/constants/app';

import './desktop-terminal.scss';

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
    // if (!playingGame) {
    //   window.addEventListener('keydown', setupTerminalActions);
    //   return;
    // }

    // window.removeEventListener('keydown', setupTerminalActions);
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
    <div className="desktop-terminal-row" key={`${text}-${index}`}>
      <h6 className="desktop-terminal-subtitle">
        <ArrowRightAlt fontSize="small" />
        ~
      </h6>
      <h6
        className={`desktop-terminal-text ${cx({
          'is--current--line': index === terminalRows.length - 1,
        })}`}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </div>
  ), [intl, terminalRows.length]);

  const renderWelcomeMessage = useCallback((text: ITerminalLine, index: number) => (
    <div
      className="desktop-terminal-row"
      key={`${text.key}-${index}`}
    >
      <h6 className="desktop-terminal-subtitle">
        <ArrowRightAlt fontSize="small" />
        ~
      </h6>
      <Typewriter
        options={{ delay: 0 }}
        variant='h6'
        onInit={introTerminalTexts[index].typeText}
      />
    </div>
  ), [intl]);

  useEffect(() => {
    initTerminal();
  }, [intl]);

  return (
    <Grid
      className={`desktop-terminal ${cx({
        closed: playingGame,
      })}`}
      item
      md={8}
      sm={12}
    >
      <Card
        className="desktop-terminal-typewriter-background"
        elevation={3}
      >
        <Grid
          className={`desktop-terminal-wrapper ${cx({
            'is--focused': isWindowOnTop,
          })}`}
        >
          <Grid
            className="desktop-terminal-heading"
            container
            flexWrap="nowrap"
            alignItems="center"
            justifyContent="space-between"
          >
            <Grid
              className="desktop-terminal-window-circles"
              container
              item
              md={3}
            >
              <div className="desktop-terminal-window-wrapper">
                <div className="desktop-terminal-window-circle" style={{ backgroundColor: '#ED6152' }} />
                <Close className="hover-icon" />
              </div>
              <div className="desktop-terminal-window-wrapper">
                <div className="desktop-terminal-window-circle" style={{ backgroundColor: '#E7C21C' }} />
                <Remove className="hover-icon" />
              </div>
              <div className="desktop-terminal-window-wrapper">
                <div className="desktop-terminal-window-circle" style={{ backgroundColor: '#4AC628' }} />
                <OpenInFull className="hover-icon rotate" />
              </div>
            </Grid>

            <Grid
              container
              item
              md={8}
              alignItems="center"
            >
              <House fontSize="small" htmlColor={theme.palette.grey[400]} />
              <h6 className="desktop-terminal-title">
                portfolio -- -bash --80x24
              </h6>
            </Grid>
          </Grid>
          <div className="desktop-terminal-content" ref={(ref: HTMLDivElement) => {
            terminalContainerRef.current = ref;
          }}
          >
            <div className="desktop-terminal-row">
              <h6 className="desktop-terminal-subtitle">{loginTime}</h6>
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
