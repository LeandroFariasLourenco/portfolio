import {
  Grid,
  Typography,
  useTheme,
} from '@mui/material';
import cx from 'classnames';
import { memo, useCallback, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import Responsive from 'src/core/components/responsive/responsive';
import { getBucketResource } from 'src/core/functions';
import useResponsive from 'src/core/hooks/useResponsive/useResponsive';
import { EResponsiveType, ITechnology } from 'src/core/models';
import { ITechnologiesProps } from './props';
import * as S from './styled';

const TechnologyDetails = ({
  technology,
  isSelected,
}: { technology: ITechnology; isSelected?: boolean; }) => {
  const renderTechnologyTopic = useCallback((topic: string) => (
    <S.LanguageTopic
      key={topic}
    >
      <Typography>
        {topic}
      </Typography>
    </S.LanguageTopic>
  ), [isSelected]);

  return (
    <S.LanguageDescriptionCard
      className={cx({
        'is--selected': isSelected,
      })}
    >
      <S.LanguageDescription>
        <FormattedMessage id={technology.description} />
      </S.LanguageDescription>

      {technology.topics.length ? (
        <S.LanguageTopics>
          <S.LanguageDividerTitle variant="h4"><FormattedMessage id="home.languages.concepts" /></S.LanguageDividerTitle>
          {technology.topics.map(renderTechnologyTopic)}
        </S.LanguageTopics>
      ) : null}
    </S.LanguageDescriptionCard>
  );
};

const Technologies = ({
  technologies,
}: ITechnologiesProps) => {
  const theme = useTheme();
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const isMobile = useResponsive({ type: EResponsiveType.smaller });

  const renderTechnology = useCallback((
    technology: ITechnology,
    index: number,
  ) => {
    const isSelected = index === selectedTab;

    return (
      <>
        <S.TabContainer
          className={cx({
            selected: isSelected,
          })}
          onClick={() => {
            setSelectedTab(() => {
              if (isMobile) {
                return index === selectedTab ? -1 : index;
              }
              return index;
            });
          }}
          key={technology.name}
          container
          alignItems="center"
        >
          <S.TechnologyTabWrapper container flexWrap="nowrap" alignItems="center">
            <S.TechnologyImageContainer>
              <img
                src={getBucketResource(technology.icon)}
                width={35}
                alt={technology.name}
              />
            </S.TechnologyImageContainer>
            <S.TechnologyTitle variant="h5" sx={{ color: isSelected ? 'white' : '' }}>
              {technology.name}
            </S.TechnologyTitle>
            <Responsive
              breakpoint="md"
              belowComponent={(
                <S.TechnologyMobileArrow
                  selected={isSelected}
                  htmlColor={theme.typography.h5.color}
                />
              )}
            />
          </S.TechnologyTabWrapper>
        </S.TabContainer>
        <Responsive
          breakpoint="md"
          type={EResponsiveType.smaller}
        >
          <TechnologyDetails technology={technology} isSelected={isSelected} />
        </Responsive>
      </>
    );
  }, [selectedTab]);

  return (
    <S.LanguageContainer container flexWrap="nowrap">
      <S.LanguagesTabWrapper container flexDirection="column" flexWrap="nowrap" item xs={12} md={4}>
        {technologies.map(renderTechnology)}
      </S.LanguagesTabWrapper>
      <Responsive
        breakpoint="md"
      >
        <Grid item xs={8}>
          <TechnologyDetails
            technology={technologies[selectedTab]}
          />
        </Grid>
      </Responsive>
    </S.LanguageContainer>
  );
};

export default memo(Technologies);
