'use client'

import { DeveloperMode } from '@mui/icons-material';
import cx from 'classnames';
import { useCallback, useEffect, useRef, useState } from 'react';
import SwipeRightAnimation from '@/../public/animations/swipe-right.json';
import { Section } from '@/shared/layouts';
import { EAppSections, EResponsiveType } from '@/shared/models';
import { useResponsive } from '@/shared/hooks';
import languages from './resources/languages.json';
import { SwipeAnimation } from '@/shared/components';
import { useIntl } from 'react-intl';
import Technologies from './components/technologies/technologies';
import LanguageTab from './components/language-tab/language-tab';
import { ILanguage } from './components/language-tab/models/language.interface';

import styles from './stack.module.scss';
import { Grid } from '@mui/material';
import { useStackContext } from './components/context/stack.context';

const Languages = () => {
  const isMobile = useResponsive({ type: EResponsiveType.smaller });
  const tabContainerRef = useRef<HTMLDivElement>();
  const intl = useIntl();
  const { selected: { setLanguageTab, languageTab } } = useStackContext();

  const onLanguageTabToggle = useCallback((language: string) => {
    setLanguageTab(language);
    if (isMobile) return;
    tabContainerRef.current!.scrollIntoView({
      block: 'center',
      behavior: 'smooth',
    });
  }, [isMobile]);

  useEffect(() => {
    setLanguageTab(languages[0].name);
  }, []);

  const renderLanguages = useCallback(({ name, technologies }: ILanguage, index: number) => (
    <div
      key={`${name}-tecnologies`}
      className={`${styles["stack-tab"]} ${cx({
        [styles.selected]: languageTab === name,
      })}`}
    >
      <Technologies
        technologies={technologies}
      />
    </div>
  ), [languageTab]);

  const renderLanguageTab = useCallback((language: ILanguage, index: number) => (
    <LanguageTab
      language={language}
      key={language.name}
      onToggle={onLanguageTabToggle}
    />
  ), []);

  return (
    <div className={styles["stack-main-section"]} id={EAppSections.STACK}>
      <Section
        onTitleShow={(typewriter) => {
          typewriter.typeString(intl.formatMessage({ id: 'home.languages.title' }))
            .start();
        }}
        icon={<DeveloperMode fontSize="large" htmlColor="white" />}
        gridStyle={{
          paddingTop: 50,
          paddingBottom: 50,
        }}
      >
        <Grid className={styles["stack-wrapper"]} container>
          <SwipeAnimation lottieProps={{
            height: '75px',
            speed: 1.25,
            width: '155px',
            config: {
              animationData: SwipeRightAnimation,
            },
          }}
          />
          {languages.map(renderLanguageTab)}
        </Grid>
        <div
          ref={(ref: HTMLDivElement) => {
            tabContainerRef.current = ref;
          }}
        >
          {languages.map(renderLanguages)}
        </div>
      </Section>
    </div>
  );
};

export default Languages;
