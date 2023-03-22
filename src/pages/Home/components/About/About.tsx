import {
  SportsEsports, Terminal, Theaters, PersonSearch, EmojiEvents,
} from '@mui/icons-material';
import {
  Divider, Grid, Typography, useTheme,
} from '@mui/material';
import { useMemo } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Section } from 'src/core/layouts';
import Lottie from 'react-lottie';

import PersonComputerAnimation from 'src/assets/animations/person-on-computer.json';

import Responsive from 'src/core/components/Responsive/Responsive';
import { EResponsiveType } from 'src/core/models';
import * as S from './styled';
import Story from './components/Story';

const About = () => {
  const theme = useTheme();
  const intl = useIntl();

  const hobbies = useMemo(() => [
    {
      color: '#fff',
      label: intl.messages['home.about-me.objectives'] as string,
      icon: <EmojiEvents htmlColor="#fff" fontSize="large" />,
      content: (
        <Typography>
          <S.AboutMeTextLine><FormattedMessage id="home.about-me.objectives.first" /></S.AboutMeTextLine>
          <S.AboutMeTextLine><FormattedMessage id="home.about-me.objectives.second" /></S.AboutMeTextLine>
          <S.AboutMeTextLine><FormattedMessage id="home.about-me.objectives.third" /></S.AboutMeTextLine>
          <S.AboutMeTextLine><FormattedMessage id="home.about-me.objectives.fourth" /></S.AboutMeTextLine>
        </Typography>
      ),
    },
    {
      color: theme.palette.action.active,
      label: intl.messages['home.about-me.stack'] as string,
      icon: <Terminal htmlColor={theme.palette.action.active} fontSize="large" />,
      content: (
        <Typography>
          <S.AboutMeTextLine><FormattedMessage id="home.about-me.objectives.first" /></S.AboutMeTextLine>
          <S.AboutMeTextLine><FormattedMessage id="home.about-me.objectives.second" /></S.AboutMeTextLine>
          <S.AboutMeTextLine><FormattedMessage id="home.about-me.objectives.third" /></S.AboutMeTextLine>
          <S.AboutMeTextLine><FormattedMessage id="home.about-me.objectives.fourth" /></S.AboutMeTextLine>
        </Typography>
      ),
    },
    {
      color: theme.palette.primary.main,
      label: intl.messages['home.about-me.books'] as string,
      icon: <Theaters htmlColor={theme.palette.primary.main} fontSize="large" />,
      content: (
        <Typography>
          <S.AboutMeTextLine><FormattedMessage id="home.about-me.objectives.first" /></S.AboutMeTextLine>
          <S.AboutMeTextLine><FormattedMessage id="home.about-me.objectives.second" /></S.AboutMeTextLine>
          <S.AboutMeTextLine><FormattedMessage id="home.about-me.objectives.third" /></S.AboutMeTextLine>
          <S.AboutMeTextLine><FormattedMessage id="home.about-me.objectives.fourth" /></S.AboutMeTextLine>
        </Typography>
      ),
    },
    {
      color: theme.palette.secondary.main,
      label: intl.messages['home.about-me.games'] as string,
      icon: <SportsEsports htmlColor={theme.palette.secondary.main} fontSize="large" />,
      content: (
        <Typography>
          <S.AboutMeTextLine><FormattedMessage id="home.about-me.objectives.first" /></S.AboutMeTextLine>
          <S.AboutMeTextLine><FormattedMessage id="home.about-me.objectives.second" /></S.AboutMeTextLine>
          <S.AboutMeTextLine><FormattedMessage id="home.about-me.objectives.third" /></S.AboutMeTextLine>
          <S.AboutMeTextLine><FormattedMessage id="home.about-me.objectives.fourth" /></S.AboutMeTextLine>
        </Typography>
      ),
    },
  ], []);

  return (
    <Section
      onTitleShow={(typewriter) => {
        typewriter.typeString(intl.messages['home.about-me.title'] as string)
          .start();
      }}
      gridStyle={{
        borderTop: `4px solid ${theme.palette.primary.main}`,
        backgroundImage: 'linear-gradient(to top, rgba(28, 22, 48), rgba(28, 22, 48,0.97)), url(https://wallpapercave.com/wp/wp9641821.jpg)',
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
          <Lottie
            width={315}
            style={{ margin: 0 }}
            options={{
              animationData: PersonComputerAnimation,
            }}
          />
        </Grid>
      </Grid>
      <Responsive
        breakpoint="md"
      >
        <Grid container gap={12} flexWrap="nowrap" alignItems="center" justifyContent="center">
          {hobbies.map((hobby) => (
            <Story key={hobby.label} hobby={hobby} />
          ))}
        </Grid>
      </Responsive>

      <Responsive
        type={EResponsiveType.smaller}
        breakpoint="md"
      >
        <Grid container item xs={12} alignItems="center" justifyContent="center">
          {hobbies.map((hobby) => (
            <Story key={hobby.label} hobby={hobby} />
          ))}
        </Grid>
      </Responsive>
    </Section>
  );
};

export default About;
