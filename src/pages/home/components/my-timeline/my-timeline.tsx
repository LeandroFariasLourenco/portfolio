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
import { FormattedMessage } from 'react-intl';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { Typography, useTheme } from '@mui/material';

import landmarks from 'src/assets/resources/landmarks.json';
import { Section } from 'src/core/layouts';

import { EAchievementType, EResponsiveType } from 'src/core/models';
import useResponsive from 'src/core/hooks/useResponsive/useResponsive';
import * as S from './styled';

const MyTimeline = () => {
  const theme = useTheme();
  const isMobile = useResponsive({ breakpoint: 'md', type: EResponsiveType.smaller });

  return (
    <Section
      onTitleShow={(typewriter) => {
        typewriter.typeString('Minha trajetória').start();
      }}
      icon={<Timeline htmlColor="white" fontSize="large" />}
      childrenWrapperProps={{
        style: {
          maxHeight: isMobile ? 475 : 1000,
          overflowY: 'auto',
          overflowX: 'hidden',
          padding: '0 10px',
        },
      }}
    >
      <S.TimelineWrapper>
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
  );
};

export default MyTimeline;
