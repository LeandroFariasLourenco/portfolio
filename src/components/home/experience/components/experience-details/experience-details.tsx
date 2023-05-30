import { Card, Grid, Typography } from '@mui/material';
import { FormattedMessage, useIntl } from 'react-intl';
import { IExperienceDetailsProps } from './props.interface';

import styles from './experience-details.module.scss';

const ExperienceDetails = ({
  experience,
}: IExperienceDetailsProps) => {
  const intl = useIntl();
  return (
    <Card
      className={styles["experience-details-card"]}
      elevation={5}
    >
      <Grid container>
        <Grid className={styles["experience-details"]} item xs={12}>
          <h3><FormattedMessage id="home.experience.description" /></h3>

          {experience.description}
        </Grid>

      </Grid>
    </Card>
  );
};

export default ExperienceDetails;
