import {
  School,
} from '@mui/icons-material';
import { Grid, Typography } from '@mui/material';
import { memo, useMemo, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import cx from 'classnames';
import { Section } from 'src/core/layouts';

import Particles from 'react-tsparticles';
import { APP } from 'src/core/constants';
import { ICourse } from 'src/core/models/ICourse';
import { IExtracurricular } from 'src/core/models/IExtracurricular';
import { ICertificate } from 'src/core/models/ICertificate';
import * as S from './styled';
import { particlesConfig } from './particles-config';
import Certificates from './components/Certificates/Certificates';
import Course from './components/Course/Course';
import Extracurricular from './components/Extracurricular/Extracurricular';

enum CardType {
  Course = 'course',
  Extracurricular = 'extracurricular',
  Certificates = 'certificates',
}

const ParticlesComponent = memo(() => (
  <Particles
    canvasClassName="background-canvas"
    options={particlesConfig}
    id="academic-background"
  />
), () => true);

const Academic = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = useMemo(() => [
    {
      title: 'home.formation.tabs1.title',
      type: CardType.Course,
      cards: [
        {
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
        },
      ],
    },
    {
      title: 'home.formation.tabs2.title',
      type: CardType.Extracurricular,
      cards: [
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
    },
    {
      title: 'home.formation.tabs3.title',
      type: CardType.Certificates,
      cards: [
        {
          title: 'home.certifications1.title',
          link: `${APP.aws.assets}/certificates/fiap.png`,
          logo: `${APP.aws.assets}/technologies/aws/aws.svg`,
        },
        {
          title: 'home.certifications2.title',
          link: `${APP.aws.assets}/certificates/TOEFL-ITP-degree.jpeg`,
          logo: `${APP.aws.assets}/companies/ccaa.png`,
        },
        {
          title: 'home.certifications3.title',
          link: `${APP.aws.assets}/certificates/english-course.jpeg`,
          logo: `${APP.aws.assets}/companies/ccaa.png`,
        },
        {
          title: 'home.certifications4.title',
          link: `${APP.aws.assets}/certificates/fiap-college-degree.jpg`,
          logo: `${APP.aws.assets}/companies/fiap.png`,
        },
        {
          title: 'home.certifications5.title',
          link: `${APP.aws.assets}/certificates/profissional-app-developer.pdf`,
          logo: `${APP.aws.assets}/companies/etec.png`,
        },
        {
          title: 'home.certifications6.title',
          link: `${APP.aws.assets}/profissional-web-designer.pdf`,
          logo: `${APP.aws.assets}/companies/fiap.png`,
        },
        {
          title: 'home.certifications7.title',
          link: `${APP.aws.assets}/profissional-app-developer.pdf`,
          logo: `${APP.aws.assets}/companies/fiap.png`,
        },
      ],
    },
  ], []);

  return (
    <Section
      onTitleShow={(typewriter) => {
        typewriter.typeString('Formação')
          .start();
      }}
      icon={<School fontSize="large" htmlColor="white" />}
    >
      <ParticlesComponent />
      <S.FormationTabs
        container
        flexWrap="nowrap"
      >
        {experiences.map((experience, index) => (
          <S.FormationTab
            container
            key={`${experience.title}`}
            alignItems="center"
            justifyContent="center"
            onClick={() => setActiveTab(index)}
            className={cx({
              selected: activeTab === index,
            })}
          >
            <Typography variant="h4"><FormattedMessage id={experience.title} /></Typography>
          </S.FormationTab>
        ))}
      </S.FormationTabs>

      <S.CardContainer
        container
        alignItems="center"
        flexWrap="nowrap"
        xs={12}
        gap={5}
      >
        {{
          [CardType.Course]: (
            experiences[activeTab].cards.map((card) => (
              <Course card={card as ICourse} />
            ))
          ),
          [CardType.Extracurricular]: (
            experiences[activeTab].cards.map((card) => (
              <Extracurricular card={card as IExtracurricular} />
            ))
          ),
          [CardType.Certificates]: (
            <Grid
              container
              spacing={5}
            >
              {experiences[activeTab].cards.map((card) => (
                <Grid
                  key={card.title}
                  item
                  xs={4}
                >
                  <Certificates card={card as ICertificate} />
                </Grid>
              ))}
            </Grid>
          ),
        }[experiences[activeTab].type]}
      </S.CardContainer>
    </Section>
  );
};

export default Academic;
