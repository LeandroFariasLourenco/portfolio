import { DeveloperMode } from '@mui/icons-material';
import cx from 'classnames';
import { useCallback, useRef, useState } from 'react';
import SwipeRightAnimation from 'src/assets/animations/swipe-right.json';
import languages from 'src/assets/resources/languages.json';
import { getBucketResource } from 'src/core/functions';
import { Section } from 'src/core/layouts';
import { EAppSections, EResponsiveType } from 'src/core/models';
import { useResponsive } from 'src/core/hooks';
import { SwipeAnimation } from 'src/core/components';
import { useIntl } from 'react-intl';
import * as S from './styled';
import Technologies from './components/technologies/technologies';
import LanguageTab from './components/language-tab/language-tab';
import { ILanguage } from './components/language-tab/models/language.interface';

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
    <S.TechnologyTabContainer
      key={`${name}-tecnologies`}
      className={cx({
        selected: selectedTab === index,
      })}
    >
      <Technologies
        technologies={technologies}
      />
    </S.TechnologyTabContainer>
  ), [selectedTab]);

  return (
    <S.SectionWrapper id={EAppSections.STACK}>
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
        <S.StackWrapper container>
          <SwipeAnimation lottieProps={{
            height: '75px',
            speed: 1.25,
            width: '155px',
            config: {
              animationData: SwipeRightAnimation,
            },
          }}
          />
          {languages.map((language, index) => (
            <LanguageTab
              language={language}
              key={language.name}
              onToggle={onLanguageTabToggle}
              selectedTab={selectedTab}
              index={index}
            />
          ))}
        </S.StackWrapper>
        <S.TechnologyWrapper
          ref={(ref: HTMLDivElement) => {
            tabContainerRef.current = ref;
          }}
        >
          {languages.map(renderLanguages)}
        </S.TechnologyWrapper>
      </Section>
    </S.SectionWrapper>
  );
};

export default Languages;
