import {
  EmojiEvents, PersonSearch, SportsEsports, Terminal, Theaters,
} from '@mui/icons-material';
import { Grid, useTheme } from '@mui/material';
import { useCallback, useMemo, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import Lottie from 'react-lottie';
import { Section } from 'src/core/layouts';

import PersonComputerAnimation from 'src/assets/animations/person-on-computer.json';

import Responsive from 'src/core/components/responsive/responsive';
import { getBucketResource } from 'src/core/functions';
import Story from './components/story';
import { IHobbie } from './models/hobbies.interface';
import * as S from './styled';

const LottieAnimation = () => (
  <Lottie
    width={315}
    style={{ margin: 0 }}
    options={{
      animationData: PersonComputerAnimation,
    }}
  />
);

const About = () => {
  const theme = useTheme();
  const intl = useIntl();
  const [currentOpenedStory, setCurrentOpenedStory] = useState<string>('');

  const hobbies = useMemo<IHobbie[]>(() => [
    {
      color: '#fff',
      label: intl.messages['home.about-me.objectives'] as string,
      icon: <EmojiEvents htmlColor="#fff" fontSize="large" />,
      content: (
        <S.HobbyText>
          <S.AboutMeTextLine><FormattedMessage id="home.about-me.objectives.first" /></S.AboutMeTextLine>
          <S.AboutMeTextLine><FormattedMessage id="home.about-me.objectives.second" /></S.AboutMeTextLine>
          <S.AboutMeTextLine><FormattedMessage id="home.about-me.objectives.third" /></S.AboutMeTextLine>
          <S.AboutMeTextLine><FormattedMessage id="home.about-me.objectives.fourth" /></S.AboutMeTextLine>
        </S.HobbyText>
      ),
    },
    {
      color: theme.palette.action.active,
      label: intl.messages['home.about-me.stack'] as string,
      icon: <Terminal htmlColor={theme.palette.action.active} fontSize="large" />,
      content: (
        <S.HobbyText>
          <S.AboutMeTextLine><FormattedMessage id="home.about-me.objectives.first" /></S.AboutMeTextLine>
          <S.AboutMeTextLine><FormattedMessage id="home.about-me.objectives.second" /></S.AboutMeTextLine>
          <S.AboutMeTextLine><FormattedMessage id="home.about-me.objectives.third" /></S.AboutMeTextLine>
          <S.AboutMeTextLine><FormattedMessage id="home.about-me.objectives.fourth" /></S.AboutMeTextLine>
        </S.HobbyText>
      ),
    },
    {
      color: theme.palette.primary.main,
      label: intl.messages['home.about-me.books'] as string,
      icon: <Theaters htmlColor={theme.palette.primary.main} fontSize="large" />,
      content: (
        <S.HobbyText>
          <S.AboutMeTextLine><FormattedMessage id="home.about-me.objectives.first" /></S.AboutMeTextLine>
          <S.AboutMeTextLine><FormattedMessage id="home.about-me.objectives.second" /></S.AboutMeTextLine>
          <S.AboutMeTextLine><FormattedMessage id="home.about-me.objectives.third" /></S.AboutMeTextLine>
          <S.AboutMeTextLine><FormattedMessage id="home.about-me.objectives.fourth" /></S.AboutMeTextLine>
        </S.HobbyText>
      ),
    },
    {
      color: theme.palette.secondary.main,
      label: intl.messages['home.about-me.games'] as string,
      icon: <SportsEsports htmlColor={theme.palette.secondary.main} fontSize="large" />,
      content: (
        <S.HobbyText>
          <S.AboutMeTextLine><FormattedMessage id="home.about-me.objectives.first" /></S.AboutMeTextLine>
          <S.AboutMeTextLine><FormattedMessage id="home.about-me.objectives.second" /></S.AboutMeTextLine>
          <S.AboutMeTextLine><FormattedMessage id="home.about-me.objectives.third" /></S.AboutMeTextLine>
          <S.AboutMeTextLine><FormattedMessage id="home.about-me.objectives.fourth" /></S.AboutMeTextLine>
        </S.HobbyText>
      ),
    },
  ], []);

  const handleStoryClick = (storyName: string, open: boolean) => {
    setCurrentOpenedStory(open ? storyName : '');
  };

  const renderHobbies = useCallback((hobby: IHobbie) => (
    <Story
      key={hobby.label}
      hobby={hobby}
      onClick={handleStoryClick}
      open={currentOpenedStory === hobby.label}
    />
  ), [hobbies, currentOpenedStory]);

  return (
    <Section
      onTitleShow={(typewriter) => {
        typewriter.typeString(intl.messages['home.about-me.title'] as string)
          .start();
      }}
      gridStyle={{
        borderTop: `4px solid ${theme.palette.primary.main}`,
        backgroundImage: `linear-gradient(to top, rgba(28, 22, 45), rgba(28, 22, 48,0.95)), url(${getBucketResource('/wallpapers/web-developer-background.png')})`,
        borderBottom: `4px solid ${theme.palette.background.default}`,
      }}
      icon={(
        <PersonSearch fontSize="large" htmlColor="white" />
      )}
    >
      <Grid container item xs={12}>
        <Grid item xs={12} md={6}>
          <S.AboutMeSummary>
            <FormattedMessage id="home.about-me.summary" />
          </S.AboutMeSummary>
        </Grid>
        <Grid item xs={12} md={6} container justifyContent="flex-end">
          <LottieAnimation />
        </Grid>
      </Grid>
      <Responsive
        breakpoint="md"
        belowComponent={(
          <Grid container item xs={12} alignItems="center" justifyContent="center">
            {hobbies.map(renderHobbies)}
          </Grid>
        )}
        aboveComponent={(
          <Grid container gap={12} flexWrap="nowrap" alignItems="center" justifyContent="center">
            {hobbies.map(renderHobbies)}
          </Grid>
        )}
      />
    </Section>
  );
};

export default About;
