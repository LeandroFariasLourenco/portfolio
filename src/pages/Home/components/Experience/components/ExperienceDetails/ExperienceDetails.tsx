import { Grid, Typography } from '@mui/material';
import { FormattedMessage, useIntl } from 'react-intl';
import { IExperienceDetailsProps } from './props';

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
      <Grid container gap={10}>
        <S.ExperienceDescriptionContainer item xs={12}>
          <Typography variant="h3"><FormattedMessage id="home.experience.description" /></Typography>

          <Typography>
            <FormattedMessage id={experience.description} />
          </Typography>
        </S.ExperienceDescriptionContainer>

        <S.ExperienceStackContainer item xs={12}>
          <Typography variant="h3"><FormattedMessage id="home.experience.stack" /></Typography>

          <S.StackTechnologyListContainer component="ul">
            {(intl.messages[experience.stack] as string).split(',').map((name: string) => (
              <S.StackTechnologyListItem
                key={name}
                component="ul"
              >
                <Typography>{name}</Typography>
              </S.StackTechnologyListItem>
            ))}
          </S.StackTechnologyListContainer>
        </S.ExperienceStackContainer>
      </Grid>
    </S.ExperienceCard>
  );
};

export default ExperienceDetails;
