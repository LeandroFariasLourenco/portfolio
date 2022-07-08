import { WorkHistory } from '@mui/icons-material';
import {
  Box, Grid, useTheme,
} from '@mui/material';
import {
  memo, useCallback, useMemo, useState,
} from 'react';
import { FormattedMessage } from 'react-intl';
import { Section } from 'src/core/layouts';
import experiences from 'src/assets/resources/experiences.json';
import { Fade } from 'react-reveal';
import {
  Mousewheel, Navigation, Pagination,
  Swiper as SwiperClass,
} from 'swiper';
import cx from 'classnames';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';

import * as S from './styled';
import ExperienceCard from './components/ExperienceCard/ExperienceCard';
import ExperienceDetails from './components/ExperienceDetails/ExperienceDetails';
import { particlesConfig } from './particles-config';

const ParticlesComponent = memo(() => (
  <Particles
    init={async (engine) => {
      /* @ts-ignore */
      await loadFull(engine);
    }}
    canvasClassName="background-canvas"
    options={particlesConfig}
  />
), () => true);

const Experience = () => {
  const theme = useTheme();
  const [swiper, setSwiper] = useState<SwiperClass>();
  const [swiperIndex, setSwiperIndex] = useState<number>(0);
  const swiperProps: SwiperProps = useMemo(() => ({
    modules: [Pagination, Navigation, Mousewheel],
    direction: 'vertical',
    mousewheel: true,
    grabCursor: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    spaceBetween: 30,
    onRealIndexChange: (swiper) => {
      setSwiperIndex(swiper.realIndex);
    },
    onSwiper: (swiper) => {
      setSwiper(swiper);
    },
    style: { height: 550 },
  }), []);

  const renderAnimatedBorder = (index: number) => ({
    LeftBorderComponent: (
      <S.ExperienceAnimatedContainer $direction="left" $index={index}>
        <S.ExperienceAnimatedBorder color={index === 0
          ? theme.palette.primary.main : theme.palette.action.active}
        />
      </S.ExperienceAnimatedContainer>
    ),
    RightBorderComponent: (
      <S.ExperienceAnimatedContainer $direction="right" $index={index}>
        <S.ExperienceAnimatedBorder color={theme.palette.secondary.main} />
      </S.ExperienceAnimatedContainer>
    ),
  });

  const renderSwiperPagination = useCallback((_: any, index: number) => (
    <Box
      className={cx('swiper-pagination-bullet', {
        filled: index >= swiperIndex,
        first: index === 0,
      })}
      onClick={() => {
        swiper!.slideTo(index);
      }}
      component="span"
      key={index}
    />
  ), [swiper, swiperIndex]);

  return (
    <Section
      onTitleShow={(typewriter) => {
        typewriter.typeString('Experiência profissional')
          .start();
      }}
      icon={<WorkHistory fontSize="large" htmlColor="white" />}
    >
      <ParticlesComponent />
      <S.SwiperContainer>
        <Box className="swiper-pagination">
          {[...Array(experiences.length)].map(renderSwiperPagination)}
        </Box>
        <Box className="swiper-button-next" />
        <Box className="swiper-button-prev" />
        <Swiper
          {...swiperProps}
        >
          {experiences.map((experience, index) => {
            const {
              LeftBorderComponent,
              RightBorderComponent,
            } = renderAnimatedBorder(index);

            return (
              <SwiperSlide
                key={experience.date}
              >
                <Fade>
                  <Grid container flexDirection="row" flexWrap="nowrap" gap={10}>
                    <S.ExperienceContainer item xs={6}>
                      {index === 0 && (
                        <S.CurrentExperience>
                          <FormattedMessage id="home.experience.current" />
                        </S.CurrentExperience>
                      )}
                      {LeftBorderComponent}
                      <ExperienceCard
                        experience={experience}
                      />
                    </S.ExperienceContainer>

                    <S.ExperienceContainer item xs={6}>
                      {RightBorderComponent}
                      <ExperienceDetails
                        experience={experience}
                      />
                    </S.ExperienceContainer>
                  </Grid>
                </Fade>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </S.SwiperContainer>
    </Section>
  );
};

export default Experience;
