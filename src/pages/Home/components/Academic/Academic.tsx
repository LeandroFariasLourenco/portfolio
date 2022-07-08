import {
  School,
} from '@mui/icons-material';
import { Drawer, Typography } from '@mui/material';
import { memo, useMemo, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import cx from 'classnames';
import { Section } from 'src/core/layouts';
import { Navigation, Pagination } from 'swiper';

import Particles from 'react-tsparticles';
import { APP } from 'src/core/constants';
import * as S from './styled';
import { particlesConfig } from './particles-config';
import Card from './components/Card/Card';

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
      cards: [
        {
          title: 'home.formation1.title',
          type: 'home.formation1.type',
          location: 'home.formation1.location',
          duration: '2019 - 2020',
          logo: `${APP.aws.assets}/companies/fiap.png`,
        },
        {
          title: 'home.formation2.title',
          type: 'home.formation2.type',
          location: 'home.formation2.location',
          duration: '2017 - 2018',
          logo: `${APP.aws.assets}/companies/etec.png`,
        },
      ],
    },
    {
      title: 'home.formation.tabs2.title',
      cards: [],
    },
    {
      title: 'home.formation.tabs3.title',
      card: [
        {
          title: 'home.formation2.title',
          type: 'home.formation2.type',
          location: 'home.formation2.location',
          duration: '2017 - 2018',
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
        {experiences[activeTab]!.cards!.map((card) => (
          <Card
            key={card.title}
            card={card}
          />
        ))}
      </S.CardContainer>
    </Section>
  );
};

export default Academic;
