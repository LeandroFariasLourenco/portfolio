import { Grid } from '@mui/material';
import { FormattedMessage } from 'react-intl';
import ExperienceCard from '../experience-card/experience-card';
import ExperienceDetails from '../experience-details/experience-details';

import { IDesktopCardProps } from './props.interface';

import './desktop-card.scss';

const DesktopCard = ({
  LeftBorderComponent,
  RightBorderComponent,
  index,
  experience,
}: IDesktopCardProps) => (
  <Grid container flexDirection="row" justifyContent="space-between" flexWrap="nowrap" gap={10}>
    <Grid className="desktop-card-container" item xs={5}>
      {index === 0 && (
        <p className="desktop-card-experience"><FormattedMessage id="home.experience.current" /></p>
      )}
      {LeftBorderComponent}
      <ExperienceCard
        experience={experience}
      />
    </Grid>

    <Grid className="desktop-card-container" item xs={5}>
      {RightBorderComponent}
      <ExperienceDetails
        experience={experience}
      />
    </Grid>
  </Grid>
);

export default DesktopCard;
