import {
  RemoveRedEye,
  SportsEsports,
  Terminal,
  Theaters,
  PersonSearch,
  EmojiEvents,
  ArrowForwardIosSharp,
  Bookmark,
  Bookmarks,
} from '@mui/icons-material';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid, Typography, useTheme,
} from '@mui/material';
import { useMemo } from 'react';
import { Zoom } from 'react-reveal';
import { FormattedMessage } from 'react-intl';
import { Section } from 'src/core/layouts';
import Lottie from 'react-lottie';

import PersonComputerAnimation from 'src/assets/animations/person-on-computer.json';

import * as S from './styled';

const ShortTerm = () => {
  const theme = useTheme();
  return (
    <S.AboutMeAcccordion>
      <S.AboutMeAccordionSummary
        expandIcon={<ArrowForwardIosSharp htmlColor={theme.palette.action.active} fontSize="small" />}
      >
        <Bookmark htmlColor={theme.palette.action.active} />
        <Typography variant="h3"><FormattedMessage id="home.about-me.objectives.short-term" /></Typography>
      </S.AboutMeAccordionSummary>

      <S.AboutMeAccordionDetails>
        <S.AboutMeObjective><FormattedMessage id="home.about-me.objectives.short-term1" /></S.AboutMeObjective>
        <S.AboutMeObjective><FormattedMessage id="home.about-me.objectives.short-term2" /></S.AboutMeObjective>
      </S.AboutMeAccordionDetails>
    </S.AboutMeAcccordion>
  );
};

const LongTerm = () => {
  const theme = useTheme();
  return (
    <S.AboutMeAcccordion>
      <S.AboutMeAccordionSummary
        expandIcon={<ArrowForwardIosSharp htmlColor={theme.palette.action.active} fontSize="small" />}
      >
        <Bookmarks htmlColor={theme.palette.action.active} />
        <Typography variant="h3"><FormattedMessage id="home.about-me.objectives.long-term" /></Typography>
      </S.AboutMeAccordionSummary>

      <S.AboutMeAccordionDetails>
        <S.AboutMeObjective><FormattedMessage id="home.about-me.objectives.long-term1" /></S.AboutMeObjective>
        <S.AboutMeObjective><FormattedMessage id="home.about-me.objectives.long-term2" /></S.AboutMeObjective>
      </S.AboutMeAccordionDetails>
    </S.AboutMeAcccordion>
  );
};

const About = () => {
  const theme = useTheme();
  const hobbies = useMemo(() => [
    {
      color: theme.palette.action.active,
      icon: <Terminal
        htmlColor={theme.palette.action.active}
        sx={{ fontSize: 60 }}
      />,
      description: '',
    },
    {
      color: theme.palette.primary.main,
      icon: <Theaters
        htmlColor={theme.palette.primary.main}
        sx={{ fontSize: 60 }}
      />,
      description: '',
    },
    {
      color: theme.palette.secondary.main,
      icon: <SportsEsports
        htmlColor={theme.palette.secondary.main}
        sx={{ fontSize: 60 }}
      />,
      description: '',
    },
  ], []);

  return (
    <Section
      onTitleShow={(typewriter) => {
        typewriter.typeString('Sobre mim')
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
        <Grid item xs={6}>
          <S.AboutMeSummary>
            <FormattedMessage id="home.about-me.summary" />
          </S.AboutMeSummary>

          <S.AboutMeObjectives>
            <S.AboutMeObjectivesTitle variant="h2">
              <EmojiEvents htmlColor="white" />
              <FormattedMessage id="home.about-me.objectives" />
            </S.AboutMeObjectivesTitle>

            <ShortTerm />
            <LongTerm />

          </S.AboutMeObjectives>
        </Grid>
        <Grid item xs={6} container justifyContent="flex-end">
          <Lottie
            width={315}
            style={{ margin: 0 }}
            options={{
              animationData: PersonComputerAnimation,
            }}
          />
        </Grid>
      </Grid>
      <Grid container gap={6} flexWrap="nowrap">
        {hobbies.map((hobby, index) => (
          <S.AboutCardWrapper
            item
            xs={4}
            key={hobby.color}
          >
            <Zoom
              key={hobby.description}
              duration={2500 * ((index + 1) * 0.30)}
              bottom
              cascade
            >
              <S.AboutCard>
                {hobby.icon}
                <RemoveRedEye htmlColor={hobby.color} />

                <S.AboutCardHoverContainer
                  $color={hobby.color}
                  container
                  alignItems="center"
                  justifyContent="center"
                />
              </S.AboutCard>
            </Zoom>
          </S.AboutCardWrapper>
        ))}
      </Grid>
    </Section>
  );
};

export default About;
