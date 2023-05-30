import { Grid } from '@mui/material';
import { FormattedMessage } from 'react-intl';
import ExperienceCard from '../experience-card/experience-card';
import ExperienceDetails from '../experience-details/experience-details';

import { IDesktopCardProps } from './props.interface';

import styles from './desktop-card.module.scss';

const DesktopCard = ({
  index,
  experience,
}: IDesktopCardProps) => (
  <Grid container flexDirection="row" justifyContent="space-between" flexWrap="nowrap" gap={10}>
    <Grid className={styles["desktop-card-container"]} item xs={5}>
      {index === 0 && (
        <p className={styles["desktop-card-experience"]}><FormattedMessage id="home.experience.current" /></p>
      )}
      <ExperienceCard
        experience={experience}
      />
    </Grid>

    <Grid className={styles["desktop-card-container"]} item xs={5}>
      <ExperienceDetails
        experience={experience}
      />
    </Grid>
  </Grid>
);

export default DesktopCard;
