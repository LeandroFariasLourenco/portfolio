import { Section } from '@/shared/layouts';
import { WorkHistory } from '@mui/icons-material';
import {
  useTheme
} from '@mui/material';
import {
  useCallback,
  useMemo,
  useState
} from 'react';
import {
  Mousewheel,
  Swiper as SwiperClass,
} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import { CustomSwiperControls, Responsive } from '@/shared/components';
import LoadParticles from '@/shared/components/load-particles/load-particles';
import SeeMore from '@/shared/components/see-more/see-more';
import { useResponsive, useSwiperProps } from '@/shared/hooks';
import { EAppSections, EResponsiveType } from '@/shared/models';
import { FormattedMessage, useIntl } from 'react-intl';
import DesktopCard from './components/desktop-card/desktop-card';
import MobileCard from './components/mobile-card/mobile-card';

import { IExperience } from './models/experience.interface';
import { desktopParticlesConfig } from './particles/desktop-config';

import styles from './experience.module.scss';
import './shared.scss';

const Experience = () => {
  const theme = useTheme();
  const [swiperRef, setSwiperRef] = useState<SwiperClass>();
  const [swiperIndex, setSwiperIndex] = useState<number>(0);
  const isMobile = useResponsive({ type: EResponsiveType.smaller });
  const intl = useIntl();

  const renderSeeMore = useCallback((children: JSX.Element) => (
    <SeeMore
      isInitialHidden
      onToggle={(transitionNumber) => {
        const interval = setInterval(() => {
          swiperRef!.updateAutoHeight();
        });

        setTimeout(() => {
          clearInterval(interval);
        }, transitionNumber);
      }}
    >
      {children}
    </SeeMore>
  ), [swiperRef]);

  const experiences: IExperience[] = useMemo<IExperience[]>(() => [
    {
      title: 'home.experience.ibm-mid-level.title',
      date: 'home.experience.ibm-mid-level.date',
      description: (
        <>
          <p><FormattedMessage id="home.experience.ibm-mid-level.description1" /></p>
          {isMobile ? renderSeeMore(
            <p><FormattedMessage id="home.experience.ibm-mid-level.description2" /></p>,
          ) : <p><FormattedMessage id="home.experience.ibm-mid-level.description2" /></p>}
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
          <p><FormattedMessage id="home.experience.gft-mid-level.description1" /></p>
          {isMobile ? renderSeeMore(
            <p><FormattedMessage id="home.experience.gft-mid-level.description2" /></p>,
          ) : <p><FormattedMessage id="home.experience.gft-mid-level.description2" /></p>}
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
          <p><FormattedMessage id="home.experience.nbm-junior.description1" /></p>
          {isMobile ? renderSeeMore(
            <p><FormattedMessage id="home.experience.nbm-junior.description2" /></p>,
          ) : <p><FormattedMessage id="home.experience.nbm-junior.description2" /></p>}
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
          <p>
            <FormattedMessage id="home.experience.enext-junior.description1" />
          </p>
          {isMobile ? renderSeeMore(
            <p><FormattedMessage id="home.experience.enext-junior.description2" /></p>,
          ) : <p><FormattedMessage id="home.experience.enext-junior.description2" /></p>}
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
          <p>
            <FormattedMessage id="home.experience.enext-intern.description1" />
          </p>
          {isMobile ? renderSeeMore(
            <p><FormattedMessage id="home.experience.enext-intern.description2" /></p>,
          ) : <p><FormattedMessage id="home.experience.enext-intern.description2" /></p>}
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
          <p><FormattedMessage id="home.experience.enext-development-program.description1" /></p>
          {isMobile ? renderSeeMore(
            <p><FormattedMessage id="home.experience.enext-development-program.description2" /></p>,
          ) : <p><FormattedMessage id="home.experience.enext-development-program.description2" /></p>}
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
  ], [intl, isMobile, swiperRef]);

  const { swiperProps } = useSwiperProps({
    desktop: {
      modules: [Mousewheel],
      spaceBetween: 30,
      style: { height: 550 },
      direction: 'vertical',
      mousewheel: true,
      grabCursor: true,
    },
    mobile: {
      direction: 'horizontal',
      spaceBetween: 15,
      style: { paddingBottom: 50 },
      autoHeight: true,
    },
  });

  const renderExperience = useCallback((experience: IExperience, index: number) => (
    <SwiperSlide
      key={experience.date}
    >
      <Responsive
        breakpoint="md"
        aboveComponent={(
          <DesktopCard
            experience={experience}
            index={index}
          />
        )}
        belowComponent={(
          <MobileCard
            index={index}
            experience={experience}
          />
        )}
      />
    </SwiperSlide>
  ), []);

  return (
    <div className={styles["experience-container"]}>
      <Section
        id={EAppSections.EXPERIENCES}
        onTitleShow={(typewriter) => {
          typewriter.typeString(intl.formatMessage({ id: 'home.experience.title' }))
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
          <LoadParticles id="experience-section" options={desktopParticlesConfig} />
        </Responsive>
        <div className={styles["experience-swiper-container"]}>
          <Swiper
            onInit={(swiper) => {
              setSwiperRef(swiper);
            }}
            onRealIndexChange={({ realIndex }) => {
              setSwiperIndex(realIndex);
            }}
            onTransitionStart={({ $el }: any) => {
              if (!isMobile) return;
              const swiperContainer = ($el[0] as HTMLDivElement);
              swiperContainer.style.height = 'auto';
            }}
            {...swiperProps}
          >
            {experiences.map(renderExperience)}
          </Swiper>
          <CustomSwiperControls
            swiper={swiperRef!}
            swiperIndex={swiperIndex}
            paginationLayout={isMobile ? 'vertical' : 'horizontal'}
            totalSlides={experiences.length}
          />
        </div>
      </Section>
    </div>
  );
};

export default Experience;
