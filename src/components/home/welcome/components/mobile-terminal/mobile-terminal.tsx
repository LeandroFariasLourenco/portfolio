'use client'

import {
  Close, CropDin, Remove,
} from '@mui/icons-material';
import { Card, Grid } from '@mui/material';
import cx from 'classnames';
import {
  useCallback, useEffect,
  useState,
} from 'react';
import { Typewriter } from '@/shared/components';
import { getBucketResource } from '@/shared/functions';
import { useIsWindowTop } from '@/shared/hooks';
import useIntroTerminalTexts from '../../hooks/use-intro-terminal-texts';
import { ITerminalLine } from './models/terminal-line.interface';

import styles from './mobile-terminal.module.scss';
import Image from 'next/image';

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
    <Grid
      className={`${styles["mobile-terminal-component-wrapper"]} ${cx({
        'is--focused': isWindowOnTop,
      })}`}
      item
      xs={12}
    >
      <Card
        className={styles["mobile-terminal-typewriter-background"]}
        elevation={3}
      >
        <Grid className={styles["mobile-terminal-terminal-wrapper"]} item xs={12}>
          <Grid
            container
            flexDirection="row"
            flexWrap="nowrap"
            className={styles["mobile-terminal-heading"]}
          >
            <Grid
              className={styles["mobile-terminal-terminal-tab"]}
              container
              flexDirection="row"
              flexWrap="nowrap"
            >
              <Image
                className={styles["mobile-terminal-terminal-tab-icon"]}
                alt="Terminal icon"
                width={20}
                height={20}
                src={getBucketResource('/git-for-windows.ico')}
                quality={50}
                priority
              />

              <p className={styles["mobile-terminal-terminal-tab-text"]}>Bash</p>

              <Grid className={styles["mobile-terminal-terminal-tab-close"]}>
                <Close htmlColor="white" fontSize="small" />
              </Grid>
            </Grid>
            <Grid
              className={styles["mobile-terminal-window"]}
              container
              justifyContent="flex-end"
              alignItems="center"
            >
              <Grid className={styles["mobile-terminal-terminal-tab-container"]}>
                <Remove htmlColor="white" fontSize="small" />
              </Grid>

              <Grid className={styles["mobile-terminal-terminal-tab-container"]}>
                <CropDin htmlColor="white" fontSize="small" />
              </Grid>

              <Grid className={styles["mobile-terminal-terminal-tab-container"]}>
                <Close htmlColor="white" fontSize="small" />
              </Grid>
            </Grid>
          </Grid>
          <div className={styles["mobile-terminal-terminal-content"]}>
            {terminalRows.map((text) => (
              <Grid
                container
                flexDirection="column"
                key={text.key}
              >
                <Grid
                  className={styles["mobile-terminal-terminal-text"]}
                  container
                  flexDirection="row"
                  flexWrap="nowrap"
                >
                  <p className={styles["mobile-terminal-terminal-text-user"]}>Leand@DESKTOP</p>
                  <p className={styles["mobile-terminal-terminal-text-cpu"]}>MINGW64</p>
                  <p className={styles["mobile-terminal-terminal-text-path"]}>/c/WINDOWS/system32</p>
                </Grid>
                <Grid
                  container
                  flexWrap="nowrap"
                  alignItems="flex-start"
                >
                  <h6 className={styles["mobile-terminal-terminal-tab-command-prefix"]}>$</h6>
                  <Typewriter
                    options={{
                      delay: 10,
                    }}
                    variant='h6'
                    variantProps={{ style: { fontSize: 14.5, color: '#9AA5C6' }}}
                    onInit={text.typeText}
                  />
                </Grid>
              </Grid>
            ))}
          </div>
        </Grid>
      </Card>
    </Grid>
  );
};

export default MobileTerminal;
