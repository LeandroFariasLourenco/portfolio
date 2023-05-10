import { DeveloperMode } from '@mui/icons-material';
import cx from 'classnames';
import { useCallback, useRef, useState } from 'react';
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

import './stack.scss';
import { Grid } from '@mui/material';

const Languages = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const isMobile = useResponsive({ type: EResponsiveType.smaller });
  const tabContainerRef = useRef<HTMLDivElement>();
  const intl = useIntl();

  const onLanguageTabToggle = useCallback((index: number) => {
    setSelectedTab(index);
    if (isMobile) return;
    tabContainerRef.current!.scrollIntoView({
      block: 'center',
      behavior: 'smooth',
    });
  }, [isMobile]);

  const renderLanguages = useCallback(({ name, technologies }: ILanguage, index: number) => (
    <div
      key={`${name}-tecnologies`}
      className={`stack-tab ${cx({
        selected: selectedTab === index,
      })}`}
    >
      <Technologies
        technologies={technologies}
      />
    </div>
  ), [selectedTab]);

  const renderLanguageTab = useCallback((language: ILanguage, index: number) => (
    <LanguageTab
      language={language}
      key={language.name}
      onToggle={onLanguageTabToggle}
      selectedTab={selectedTab}
      index={index}
    />
  ), []);

  return (
    <div className="stack-main-section" id={EAppSections.STACK}>
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
        <Grid className="stack-wrapper" container>
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
