import { Grid, Typography } from '@mui/material';
import { FormattedMessage, useIntl } from 'react-intl';
import { IExperienceDetailsProps } from './props.interface';

import * as S from './styled';

const ExperienceDetails = ({
  experience,
}: IExperienceDetailsProps) => {
  const intl = useIntl();
  return (
    <S.ExperienceCard
      elevation={5}
      $direction="right"
    >
      <Grid container>
        <S.ExperienceDescriptionContainer item xs={12}>
          <Typography variant="h3"><FormattedMessage id="home.experience.description" /></Typography>

          {experience.description}
        </S.ExperienceDescriptionContainer>

      </Grid>
    </S.ExperienceCard>
  );
};

export default ExperienceDetails;
