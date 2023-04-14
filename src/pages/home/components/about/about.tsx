import {
  EmojiEvents, Info, PersonSearch, School,
  Terminal, Theaters,
} from '@mui/icons-material';
import { Grid, useTheme } from '@mui/material';
import {
  useCallback, useMemo,
  useState,
} from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import Lottie from 'react-lottie';
import { Section } from 'src/core/layouts';

import PersonComputerAnimation from 'src/assets/animations/person-on-computer.json';

import { SlideTitle } from 'src/core/components';
import Responsive from 'src/core/components/responsive/responsive';
import SeeMore from 'src/core/components/see-more/see-more';
import { EAppSections } from 'src/core/models';
import Story from './components/story';
import { IHobbie } from './models/hobbies.interface';
import * as S from './styled';

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
        <S.HobbyContainer>
          <S.HobbyText><FormattedMessage id="home.about-me.objectives.first" /></S.HobbyText>
          <S.HobbyText><FormattedMessage id="home.about-me.objectives.second" /></S.HobbyText>
          <S.HobbyText><FormattedMessage id="home.about-me.objectives.third" /></S.HobbyText>
          <S.HobbyText><FormattedMessage id="home.about-me.objectives.fourth" /></S.HobbyText>
        </S.HobbyContainer>
      ),
    },
    {
      color: theme.palette.action.active,
      label: intl.messages['home.about-me.stack'] as string,
      icon: <Terminal htmlColor={theme.palette.action.active} fontSize="large" />,
      content: (
        <S.HobbyContainer>
          <S.HobbyText><FormattedMessage id="home.about-me.stack.first" /></S.HobbyText>
          <S.HobbyText><FormattedMessage id="home.about-me.stack.second" /></S.HobbyText>
          <S.HobbyText><FormattedMessage id="home.about-me.stack.third" /></S.HobbyText>
          <S.HobbyText><FormattedMessage id="home.about-me.stack.fourth" /></S.HobbyText>
        </S.HobbyContainer>
      ),
    },
    {
      color: theme.palette.secondary.main,
      label: intl.messages['home.about-me.formation'] as string,
      icon: <School htmlColor={theme.palette.secondary.main} fontSize="large" />,
      content: (
        <S.HobbyContainer>
          <S.HobbyText><FormattedMessage id="home.about-me.formation.first" /></S.HobbyText>
          <S.HobbyText><FormattedMessage id="home.about-me.formation.second" /></S.HobbyText>
        </S.HobbyContainer>
      ),
    },
    {
      color: theme.palette.primary.main,
      label: intl.messages['home.about-me.hobbies'] as string,
      icon: <Theaters htmlColor={theme.palette.primary.main} fontSize="large" />,
      content: (
        <S.HobbyContainer>
          <S.HobbyText><FormattedMessage id="home.about-me.hobbies.first" /></S.HobbyText>
          <S.HobbyText><FormattedMessage id="home.about-me.hobbies.second" /></S.HobbyText>
          <S.HobbyText><FormattedMessage id="home.about-me.hobbies.third" /></S.HobbyText>
        </S.HobbyContainer>
      ),
    },
  ], [intl]);

  const handleStoryClick = useCallback((storyName: string, open: boolean) => {
    setCurrentOpenedStory(open ? storyName : '');
  }, []);

  const renderHobbies = useCallback((hobby: IHobbie) => (
    <Story
      key={hobby.label}
      hobby={hobby}
      onClick={handleStoryClick}
      open={currentOpenedStory === hobby.label}
    />
  ), [hobbies, currentOpenedStory]);

  return (
    <S.AboutMeWrapper id={EAppSections.ABOUT}>
      <Section
        onTitleShow={(typewriter) => {
          typewriter.typeString(intl.messages['home.about-me.title'] as string)
            .start();
        }}
        gridStyle={{
          borderTop: `4px solid ${theme.palette.primary.main}`,
          borderBottom: `4px solid ${theme.palette.background.default}`,
        }}
        icon={(
          <PersonSearch fontSize="large" htmlColor="white" />
        )}
      >
        <Grid container item xs={12}>
          <Grid item xs={12} md={7}>
            <Responsive
              breakpoint="md"
              belowComponent={(
                <>
                  <S.AboutMeSummary>
                    <FormattedMessage id="home.about-me.summary1" />
                  </S.AboutMeSummary>
                  <SeeMore
                    startHeight={0}
                  >
                    <S.AboutMeSummary>
                      <FormattedMessage id="home.about-me.summary2" />
                    </S.AboutMeSummary>
                    <S.AboutMeSummary>
                      <FormattedMessage id="home.about-me.summary3" />
                    </S.AboutMeSummary>
                  </SeeMore>
                </>
              )}
              aboveComponent={(
                <>
                  <S.AboutMeSummary>
                    <FormattedMessage id="home.about-me.summary1" />
                  </S.AboutMeSummary>
                  <S.AboutMeSummary>
                    <FormattedMessage id="home.about-me.summary2" />
                  </S.AboutMeSummary>
                  <S.AboutMeSummary>
                    <FormattedMessage id="home.about-me.summary3" />
                  </S.AboutMeSummary>
                </>
              )}
            />
          </Grid>
          <Responsive
            breakpoint="md"
          >
            <Grid item xs={12} md={5} container justifyContent="flex-end">
              <Lottie
                width={315}
                style={{ margin: 0 }}
                options={{
                  animationData: PersonComputerAnimation,
                }}
              />
            </Grid>
          </Responsive>
        </Grid>
        <Responsive
          breakpoint="md"
          belowComponent={(
            <Grid container item xs={12} marginTop="20px" alignItems="center" justifyContent="center">
              <SlideTitle
                onTitleShow={(typewriter) => {
                  typewriter.typeString(intl.messages['home.about-me.overview'] as string).start();
                }}
                icon={<Info fontSize="large" htmlColor="white" />}
              />
              {hobbies.map(renderHobbies)}
            </Grid>
          )}
          aboveComponent={(
            <Grid container flexDirection="column">
              <SlideTitle
                onTitleShow={(typewriter) => {
                  typewriter.typeString(intl.messages['home.about-me.overview'] as string).start();
                }}
                icon={<Info fontSize="large" htmlColor="white" />}
              />
              <Grid container flexWrap="nowrap" flexDirection="row" alignItems="center" justifyContent="center">
                {hobbies.map(renderHobbies)}
              </Grid>
            </Grid>
          )}
        />
      </Section>
    </S.AboutMeWrapper>
  );
};

export default About;
