import {
  Business, CalendarMonth, Close, HomeWork, RemoveRedEye, Room, WorkHistory,
} from '@mui/icons-material';
import {
  Box, Grid, Typography, useTheme,
} from '@mui/material';
import { useMemo, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Section } from 'src/core/layouts';
import { IExperience } from 'src/core/models';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import cx from 'classnames';

import { Typewriter } from 'src/core/components';
import * as S from './styled';

const Experience = () => {
  const theme = useTheme();
  const [selectedExperience, setSelectedExperience] = useState<IExperience | null>();

  const experiences: IExperience[] = useMemo(() => [
    {
      title: 'home.experience1.title',
      company: 'home.experience1.company',
      date: 'home.experience1.date',
      description: 'home.experience1.description',
      location: 'São Paulo - SP',
      type: 'home.experience1.type',
    },
    {
      title: 'home.experience2.title',
      company: 'home.experience2.company',
      date: 'home.experience2.date',
      description: 'home.experience2.description',
      location: 'São Paulo - SP',
      type: 'home.experience2.type',
    },
    {
      title: 'home.experience3.title',
      company: 'home.experience3.company',
      date: 'home.experience3.date',
      description: 'home.experience3.description',
      location: 'São Paulo - SP',
      type: 'home.experience3.type',
    },
    {
      title: 'home.experience4.title',
      company: 'home.experience4.company',
      date: 'home.experience4.date',
      description: 'home.experience4.description',
      location: 'São Paulo - SP',
      type: 'home.experience4.type',
    },
    {
      title: 'home.experience5.title',
      company: 'home.experience5.company',
      date: 'home.experience5.date',
      description: 'home.experience5.description',
      location: 'Barueri - SP',
      type: 'home.experience5.type',
    },
  ], []);

  const swiperProps: SwiperProps = useMemo(() => ({
    slidesPerView: 3,
    autoplay: true,
    slidesPerGroup: 1,
    spaceBetween: 22,
    modules: [Pagination, Navigation],
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      clickable: true,
    },
  }), []);

  return (
    <Section
      title={(
        <>
          <Typewriter onInit={(typewriter) => {
            typewriter.typeString('Experiência profissional')
              .start();
          }}
          />
          <WorkHistory fontSize="large" htmlColor="white" />
        </>
      )}
    >
      <S.SwiperContainer>
        <Box className="swiper-button-next" />
        <Box className="swiper-button-prev" />
        <Swiper {...swiperProps}>
          {experiences.map((experience, index) => {
            const isSelected = selectedExperience === experience;
            return (
              <SwiperSlide
                className={cx({
                  selected: selectedExperience === experience,
                })}
                key={experience.date}
              >
                {index === 0 && (
                  <S.CurrentExperience sx={{ color: 'black' }}>
                    <FormattedMessage id="home.experience.current" />
                  </S.CurrentExperience>
                )}
                <S.ExperienceAnimatedContainer index={index}>
                  <S.ExperienceAnimatedBorder color={index === 0
                    ? theme.palette.primary.main : theme.palette.action.active}
                  />
                  <S.ExperienceAnimatedBorder color={theme.palette.secondary.main} />
                </S.ExperienceAnimatedContainer>

                <S.ExperienceCard elevation={5}>
                  <Grid container flexDirection="column">
                    <S.ExperienceHeader>
                      <S.ExperienceTitle variant="h6"><FormattedMessage id={experience.title} /></S.ExperienceTitle>
                    </S.ExperienceHeader>

                    <S.ExperienceCardContent container flex={1}>
                      <S.ExperienceTopic container flexWrap="nowrap">
                        <Business htmlColor="#fff" fontSize="small" />
                        <Typography variant="subtitle2"><FormattedMessage id={experience.company} /></Typography>
                      </S.ExperienceTopic>

                      <S.ExperienceTopic container flexWrap="nowrap">
                        <CalendarMonth htmlColor="#fff" fontSize="small" />
                        <Typography variant="subtitle2"><FormattedMessage id={experience.date} /></Typography>
                      </S.ExperienceTopic>

                      <S.ExperienceTopic container flexWrap="nowrap">
                        <Room htmlColor="#fff" fontSize="small" />
                        <Typography variant="subtitle2"><FormattedMessage id={experience.location} /></Typography>
                      </S.ExperienceTopic>

                      <S.ExperienceTopic container flexWrap="nowrap">
                        <HomeWork htmlColor="#fff" fontSize="small" />
                        <Typography variant="subtitle2"><FormattedMessage id={experience.type} /></Typography>
                      </S.ExperienceTopic>
                    </S.ExperienceCardContent>

                    <S.SeemoreButton
                      color="secondary"
                      variant="outlined"
                      startIcon={isSelected ? <Close /> : <RemoveRedEye />}
                      sx={{ marginTop: 5 }}
                      onClick={() => {
                        setSelectedExperience(isSelected ? null : experience);
                      }}
                    >
                      <FormattedMessage id={isSelected ? 'home.experience.close' : 'home.experience.seemore'} />
                    </S.SeemoreButton>
                  </Grid>
                </S.ExperienceCard>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </S.SwiperContainer>
    </Section>
  );
};

export default Experience;
