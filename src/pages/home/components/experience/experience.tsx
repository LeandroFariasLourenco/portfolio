import { WorkHistory } from '@mui/icons-material';
import {
  Box, useTheme,
} from '@mui/material';
import cx from 'classnames';
import {
  useCallback, useMemo, useState,
} from 'react';
import experiences from 'src/assets/resources/experiences.json';
import { Section } from 'src/core/layouts';
import {
  Mousewheel, Navigation, Pagination,
  Swiper as SwiperClass,
} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import LazyLoadParticles from 'src/core/components/lazy-load/lazy-load';
import Responsive from 'src/core/components/responsive/responsive';
import useResponsive from 'src/core/hooks/useResponsive/useResponsive';
import { EAppSections, EResponsiveType } from 'src/core/models';
import { IResponsiveSwiper } from 'src/core/models/responsive-swiper.interface';
import DesktopCard from './components/desktop-card/desktop-card';
import MobileCard from './components/mobile-card/mobile-card';

import { desktopParticlesConfig } from './particles/desktop-config';
import * as S from './styled';

const Experience = () => {
  const theme = useTheme();
  const [swiper, setSwiper] = useState<SwiperClass>();
  const [swiperIndex, setSwiperIndex] = useState<number>(0);
  const isMobile = useResponsive({ type: EResponsiveType.smaller, breakpoint: 'md' });
  const swiperProps: IResponsiveSwiper = useMemo<IResponsiveSwiper>(() => ({
    mobile: {
      modules: [Pagination, Navigation],
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      spaceBetween: 15,
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
      id={EAppSections.EXPERIENCES}
      onTitleShow={(typewriter) => {
        typewriter.typeString('Experiência profissional')
          .start();
      }}
      icon={<WorkHistory fontSize="large" htmlColor="white" />}
      gridStyle={{
        position: 'relative',
      }}
    >
      <LazyLoadParticles id="experience-section" particlesConfig={desktopParticlesConfig} />
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
              </SwiperSlide>
            );
          })}
        </Swiper>
      </S.SwiperContainer>
    </Section>
  );
};

export default Experience;
