import {
  School,
} from '@mui/icons-material';
import { Grid, Typography } from '@mui/material';
import cx from 'classnames';
import {
  useCallback,
  useMemo, useRef, useState,
} from 'react';
import AnimateHeight from 'react-animate-height';
import { FormattedMessage, useIntl } from 'react-intl';

import SwipeRightAnimation from 'src/assets/animations/swipe-right.json';
import { LazyLoadParticles, Responsive } from 'src/core/components';
import SwipeAnimation from 'src/core/components/swipe-animation/swipe-animation';
import { getBucketResource } from 'src/core/functions';
import { useHidden, useResponsive } from 'src/core/hooks';
import { Section } from 'src/core/layouts';
import {
  EAppSections,
  EResponsiveType,
} from 'src/core/models';
import Certificate from './components/certificate/certificate';
import Course from './components/course/course';
import Extracurricular from './components/extracurricular/extracurricular';
import { desktopParticlesConfig } from './particles/desktop-config';
import * as S from './styled';
import { IExtracurricular } from './models/extracurricular.interface';
import { ICertificate } from './models/certificate.interface';
import { ICourse } from './models/course.interface';

const Academic = () => {
  const [activeTab, setActiveTab] = useState(0);
  const cardContainerRef = useRef<HTMLDivElement>();
  const isMobile = useResponsive({ breakpoint: 'md', type: EResponsiveType.smaller });
  const intl = useIntl();
  const formationTabs: string[] = useMemo<string[]>(() => [
    'home.formation.tabs1.title',
    'home.formation.tabs2.title',
    'home.formation.tabs3.title',
  ], [intl]);

  const formations = useMemo<{
    courses: ICourse[],
    extracurriculars: IExtracurricular[],
    certificates: ICertificate[]
  }>(() => ({
    courses: [{
      title: 'home.formation.fiap.title',
      type: 'home.formation.fiap.type',
      location: 'home.formation.fiap.location',
      description: (
        <>
          <S.FormationDescriptionContainer><FormattedMessage id="home.formation.fiap.description1" /></S.FormationDescriptionContainer>
          <S.FormationDescriptionContainer><FormattedMessage id="home.formation.fiap.description2" /></S.FormationDescriptionContainer>
        </>
      ),
      duration: '2019 - 2020',
      logo: `${getBucketResource('/companies/fiap.png')}`,
    },
    {
      title: 'home.formation.etec.title',
      type: 'home.formation.etec.type',
      location: 'home.formation.etec.location',
      description: (
        <>
          <S.FormationDescriptionContainer><FormattedMessage id="home.formation.etec.description1" /></S.FormationDescriptionContainer>
          <S.FormationDescriptionContainer><FormattedMessage id="home.formation.etec.description2" /></S.FormationDescriptionContainer>
        </>
      ),
      duration: '2017 - 2018',
      logo: `${getBucketResource('/companies/etec.png')}`,
    }],
    extracurriculars: [
      {
        title: 'home.extracurricular1.title',
        type: 'home.extracurricular1.type',
        location: 'home.extracurricular1.location',
        description: 'home.extracurricular1.description',
        duration: '2013 - 2018',
        logo: `${getBucketResource('/companies/ccaa.png')}`,
      },
      {
        title: 'home.extracurricular2.title',
        type: 'home.extracurricular2.type',
        location: 'home.extracurricular2.location',
        description: 'home.extracurricular2.description',
        duration: '2022',
        logo: `${getBucketResource('/companies/udemy.png')}`,
      },
    ],
    certificates: [
      {
        title: 'home.certifications1.title',
        link: `${getBucketResource('/certificates/certified-cloud')}-practitioner-certificate.pdf`,
        logo: `${getBucketResource('/certificates/certified-cloud')}-practitioner.png`,
        width: { desktop: '60px', mobile: '55px' },
      },
      {
        title: 'home.certifications2.title',
        link: `${getBucketResource('/certificates/TOEFL-ITP')}-degree.jpeg`,
        logo: `${getBucketResource('/companies/ccaa.png')}`,
        width: { desktop: '60px', mobile: '50px' },
      },
      {
        title: 'home.certifications3.title',
        link: `${getBucketResource('/certificates/english-course')}.jpeg`,
        logo: `${getBucketResource('/companies/ccaa.png')}`,
        width: { desktop: '60px', mobile: '50px' },
      },
      {
        title: 'home.certifications4.title',
        link: `${getBucketResource('/certificates/fiap-college')}-degree.jpg`,
        logo: `${getBucketResource('/companies/fiap.png')}`,
        width: { desktop: '125px', mobile: '65px' },
      },
      {
        title: 'home.certifications5.title',
        link: `${getBucketResource('/certificates/profissional-app')}-developer.pdf`,
        logo: `${getBucketResource('/companies/etec.png')}`,
        width: { desktop: '100px', mobile: '65px' },
      },
      {
        title: 'home.certifications6.title',
        link: `${getBucketResource('/profissional-web-designer')}.pdf`,
        logo: `${getBucketResource('/companies/fiap.png')}`,
        width: { desktop: '125px', mobile: '65px' },
      },
      {
        title: 'home.certifications7.title',
        link: `${getBucketResource('/profissional-app-developer')}.pdf`,
        logo: `${getBucketResource('/companies/fiap.png')}`,
        width: { desktop: '125px', mobile: '65px' },
      },
    ],
  }), [intl]);

  const renderFormationTab = useCallback((tab: string, index: number) => (
    <S.FormationTab
      container
      key={tab}
      alignItems="center"
      justifyContent="center"
      onClick={() => {
        setActiveTab(index);
        if (isMobile) return;
        cardContainerRef.current!.scrollIntoView({
          block: 'center',
          behavior: 'smooth',
        });
      }}
      className={cx({
        selected: activeTab === index,
      })}
    >
      <Typography variant={isMobile ? 'h5' : 'h4'}><FormattedMessage id={tab} /></Typography>
    </S.FormationTab>
  ), [intl, isMobile]);

  const renderCourse = useCallback((course: ICourse, index: number) => (
    <Grid key={course.title} item xs={12} md={4}>
      <Course index={index} course={course} />
    </Grid>
  ), [intl]);

  const renderExtracurricular = useCallback((extracurricular: IExtracurricular, index: number) => (
    <Grid key={extracurricular.title} item xs={12} md={4}>
      <Extracurricular index={index} extracurricular={extracurricular} />
    </Grid>
  ), [intl]);

  const renderCertificate = useCallback((certificate: ICertificate, index: number) => (
    <Responsive
      key={certificate.title}
      breakpoint="md"
      belowComponent={(
        <Certificate
          index={index}
          certificate={certificate}
        />
      )}
      aboveComponent={(
        <Grid
          container
          item
          md={4}
        >
          <Certificate
            index={index}
            certificate={certificate}
          />
        </Grid>
      )}
    />
  ), []);

  return (
    <S.FormationWrapper id={EAppSections.ACADEMIC}>
      <LazyLoadParticles id="formation-section" particlesConfig={desktopParticlesConfig} />
      <Section
        onTitleShow={(typewriter) => {
          typewriter.typeString(intl.formatMessage({ id: 'home.formation.title' }))
            .start();
        }}
        icon={<School fontSize="large" htmlColor="white" />}
        gridStyle={{
          height: '100%',
        }}
      >
        <S.FormationTabs
          container
          flexWrap="nowrap"
        >
          <SwipeAnimation lottieProps={{
            height: 55,
            speed: 1.25,
            width: 135,
            options: {
              animationData: SwipeRightAnimation,
            },
          }}
          />
          {formationTabs.map(renderFormationTab)}
        </S.FormationTabs>

        <AnimateHeight
          duration={300}
          height="auto"
        >
          <S.CardContainer
            container
            item
            ref={(ref) => {
              cardContainerRef.current = ref!;
            }}
            alignItems="center"
            xs={12}
            gap={5}
          >
            <Grid
              container
              spacing={2}
              style={{
                display: useHidden(activeTab !== 0),
              }}
            >
              {formations.courses.map(renderCourse)}
            </Grid>
            <Grid
              container
              style={{
                display: useHidden(activeTab !== 1),
              }}
              spacing={2}
            >
              {formations.extracurriculars.map(renderExtracurricular)}
            </Grid>
            <Grid
              container
              spacing={isMobile ? 1 : 2}
              style={{
                display: useHidden(activeTab !== 2),
              }}
            >
              {formations.certificates.map(renderCertificate)}
            </Grid>
          </S.CardContainer>
        </AnimateHeight>
      </Section>
    </S.FormationWrapper>
  );
};

export default Academic;
