import {
  School,
} from '@mui/icons-material';
import { Grid, Typography } from '@mui/material';
import {
  memo, useMemo, useRef, useState,
} from 'react';
import { FormattedMessage } from 'react-intl';
import cx from 'classnames';
import AnimateHeight from 'react-animate-height';

import { Section } from 'src/core/layouts';
import Particles from 'react-tsparticles';
import { APP } from 'src/core/constants';
import {
  ICertificate, IExtracurricular, ICourse, EResponsiveType,
} from 'src/core/models';
import { useHidden } from 'src/core/hooks';
import useResponsive from 'src/core/hooks/useResponsive/useResponsive';
import Responsive from 'src/core/components/responsive/responsive';
import * as S from './styled';
import { particlesConfig } from './particles-config';
import Certificate from './components/certificate/certificate';
import Course from './components/course/course';
import Extracurricular from './components/extracurricular/extracurricular';

const ParticlesComponent = memo(() => (
  <Particles
    canvasClassName="background-canvas"
    options={particlesConfig}
    id="academic-background"
  />
), () => true);

const Academic = () => {
  const [activeTab, setActiveTab] = useState(0);
  const cardContainerRef = useRef<HTMLDivElement>();
  const isMobile = useResponsive({ breakpoint: 'md', type: EResponsiveType.smaller });

  const formationTabs = useMemo(() => [
    'home.formation.tabs1.title',
    'home.formation.tabs2.title',
    'home.formation.tabs3.title',
  ], []);

  const formations = useMemo<{
    courses: ICourse[],
    extracurriculars: IExtracurricular[],
    certificates: ICertificate[]
  }>(() => ({
    courses: [{
      title: 'home.formation1.title',
      type: 'home.formation1.type',
      location: 'home.formation1.location',
      description: 'home.formation1.description',
      duration: '2019 - 2020',
      logo: `${APP.aws.assets}/companies/fiap.png`,
    },
    {
      title: 'home.formation2.title',
      type: 'home.formation2.type',
      location: 'home.formation2.location',
      description: 'home.formation2.description',
      duration: '2017 - 2018',
      logo: `${APP.aws.assets}/companies/etec.png`,
    }],
    extracurriculars: [
      {
        title: 'home.extracurricular1.title',
        type: 'home.extracurricular1.type',
        location: 'home.extracurricular1.location',
        description: 'home.extracurricular1.description',
        duration: '2013 - 2018',
        logo: `${APP.aws.assets}/companies/ccaa.png`,
      },
      {
        title: 'home.extracurricular2.title',
        type: 'home.extracurricular2.type',
        location: 'home.extracurricular2.location',
        description: 'home.extracurricular2.description',
        duration: '2022',
        logo: `${APP.aws.assets}/companies/udemy.png`,
      },
    ],
    certificates: [
      {
        title: 'home.certifications1.title',
        link: `${APP.aws.assets}/certificates/certified-cloud-practitioner-certificate.pdf`,
        logo: `${APP.aws.assets}/certificates/certified-cloud-practitioner.png`,
        width: { desktop: '60px', mobile: '55px' },
      },
      {
        title: 'home.certifications2.title',
        link: `${APP.aws.assets}/certificates/TOEFL-ITP-degree.jpeg`,
        logo: `${APP.aws.assets}/companies/ccaa.png`,
        width: { desktop: '60px', mobile: '50px' },
      },
      {
        title: 'home.certifications3.title',
        link: `${APP.aws.assets}/certificates/english-course.jpeg`,
        logo: `${APP.aws.assets}/companies/ccaa.png`,
        width: { desktop: '60px', mobile: '50px' },
      },
      {
        title: 'home.certifications4.title',
        link: `${APP.aws.assets}/certificates/fiap-college-degree.jpg`,
        logo: `${APP.aws.assets}/companies/fiap.png`,
        width: { desktop: '125px', mobile: '65px' },
      },
      {
        title: 'home.certifications5.title',
        link: `${APP.aws.assets}/certificates/profissional-app-developer.pdf`,
        logo: `${APP.aws.assets}/companies/etec.png`,
        width: { desktop: '100px', mobile: '65px' },
      },
      {
        title: 'home.certifications6.title',
        link: `${APP.aws.assets}/profissional-web-designer.pdf`,
        logo: `${APP.aws.assets}/companies/fiap.png`,
        width: { desktop: '125px', mobile: '65px' },
      },
      {
        title: 'home.certifications7.title',
        link: `${APP.aws.assets}/profissional-app-developer.pdf`,
        logo: `${APP.aws.assets}/companies/fiap.png`,
        width: { desktop: '125px', mobile: '65px' },
      },
    ],
  }), []);

  return (
    <S.FormationWrapper>
      <Section
        onTitleShow={(typewriter) => {
          typewriter.typeString('Formação')
            .start();
        }}
        icon={<School fontSize="large" htmlColor="white" />}
        gridStyle={{
          height: '100%',
        }}
      >
        <ParticlesComponent />
        <S.FormationTabs
          container
          flexWrap="nowrap"
        >
          {formationTabs.map((tab, index) => (
            <S.FormationTab
              container
              key={tab}
              alignItems="center"
              justifyContent="center"
              onClick={() => {
                setActiveTab(index);
                if (isMobile) return;
                cardContainerRef.current!.scrollIntoView({
                  block: isMobile ? 'start' : 'center',
                  behavior: 'smooth',
                });
              }}
              className={cx({
                selected: activeTab === index,
              })}
            >
              <Typography variant={isMobile ? 'h5' : 'h4'}><FormattedMessage id={tab} /></Typography>
            </S.FormationTab>
          ))}
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
              {formations.courses.map((course, index) => (
                <Grid key={course.title} item xs={12} md={4}>
                  <Course index={index} course={course} />
                </Grid>
              ))}
            </Grid>
            <Grid
              container
              style={{
                display: useHidden(activeTab !== 1),
              }}
              spacing={2}
            >
              {formations.extracurriculars.map((extracurricular, index) => (
                <Grid key={extracurricular.title} item xs={12} md={4}>
                  <Extracurricular index={index} extracurricular={extracurricular} />
                </Grid>
              ))}
            </Grid>
            <Grid
              container
              spacing={isMobile ? 1 : 2}
              style={{
                display: useHidden(activeTab !== 2),
              }}
            >
              {formations.certificates.map((certificate, index) => (
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
              ))}
            </Grid>
          </S.CardContainer>
        </AnimateHeight>
      </Section>
    </S.FormationWrapper>
  );
};

export default Academic;
