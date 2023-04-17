import { WorkHistory } from '@mui/icons-material';
import {
  Box, Typography, useTheme,
} from '@mui/material';
import cx from 'classnames';
import {
  ReactNode,
  useCallback, useMemo, useRef, useState,
} from 'react';
import { Section } from 'src/core/layouts';
import {
  Mousewheel, Navigation, Pagination,
  Swiper as SwiperClass,
} from 'swiper';

import { SwiperSlide } from 'swiper/react';

import { FormattedMessage, useIntl } from 'react-intl';
import { LazyLoadParticles, Responsive } from 'src/core/components';
import ResponsiveSwiper from 'src/core/components/responsive-swiper/responsive-swiper';
import SeeMore from 'src/core/components/see-more/see-more';
import { EAppSections, EResponsiveType } from 'src/core/models';
import { IResponsiveSwiper } from 'src/core/models/responsive-swiper.interface';
import { useResponsive } from 'src/core/hooks';
import DesktopCard from './components/desktop-card/desktop-card';
import MobileCard from './components/mobile-card/mobile-card';

import { IExperience } from './models/experience.interface';
import { desktopParticlesConfig } from './particles/desktop-config';
import * as S from './styled';

const Experience = () => {
  const theme = useTheme();
  const swiperRef = useRef<SwiperClass>();
  const [swiperIndex, setSwiperIndex] = useState<number>(0);
  const isMobile = useResponsive({ type: EResponsiveType.smaller });
  const intl = useIntl();

  const renderSeeMore = useCallback((children: JSX.Element) => (
    <SeeMore
      isInitialHidden
      onToggle={() => {
        swiperRef.current!.updateAutoHeight(250);
      }}
    >
      {children}
    </SeeMore>
  ), [swiperRef.current]);
  const experiences: IExperience[] = useMemo<IExperience[]>(() => [
    {
      title: 'home.experience.ibm-mid-level.title',
      date: 'home.experience.ibm-mid-level.date',
      description: (
        <>
          <Typography><FormattedMessage id="home.experience.ibm-mid-level.description1" /></Typography>
          {isMobile ? renderSeeMore(
            <Typography><FormattedMessage id="home.experience.ibm-mid-level.description2" /></Typography>,
          ) : <Typography><FormattedMessage id="home.experience.ibm-mid-level.description2" /></Typography>}
        </>
      ),
      location: 'São Paulo - SP',
      icon: '/badges/mid-level.png',
      type: 'home.experience.ibm-mid-level.type',
      stack: 'home.experience.ibm-mid-level.stack',
      company: {
        name: 'home.experience.ibm-mid-level.company',
        logo: 'companies/ibm.png',
        query: 'IBM Rua Tutóia',
      },
    },
    {
      title: 'home.experience.gft-mid-level.title',
      date: 'home.experience.gft-mid-level.date',
      description: (
        <>
          <Typography><FormattedMessage id="home.experience.gft-mid-level.description1" /></Typography>
          {isMobile ? renderSeeMore(
            <Typography><FormattedMessage id="home.experience.gft-mid-level.description2" /></Typography>,
          ) : <Typography><FormattedMessage id="home.experience.gft-mid-level.description2" /></Typography>}
        </>
      ),
      location: 'São Paulo - SP',
      icon: '/badges/mid-level.png',
      type: 'home.experience.gft-mid-level.type',
      stack: 'home.experience.gft-mid-level.stack',
      company: {
        name: 'home.experience.gft-mid-level.company',
        logo: 'companies/gft.jpg',
        query: 'GFT Alphaville',
      },
    },
    {
      title: 'home.experience.nbm-junior.title',
      date: 'home.experience.nbm-junior.date',
      description: (
        <>
          <Typography><FormattedMessage id="home.experience.nbm-junior.description1" /></Typography>
          {isMobile ? renderSeeMore(
            <Typography><FormattedMessage id="home.experience.nbm-junior.description2" /></Typography>,
          ) : <Typography><FormattedMessage id="home.experience.nbm-junior.description2" /></Typography>}
        </>
      ),
      location: 'São Paulo - SP',
      icon: '/badges/junior.png',
      type: 'home.experience.nbm-junior.type',
      stack: 'home.experience.nbm-junior.stack',
      company: {
        name: 'home.experience.nbm-junior.company',
        logo: 'companies/nbm-informatica.png',
        query: 'NBM Informática',
      },
    },
    {
      title: 'home.experience.enext-junior.title',
      date: 'home.experience.enext-junior.date',
      description: (
        <>
          <Typography>
            <FormattedMessage id="home.experience.enext-junior.description1" />
          </Typography>
          {isMobile ? renderSeeMore(
            <Typography><FormattedMessage id="home.experience.enext-junior.description2" /></Typography>,
          ) : <Typography><FormattedMessage id="home.experience.enext-junior.description2" /></Typography>}
        </>
      ),
      location: 'São Paulo - SP',
      icon: '/badges/junior.png',
      type: 'home.experience.enext-junior.type',
      stack: 'home.experience.enext-junior.stack',
      company: {
        name: 'home.experience.enext-junior.company',
        logo: 'companies/enext.jpg',
        query: 'Enext',
      },
    },
    {
      title: 'home.experience.enext-intern.title',
      date: 'home.experience.enext-intern.date',
      description: (
        <>
          <Typography>
            <FormattedMessage id="home.experience.enext-intern.description1" />
          </Typography>
          {isMobile ? renderSeeMore(
            <Typography><FormattedMessage id="home.experience.enext-intern.description2" /></Typography>,
          ) : <Typography><FormattedMessage id="home.experience.enext-intern.description2" /></Typography>}
        </>
      ),
      location: 'São Paulo - SP',
      icon: '/badges/intern.png',
      type: 'home.experience.enext-intern.type',
      stack: 'home.experience.enext-intern.stack',
      company: {
        name: 'home.experience.enext-intern.company',
        logo: 'companies/enext.jpg',
        query: 'Enext',
      },
    },
    {
      title: 'home.experience.enext-development-program.title',
      date: 'home.experience.enext-development-program.date',
      description: (
        <>
          <Typography><FormattedMessage id="home.experience.enext-development-program.description1" /></Typography>
          {isMobile ? renderSeeMore(
            <Typography><FormattedMessage id="home.experience.enext-development-program.description2" /></Typography>,
          ) : <Typography><FormattedMessage id="home.experience.enext-development-program.description2" /></Typography>}
        </>
      ),
      location: 'Barueri - SP',
      icon: '/badges/beginner.png',
      type: 'home.experience.enext-development-program.type',
      stack: 'home.experience.enext-development-program.stack',
      company: {
        name: 'home.experience.enext-development-program.company',
        logo: 'companies/enext.jpg',
        query: 'Enext',
      },
    },
  ], [intl, isMobile]);

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
        swiperRef.current = swiper;
      },
      autoHeight: true,
      direction: 'horizontal',
      style: { paddingBottom: 50 },
    },
    desktop: {
      modules: [Navigation, Pagination, Mousewheel],
      spaceBetween: 30,
      style: { height: 550 },
      direction: 'vertical',
      onRealIndexChange: (swiper) => {
        setSwiperIndex(swiper.realIndex);
      },
      onSwiper: (swiper) => {
        swiperRef.current = swiper;
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      mousewheel: true,
      pagination: true,
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
        swiperRef.current!.slideTo(index);
      }}
      component="span"
      key={index}
    />
  ), [swiperRef.current, swiperIndex]);

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
      <Responsive
        breakpoint="md"
      >
        <LazyLoadParticles id="experience-section" particlesConfig={desktopParticlesConfig} />
      </Responsive>
      <S.SwiperContainer>
        <Box className="swiper-pagination">
          {[...Array(experiences.length)].map(renderSwiperPagination)}
        </Box>
        <Box className="swiper-button-next" />
        <Box className="swiper-button-prev" />
        <ResponsiveSwiper
          mobileProps={swiperProps.mobile}
          desktopProps={swiperProps.desktop}
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
        </ResponsiveSwiper>
      </S.SwiperContainer>
    </Section>
  );
};

export default Experience;
