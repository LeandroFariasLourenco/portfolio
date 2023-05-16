'use client'

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
import { Lottie } from '@alfonmga/react-lottie-light-ts';
import { Section } from '@/shared/layouts';

import PersonComputerAnimation from '@/../public/animations/person-on-computer.json';

import styles from './about.module.scss';

import { SlideTitle } from '@/shared/components';
import Responsive from '@/shared/components/responsive/responsive';
import SeeMore from '@/shared/components/see-more/see-more';
import { EAppSections } from '@/shared/models';
import Story from './components/story';
import { IHobbie } from './models/hobbies.interface';

const About = () => {
  const theme = useTheme();
  const intl = useIntl();
  const [currentOpenedStory, setCurrentOpenedStory] = useState<string>('');

  const hobbies = useMemo<IHobbie[]>(() => [
    {
      color: '#fff',
      label: intl.formatMessage({ id: 'home.about-me.objectives' }),
      icon: <EmojiEvents htmlColor="#fff" fontSize="large" />,
      content: (
        <Grid>
          <p className={styles["about-text"]}><FormattedMessage id="home.about-me.objectives.first" /></p>
          <p className={styles["about-text"]}><FormattedMessage id="home.about-me.objectives.second" /></p>
          <p className={styles["about-text"]}><FormattedMessage id="home.about-me.objectives.third" /></p>
          <p className={styles["about-text"]}><FormattedMessage id="home.about-me.objectives.fourth" /></p>
        </Grid>
      ),
    },
    {
      color: theme.palette.action.active,
      label: intl.formatMessage({ id: 'home.about-me.stack' }),
      icon: <Terminal htmlColor={theme.palette.action.active} fontSize="large" />,
      content: (
        <Grid>
          <p className={styles["about-text"]}><FormattedMessage id="home.about-me.stack.first" /></p>
          <p className={styles["about-text"]}><FormattedMessage id="home.about-me.stack.second" /></p>
          <p className={styles["about-text"]}><FormattedMessage id="home.about-me.stack.third" /></p>
          <p className={styles["about-text"]}><FormattedMessage id="home.about-me.stack.fourth" /></p>
        </Grid>
      ),
    },
    {
      color: theme.palette.secondary.main,
      label: intl.formatMessage({ id: 'home.about-me.formation' }),
      icon: <School htmlColor={theme.palette.secondary.main} fontSize="large" />,
      content: (
        <Grid>
          <p className={styles["about-text"]}><FormattedMessage id="home.about-me.formation.first" /></p>
          <p className={styles["about-text"]}><FormattedMessage id="home.about-me.formation.second" /></p>
        </Grid>
      ),
    },
    {
      color: theme.palette.primary.main,
      label: intl.formatMessage({ id: 'home.about-me.hobbies' }),
      icon: <Theaters htmlColor={theme.palette.primary.main} fontSize="large" />,
      content: (
        <Grid>
          <p className={styles["about-text"]}><FormattedMessage id="home.about-me.hobbies.first" /></p>
          <p className={styles["about-text"]}><FormattedMessage id="home.about-me.hobbies.second" /></p>
          <p className={styles["about-text"]}><FormattedMessage id="home.about-me.hobbies.third" /></p>
        </Grid>
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
    <div className={styles["about-wrapper"]} id={EAppSections.ABOUT}>
      <Section
        onTitleShow={(typewriter) => {
          typewriter.typeString(intl.formatMessage({ id: 'home.about-me.title' }))
            .start();
        }}
        gridStyle={{
          borderTop: `4px solid ${theme.palette.primary.main}`,
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
                  <p className={styles["about-summary"]}><FormattedMessage id="home.about-me.summary1" /></p>
                  <SeeMore
                    startHeight={0}
                  >
                    <p className={styles["about-summary"]}><FormattedMessage id="home.about-me.summary2" /></p>
                    <p className={styles["about-summary"]}><FormattedMessage id="home.about-me.summary3" /></p>
                  </SeeMore>
                </>
              )}
              aboveComponent={(
                <>
                  <p className={styles["about-summary"]}><FormattedMessage id="home.about-me.summary1" /></p>
                  <p className={styles["about-summary"]}><FormattedMessage id="home.about-me.summary2" /></p>
                  <p className={styles["about-summary"]}><FormattedMessage id="home.about-me.summary3" /></p>
                </>
              )}
            />
          </Grid>
          <Responsive
            breakpoint="md"
          >
            <Grid item xs={12} md={5} container justifyContent="flex-end">
              <Lottie
                width="315px"
                style={{ margin: '0' }}
                config={{
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
                  typewriter.typeString(intl.formatMessage({ id: 'home.about-me.overview' })).start();
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
                  typewriter.typeString(intl.formatMessage({ id: 'home.about-me.overview' })).start();
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
    </div>
  );
};

export default About;
