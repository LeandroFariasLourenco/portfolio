import { Card, Grid, Typography } from '@mui/material';
import { FormattedMessage, useIntl } from 'react-intl';
import { IExperienceDetailsProps } from './props.interface';

import './experience-details.scss';

const ExperienceDetails = ({
  experience,
}: IExperienceDetailsProps) => {
  const intl = useIntl();
  return (
    <Card
      className="experience-details-card"
      elevation={5}
    >
      <Grid container>
        <Grid className="experience-details" item xs={12}>
          <h3><FormattedMessage id="home.experience.description" /></h3>

          {experience.description}
        </Grid>

      </Grid>
    </Card>
  );
};

export default ExperienceDetails;
