import {
  CardMembership,
  CastForEducation,
  DeveloperMode,
  Flag,
  PresentToAll,
  School,
  SettingsEthernet,
  Star,
  Timeline,
  Upgrade,
  Work,
  WorkspacePremium,
} from '@mui/icons-material';
import { Typography, useTheme } from '@mui/material';
import { FormattedMessage, useIntl } from 'react-intl';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import { Section } from 'src/core/layouts';

import {
  Fragment, useCallback, useMemo, useState,
} from 'react';
import { Responsive } from 'src/core/components';
import LoadParticles from 'src/core/components/load-particles/load-particles';
import { EAppSections } from 'src/core/models';
import { EAchievementType } from './models/achievement-type.enum';
import { desktopParticlesConfig } from './particles/desktop-config';
import landmarks from './resources/landmarks.json';
import * as S from './styled';

const MyTimeline = () => {
  const theme = useTheme();
  const intl = useIntl();
  const visibleElementsIncrement = useMemo(() => 2, []);
  const [visibleElements, setVisibleElements] = useState<number>(visibleElementsIncrement);

  const handleShowMore = () => {
    setVisibleElements((prevState) => {
      const ammountToShow = prevState + visibleElementsIncrement;

      if (ammountToShow > landmarks.length - 1) {
        return landmarks.length;
      }

      return ammountToShow;
    });
  };

  const renderLandmark = useCallback((landmark: typeof landmarks[0], index: number) => {
    const { background, icon } = {
      [EAchievementType.INITIAL]: { background: '#015a44', icon: <Flag fontSize="large" htmlColor="white" /> },
      [EAchievementType.START]: { background: '#015a44', icon: <Star fontSize="large" htmlColor="white" /> },
      [EAchievementType.CERTIFICATE]: { background: '#fc8e27', icon: <CardMembership fontSize="large" htmlColor="white" /> },
      [EAchievementType.EDUCATION]: { background: '#2b51b8', icon: <School fontSize="large" htmlColor="white" /> },
      [EAchievementType.JOB]: { background: '#ff8902', icon: <Work fontSize="large" htmlColor="white" /> },
      [EAchievementType.PROJECT]: { background: '#ff3a04', icon: <PresentToAll fontSize="large" htmlColor="white" /> },
      [EAchievementType.PROMOTION]: { background: '#406794', icon: <Upgrade fontSize="large" htmlColor="white" /> },
      [EAchievementType.FREELANCE]: { background: '#005842', icon: <DeveloperMode fontSize="large" htmlColor="white" /> },
      [EAchievementType.MENTORING]: { background: '#005842', icon: <CastForEducation fontSize="large" htmlColor="white" /> },
      [EAchievementType.CONCLUSION]: { background: '#005842', icon: <WorkspacePremium fontSize="large" htmlColor="white" /> },
    }[landmark.type]!;
    return (
      <Fragment
        key={landmark.name}
      >
        <S.CustomTimelineElement
          $background={background}
          className="landmark"
          position={landmark.position}
          contentArrowStyle={{
            borderRightColor: background,
            border: 'none',
          }}
          date={intl.formatMessage({ id: landmark.date })}
          iconClassName="landmark-icon"
          dateClassName="landmark-date"
          icon={icon}
        >
          <Typography variant="h3"><FormattedMessage id={landmark.name} /></Typography>
          <Typography><FormattedMessage id={landmark.description} /></Typography>
        </S.CustomTimelineElement>
        {(index + 1 === visibleElements && visibleElements !== landmarks.length) && (
          <VerticalTimelineElement
            iconStyle={{
              borderRadius: '0',
              margin: 0,
              height: 0,
              padding: 0,
              width: 0,
            }}
            icon={(
              <S.ShowMore
                onClick={handleShowMore}
                container
                alignItems="center"
                justifyContent="center"
              >
                <S.ArrowDown
                  fontSize="large"
                />
              </S.ShowMore>
            )}
          />
        )}
      </Fragment>
    );
  }, [visibleElements]);

  return (
    <S.TimelineContainer id={EAppSections.MY_TIMELINE}>
      <Section
        onTitleShow={(typewriter) => {
          typewriter.typeString(intl.formatMessage({ id: 'home.mytimeline.title' })).start();
        }}
        icon={<Timeline htmlColor="white" fontSize="large" />}
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
            {[...Array(visibleElements)].map((_, index) => renderLandmark(landmarks[index], index))}
          </VerticalTimeline>
        </S.TimelineWrapper>
      </Section>
    </S.TimelineContainer>
  );
};

export default MyTimeline;
