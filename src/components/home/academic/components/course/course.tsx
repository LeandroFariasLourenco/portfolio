import { CalendarMonth, LocationOn, School } from '@mui/icons-material';
import { Grid, Typography } from '@mui/material';
import { useRef } from 'react';

import { FormattedMessage } from 'react-intl';

import { Responsive, SeeMore } from '@/shared/components';
import { ICourseProps } from './props.interface';

import styles from './course.module.scss';

const Course = ({
  course: card,
  index,
}: ICourseProps) => {
  const cardWrapperRef = useRef<HTMLDivElement>();

  return (
    <Grid
      className={styles["course-wrapper"]}
      item
      container
      flexWrap="nowrap"
      flexDirection="column"
      justifyContent="space-between"
      xs={12}
      ref={(ref) => {
        cardWrapperRef.current = ref as HTMLDivElement;
      }}
      style={{
        animationDuration: `${300 + 100 * index}ms`,
      }}
    >
      <Grid
        className={styles["course-title-container"]}
        container
        justifyContent="center"
      >
        <img className={styles["course-logo"]} src={card.logo} />
        <h5 className={styles["course-title"]}><FormattedMessage id={card.title} /></h5>
      </Grid>

      <div className={styles["course-container"]}>
        <Responsive
          breakpoint="md"
          belowComponent={(
            <SeeMore>
              {card.description}
            </SeeMore>
        )}
          aboveComponent={card.description}
        />
      </div>

      <div className={styles["course-container"]}>
        <div className={styles["course-row"]}>
          <CalendarMonth htmlColor="white" />
          <Typography>{card.duration}</Typography>
        </div>
        <div className={styles["course-row"]}>
          <LocationOn htmlColor="white" />
          <Typography><FormattedMessage id={card.location} /></Typography>
        </div>
        <div className={styles["course-row"]}>
          <School htmlColor="white" />
          <Typography><FormattedMessage id={card.type} /></Typography>
        </div>

      </div>
    </Grid>
  );
};

export default Course;
