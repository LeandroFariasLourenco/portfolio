import { WorkHistory } from '@mui/icons-material';
import {
  Box, useTheme,
} from '@mui/material';
import cx from 'classnames';
import {
  memo, useCallback, useMemo, useState,
} from 'react';
import { Fade } from 'react-reveal';
import Particles from 'react-tsparticles';
import experiences from 'src/assets/resources/experiences.json';
import { Section } from 'src/core/layouts';
import {
  Mousewheel, Navigation, Pagination,
  Swiper as SwiperClass,
} from 'swiper';
import { loadFull } from 'tsparticles';

import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';

import Responsive from 'src/core/components/responsive/responsive';
import useResponsive from 'src/core/hooks/useResponsive/useResponsive';
import { EResponsiveType } from 'src/core/models';
import DesktopCard from './components/desktop-card/desktop-card';
import MobileCard from './components/mobile-card/mobile-card';
import { particlesConfig } from './particles-config';
import * as S from './styled';

const ParticlesComponent = memo(() => (
  <Particles
    init={async (engine) => {
      /* @ts-ignore */
      await loadFull(engine);
    }}
    canvasClassName="background-canvas"
    id="experience-background"
    options={particlesConfig}
  />
), () => true);

const Experience = () => {
  const theme = useTheme();
  const [swiper, setSwiper] = useState<SwiperClass>();
  const [swiperIndex, setSwiperIndex] = useState<number>(0);
  const isMobile = useResponsive({ type: EResponsiveType.smaller, breakpoint: 'md' });

  const swiperProps = useMemo<{ mobile: SwiperProps, desktop: SwiperProps }>(() => ({
    mobile: {
      modules: [Pagination, Navigation],
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      spaceBetween: 0,
      onRealIndexChange: (swiper) => {
        setSwiperIndex(swiper.realIndex);
      },
      onSwiper: (swiper) => {
        setSwiper(swiper);
      },
      autoHeight: true,
      direction: 'horizontal',
      style: { paddingBottom: 50 },
    },
    desktop: {
      spaceBetween: 30,
      style: { height: 550 },
      modules: [Pagination, Navigation, Mousewheel],
      direction: 'vertical',
      onRealIndexChange: (swiper) => {
        setSwiperIndex(swiper.realIndex);
      },
      onSwiper: (swiper) => {
        setSwiper(swiper);
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      mousewheel: true,
      grabCursor: true,
    },
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
        swiper?.slideTo(index);
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
          {...(isMobile ? swiperProps.mobile : swiperProps.desktop)}
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
                  <Responsive
                    breakpoint="md"
                    aboveComponent={(
                      <DesktopCard
                        LeftBorderComponent={LeftBorderComponent}
                        RightBorderComponent={RightBorderComponent}
                        experience={experience}
                        index={index}
                      />
                    )}
                    belowComponent={(
                      <MobileCard
                        BorderComponent={LeftBorderComponent}
                        index={index}
                        experience={experience}
                      />
                    )}
                  />
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
