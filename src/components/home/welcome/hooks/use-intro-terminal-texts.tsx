import { useMemo } from 'react';
import { useIntl } from 'react-intl';
import { TypewriterClass } from 'typewriter-effect';
import { ITerminalLine } from '../components/mobile-terminal/models/terminal-line.interface';

const useIntroTerminalTexts = (additionalTexts: ITerminalLine[] = []) => {
  const intl = useIntl();
  const terminalTexts = useMemo<ITerminalLine[]>(() => [
    {
      key: 'first',
      timer: 0,
      typeText: (typewriter: TypewriterClass) => {
        typewriter.typeString(intl.formatMessage({ id: 'home.welcome.terminal.text1.string1' }))
          .deleteChars(4)
          .typeString(intl.formatMessage({ id: 'home.welcome.terminal.text1.string2' }))
          .deleteChars(2)
          .typeString(intl.formatMessage({ id: 'home.welcome.terminal.text1.string3' }))
          .start();
      },
    },
    {
      key: 'second',
      timer: 1250,
      typeText: (typewriter: TypewriterClass) => {
        typewriter.typeString(intl.formatMessage({ id: 'home.welcome.terminal.text2.string1' }))
          .start();
      },
    },
    {
      key: 'third',
      timer: 2000,
      typeText: (typewriter: TypewriterClass) => {
        typewriter.typeString(intl.formatMessage({ id: 'home.welcome.terminal.text3.string1' }))
          .start();
      },
    },
    {
      key: 'fourth',
      timer: 2500,
      typeText: (typewriter: TypewriterClass) => {
        typewriter.typeString(intl.formatMessage({ id: 'home.welcome.terminal.text4.string1' }))
          .start();
      },
    },
    ...additionalTexts,
  ], [intl]);

  return terminalTexts;
};

export default useIntroTerminalTexts;
