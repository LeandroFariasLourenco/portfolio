import {
  RemoveRedEye, SportsEsports, Terminal, Theaters, PersonSearch,
} from '@mui/icons-material';
import { Grid, Typography, useTheme } from '@mui/material';
import { useMemo } from 'react';
import { FormattedMessage } from 'react-intl';
import { Section } from 'src/core/layouts';
import { Typewriter } from 'src/core/components';

import * as S from './styled';

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
      title={(
        <>
          <Typewriter onInit={(typewriter) => {
            typewriter.typeString('Sobre mim')
              .start();
          }}
          />
          <PersonSearch fontSize="large" htmlColor="white" />
        </>
      )}
    >
      <Grid container gap={6} flexWrap="nowrap">
        {hobbies.map((hobby) => (
          <S.AboutCardWrapper
            item
            xs={4}
            key={hobby.description}
          >
            <S.AboutCard>
              {hobby.icon}
              <RemoveRedEye htmlColor={hobby.color} />

              <S.AboutCardHoverContainer
                $color={hobby.color}
                container
                alignItems="center"
                justifyContent="center"
              >
                <Typography><FormattedMessage id="teste" /></Typography>
              </S.AboutCardHoverContainer>
            </S.AboutCard>
          </S.AboutCardWrapper>
        ))}
      </Grid>
    </Section>
  );
};

export default About;
