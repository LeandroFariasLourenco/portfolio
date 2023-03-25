import { memo, useCallback, useState } from 'react';
import {
  Box,
  Grid,
  Typography,
} from '@mui/material';
import cx from 'classnames';
import { APP } from 'src/core/constants';
import { FormattedMessage } from 'react-intl';
import { ITechnology } from 'src/core/models';
import Responsive from 'src/core/components/responsive/responsive';
import * as S from './styled';
import { IExperienceProps } from './props';

const Technology = ({
  technologies,
}: IExperienceProps) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const renderTechnology = useCallback((
    technology: ITechnology,
    index: number,
  ) => (
    <S.TabContainer
      className={cx({
        selected: index === selectedTab,
      })}
      onClick={() => {
        setSelectedTab(index);
      }}
      key={technology.name}
      container
      alignItems="center"
    >
      <Grid container flexWrap="nowrap" alignItems="center">
        <Box style={{ width: 75, marginRight: 10 }}>
          <img
            src={`${APP.aws.assets}${technology.icon}`}
            width={35}
            alt={technology.name}
          />
        </Box>
        <Typography variant="h5" sx={{ color: index === selectedTab ? 'white' : '' }}>
          {technology.name}
        </Typography>
      </Grid>
    </S.TabContainer>
  ), [selectedTab]);

  const renderTechnologyTopic = useCallback((topic: string) => (
    <S.LanguageTopic
      key={topic}
    >
      <Typography>
        {topic}
      </Typography>
    </S.LanguageTopic>
  ), [selectedTab]);

  return (
    <S.LanguageContainer container flexWrap="nowrap">
      <S.LanguagesTabWrapper container flexDirection="column" flexWrap="nowrap" item xs={12} md={4}>
        {technologies.map(renderTechnology)}
      </S.LanguagesTabWrapper>
      <Responsive
        breakpoint="md"
      >
        <Grid item xs={8}>
          <S.LanguageDescriptionCard>
            <S.LanguageDescription>
              <FormattedMessage id={technologies[selectedTab].description} />
            </S.LanguageDescription>

            {technologies[selectedTab].topics.length ? (
              <S.LanguageTopics>
                <S.LanguageDividerTitle variant="h4"><FormattedMessage id="home.languages.concepts" /></S.LanguageDividerTitle>
                {technologies[selectedTab].topics.map(renderTechnologyTopic)}
              </S.LanguageTopics>
            ) : null}
          </S.LanguageDescriptionCard>
        </Grid>
      </Responsive>
    </S.LanguageContainer>
  );
};

export default memo(Technology);
