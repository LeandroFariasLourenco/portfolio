import { CalendarMonth, LocationOn, School } from '@mui/icons-material';
import { Grid, Typography } from '@mui/material';
import { useRef } from 'react';

import { FormattedMessage } from 'react-intl';
import { ICardProps } from './props.interface';

import './extracurricular.scss';

const Extracurricular = ({
  extracurricular: card,
  index,
}: ICardProps) => {
  const cardWrapperRef = useRef<HTMLDivElement>();

  return (
    <Grid
      className="extracurricular-card-wrapper"
      item
      container
      flexWrap="nowrap"
      flexDirection="column"
      justifyContent="space-between"
      ref={(ref) => {
        cardWrapperRef.current = ref as HTMLDivElement;
      }}
      style={{
        animationDuration: `${300 + 100 * index}ms`,
      }}
    >
      <Grid
        className="extracurricular-card-title-container"
        container
        justifyContent="center"
      >
        <img className="extracurricular-card-logo" src={card.logo} />
        <Typography variant="h5" fontSize="20px" textAlign="center"><FormattedMessage id={card.title} /></Typography>
      </Grid>

      <div className="extracurricular-card-container">
        <Typography><FormattedMessage id={card.description} /></Typography>
      </div>

      <div className="extracurricular-card-container">
        <div className="extracurricular-card-row">
          <CalendarMonth htmlColor="white" />
          <Typography>{card.duration}</Typography>
        </div>
        <div className="extracurricular-card-row">
          <LocationOn htmlColor="white" />
          <Typography><FormattedMessage id={card.location} /></Typography>
        </div>
        <div className="extracurricular-card-row">
          <School htmlColor="white" />
          <Typography><FormattedMessage id={card.type} /></Typography>
        </div>

      </div>
    </Grid>
  );
};

export default Extracurricular;
