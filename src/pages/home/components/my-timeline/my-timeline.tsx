import {
  CardMembership,
  DeveloperMode,
  ExitToApp,
  PresentToAll,
  School,
  SettingsEthernet,
  Star,
  Timeline,
  Upgrade,
  Work,
} from '@mui/icons-material';
import { Typography, useTheme } from '@mui/material';
import { FormattedMessage } from 'react-intl';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import SwipeDownAnimation from 'src/assets/animations/swipe-down.json';
import landmarks from 'src/assets/resources/landmarks.json';
import { Section } from 'src/core/layouts';

import SwipeAnimation from 'src/core/components/swipe-animation/swipe-animation';
import { EAchievementType } from 'src/core/models';
import { Responsive } from 'src/core/components';
import loadParticlesEngine from 'src/core/functions/load-particles-engine';
import Particles from 'react-tsparticles';
import * as S from './styled';
import { desktopParticlesConfig } from './particles/desktop-config';

const MyTimeline = () => {
  const theme = useTheme();

  return (
    <S.TimelineContainer>
      <Section
        onTitleShow={(typewriter) => {
          typewriter.typeString('Minha trajetória').start();
        }}
        icon={<Timeline htmlColor="white" fontSize="large" />}
      >
        <Responsive
          breakpoint="md"
        >
          <Particles
            id="my-timeline-background"
            canvasClassName="background-canvas"
            init={(engine) => loadParticlesEngine(engine)}
            params={desktopParticlesConfig}
          />
        </Responsive>
        <S.TimelineWrapper>
          {/* <SwipeAnimation
            continuous={false}
            lottieProps={{
              options: { animationData: SwipeDownAnimation },
              speed: 0.40,
              width: 125,
              height: 'unset',
            }}
          /> */}
          <VerticalTimeline
            lineColor={theme.palette.primary.main}
          >
            <VerticalTimelineElement
              iconStyle={{
                background: '#015a44',
                boxShadow: '0 0 0 4px #015a44, inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 4px rgb(0 0 0 / 5%)',
              }}
              icon={(
                <SettingsEthernet
                  fontSize="large"
                  htmlColor="white"
                />
            )}
            />
            {landmarks.map((landmark) => {
              const { background, icon } = {
                [EAchievementType.START]: { background: '#015a44', icon: <Star fontSize="large" htmlColor="white" /> },
                [EAchievementType.CERTIFICATE]: { background: '#fc8e27', icon: <CardMembership fontSize="large" htmlColor="white" /> },
                [EAchievementType.EDUCATION]: { background: '#001a63', icon: <School fontSize="large" htmlColor="white" /> },
                [EAchievementType.JOB]: { background: '#ff8902', icon: <Work fontSize="large" htmlColor="white" /> },
                [EAchievementType.PROJECT]: { background: '#ff3a04', icon: <PresentToAll fontSize="large" htmlColor="white" /> },
                [EAchievementType.PROMOTION]: { background: '#406794', icon: <Upgrade fontSize="large" htmlColor="white" /> },
                [EAchievementType.EXIT]: { background: theme.palette.secondary.main, icon: <ExitToApp fontSize="large" htmlColor="white" /> },
                [EAchievementType.FREELANCE]: { background: '#005842', icon: <DeveloperMode fontSize="large" htmlColor="white" /> },
              }[landmark.type]!;
              return (
                <VerticalTimelineElement
                  key={landmark.name}
                  contentStyle={{
                    background: theme.palette.background.paper,
                  }}
                  position={landmark.position}
                  contentArrowStyle={{
                    borderRight: `7px solid ${theme.palette.background.paper}`,
                  }}
                  date={landmark.date}
                  dateClassName="landmark-date"
                  iconStyle={{
                    background,
                    boxShadow: `0 0 0 4px ${background}, inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 4px rgb(0 0 0 / 5%)`,
                  }}
                  icon={icon}
                >
                  <Typography variant="h3"><FormattedMessage id={landmark.name} /></Typography>
                  <Typography><FormattedMessage id={landmark.description} /></Typography>
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        </S.TimelineWrapper>
      </Section>
    </S.TimelineContainer>
  );
};

export default MyTimeline;
