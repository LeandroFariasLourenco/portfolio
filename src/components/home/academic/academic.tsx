import {
  School,
} from '@mui/icons-material';
import { Grid, Typography } from '@mui/material';
import cx from 'classnames';
import {
  useCallback,
  useMemo, useRef, useState,
} from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import SwipeRightAnimation from '@/../public/animations/swipe-right.json';
import { Responsive } from '@/shared/components';
import SwipeAnimation from '@/shared/components/swipe-animation/swipe-animation';
import { getBucketResource } from '@/shared/functions';
import { useResponsive } from '@/shared/hooks';
import { Section } from '@/shared/layouts';
import {
  EAppSections,
  EResponsiveType,
} from '@/shared/models';
import Certificate from './components/certificate/certificate';
import Course from './components/course/course';
import Extracurricular from './components/extracurricular/extracurricular';
import { ICertificate } from './models/certificate.interface';
import { ICourse } from './models/course.interface';
import { IExtracurricular } from './models/extracurricular.interface';

import styles from './academic.module.scss';

const Academic = () => {
  const [activeTab, setActiveTab] = useState(0);
  const cardContainerRef = useRef<HTMLDivElement>();
  const isMobile = useResponsive({ type: EResponsiveType.smaller });
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
          <p className="academic-formation-description"><FormattedMessage id="home.formation.fiap.description1" /></p>
          <p className="academic-formation-description"><FormattedMessage id="home.formation.fiap.description2" /></p>
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
          <p className="academic-formation-description"><FormattedMessage id="home.formation.etec.description1" /></p>
          <p className="academic-formation-description"><FormattedMessage id="home.formation.etec.description2" /></p>
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
        link: `${getBucketResource('/certificates/profissional-web-designer')}.pdf`,
        logo: `${getBucketResource('/companies/fiap.png')}`,
        width: { desktop: '125px', mobile: '65px' },
      },
      {
        title: 'home.certifications7.title',
        link: `${getBucketResource('/certificates/profissional-app-developer')}.pdf`,
        logo: `${getBucketResource('/companies/fiap.png')}`,
        width: { desktop: '125px', mobile: '65px' },
      },
    ],
  }), [intl]);

  const renderFormationTab = useCallback((tab: string, index: number) => (
    <div
      key={tab}
      onClick={() => {
        setActiveTab(index);
        if (isMobile) return;
        cardContainerRef.current!.scrollIntoView({
          block: 'center',
          behavior: 'smooth',
        });
      }}
      className={`${styles["academic-formation-tab"]} tab-button ${cx({
        open: activeTab === index,
      })}`}
    >
      <h5 className={styles["academic-formation-tab-title"]}><FormattedMessage id={tab} /></h5>
    </div>
  ), [intl, activeTab]);

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
    <div className={styles["academic-formation-wrapper"]} id={EAppSections.ACADEMIC}>
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
        <Grid
          className={styles["academic-formation-tabs"]}
          container
          flexWrap="nowrap"
        >
          <SwipeAnimation lottieProps={{
            height: '55px',
            speed: 1.25,
            width: '135px',
            config: {
              animationData: SwipeRightAnimation,
            },
          }}
          />
          {formationTabs.map(renderFormationTab)}
        </Grid>

        <Grid
          className={styles["academic-card-container"]}
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
              display: activeTab !== 0 ? 'none' : 'flex',
            }}
          >
            {formations.courses.map(renderCourse)}
          </Grid>
          <Grid
            container
            style={{
              display: activeTab !== 1 ? 'none' : 'flex',
            }}
            spacing={2}
          >
            {formations.extracurriculars.map(renderExtracurricular)}
          </Grid>
          <Grid
            container
            spacing={isMobile ? 1 : 2}
            style={{
              display: activeTab !== 2 ? 'none' : 'flex',
            }}
          >
            {formations.certificates.map(renderCertificate)}
          </Grid>
        </Grid>
      </Section>
    </div>
  );
};

export default Academic;
