import { CalendarMonth, LocationOn, School } from '@mui/icons-material';
import { Grid, Typography } from '@mui/material';
import { useRef } from 'react';

import { FormattedMessage } from 'react-intl';

import { Responsive, SeeMore } from '@/shared/components';
import { ICourseProps } from './props.interface';

import './course.scss';

const Course = ({
  course: card,
  index,
}: ICourseProps) => {
  const cardWrapperRef = useRef<HTMLDivElement>();

  return (
    <Grid
      className="course-wrapper"
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
        className="course-title-container"
        container
        justifyContent="center"
      >
        <img className="course-logo" src={card.logo} />
        <h5 className="course-title"><FormattedMessage id={card.title} /></h5>
      </Grid>

      <div className="course-container">
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

      <div className="course-container">
        <div className="course-row">
          <CalendarMonth htmlColor="white" />
          <Typography>{card.duration}</Typography>
        </div>
        <div className="course-row">
          <LocationOn htmlColor="white" />
          <Typography><FormattedMessage id={card.location} /></Typography>
        </div>
        <div className="course-row">
          <School htmlColor="white" />
          <Typography><FormattedMessage id={card.type} /></Typography>
        </div>

      </div>
    </Grid>
  );
};

export default Course;
