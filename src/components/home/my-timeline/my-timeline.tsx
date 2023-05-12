import {
  ArrowDownward,
  CardMembership,
  CastForEducation,
  DeveloperMode,
  Flag,
  PresentToAll,
  School,
  Star,
  Timeline,
  Upgrade,
  Work,
  WorkspacePremium
} from '@mui/icons-material';
import { FormattedMessage, useIntl } from 'react-intl';

import { Section } from '@/shared/layouts';

import { EAppSections } from '@/shared/models';
import {
  Fragment, useCallback, useMemo, useState,
} from 'react';
import { EAchievementType } from './models/achievement-type.enum';
import landmarks from './resources/landmarks.json';

import styles from './my-timeline.module.scss';

const MyTimeline = () => {
  const intl = useIntl();
  const visibleElementsIncrement = useMemo(() => 2, []);
  const [visibleElements, setVisibleElements] = useState<number>(visibleElementsIncrement);

  const handleShowMore = () => {
    setVisibleElements((prevState) => {
      const ammountToShow = prevState + visibleElementsIncrement;

      requestAnimationFrame(() => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      });

      if (ammountToShow > landmarks.length - 1) {
        return landmarks.length;
      }

      return ammountToShow;
    });
  };

  const renderLandmark = useCallback((landmark: typeof landmarks[0], index: number) => {
    const { background, icon } = {
      [EAchievementType.INITIAL]: { background: '#0a5f15', icon: <Flag htmlColor="white" /> },
      [EAchievementType.START]: { background: '#25967a', icon: <Star htmlColor="white" /> },
      [EAchievementType.CERTIFICATE]: { background: '#fc8e27', icon: <CardMembership htmlColor="white" /> },
      [EAchievementType.EDUCATION]: { background: '#2b51b8', icon: <School htmlColor="white" /> },
      [EAchievementType.JOB]: { background: '#ff8902', icon: <Work htmlColor="white" /> },
      [EAchievementType.PROJECT]: { background: '#ff3a04', icon: <PresentToAll htmlColor="white" /> },
      [EAchievementType.PROMOTION]: { background: '#406794', icon: <Upgrade htmlColor="white" /> },
      [EAchievementType.FREELANCE]: { background: '#211f8d', icon: <DeveloperMode htmlColor="white" /> },
      [EAchievementType.MENTORING]: { background: '#5e0d94', icon: <CastForEducation htmlColor="white" /> },
      [EAchievementType.CONCLUSION]: { background: '#0c55c4', icon: <WorkspacePremium htmlColor="white" /> },
    }[landmark.type]!;
    return (
      <Fragment
        key={landmark.name}
      >
        <div className={styles[`my-timeline-row-${landmark.position}`]}>
          <i className={styles["my-timeline-row-card-icon"]} style={{ background, boxShadow: `0 0 6px ${background}` }}>{icon}</i>

          <div className={styles['my-timeline-row-card']} style={{ [`margin-${landmark.position}`]: -20, boxShadow: `0 0 3px ${background}` }}>
            <div className={styles['my-timeline-row-card-details']} >
              <h3><FormattedMessage id={landmark.name} /></h3>
              <h3
                className={styles['my-timeline-row-card-date']}
                style={{ textShadow: `${background} 0 0 5px`, [landmark.position === 'right' ? 'left' : 'right']: -285 }}>
                  {intl.formatMessage({ id: landmark.date })}
              </h3>
            </div>
          <p><FormattedMessage id={landmark.description} /></p>
        </div>
      </div>
        {
      (index + 1 === visibleElements && visibleElements !== landmarks.length) && (
        <i className={styles['my-timeline-show-more']} onClick={handleShowMore}>
          <ArrowDownward
            className={styles['my-timeline-arrow-down']}
            fontSize="small"
          />
        </i>
      )
    }
      </Fragment >
    );
  }, [visibleElements]);

return (
  <div className={styles['my-timeline-container']} id={EAppSections.MY_TIMELINE}>
    <Section
      onTitleShow={(typewriter) => {
        typewriter.typeString(intl.formatMessage({ id: 'home.mytimeline.title' })).start();
      }}
      icon={<Timeline htmlColor="white" fontSize="large" />}
    >
      <div className={styles['my-timeline-timeline-wrapper']}>
        <div className={styles['my-timeline-center-line']} />
        {[...Array(visibleElements)].map((_, index) => renderLandmark(landmarks[index], index))}
      </div>
    </Section>
  </div>
);
};

export default MyTimeline;
