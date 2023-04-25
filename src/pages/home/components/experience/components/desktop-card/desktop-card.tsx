import { Grid } from '@mui/material';
import { FormattedMessage } from 'react-intl';
import ExperienceCard from '../experience-card/experience-card';
import ExperienceDetails from '../experience-details/experience-details';

import { IDesktopCardProps } from './props.interface';
import * as S from './styled';

const DesktopCard = ({
  LeftBorderComponent,
  RightBorderComponent,
  index,
  experience,
}: IDesktopCardProps) => (
  <Grid container flexDirection="row" justifyContent="space-between" flexWrap="nowrap" gap={10}>
    <S.ExperienceContainer item xs={5}>
      {index === 0 && (
        <S.CurrentExperience>
          <FormattedMessage id="home.experience.current" />
        </S.CurrentExperience>
      )}
      {LeftBorderComponent}
      <ExperienceCard
        experience={experience}
      />
    </S.ExperienceContainer>

    <S.ExperienceContainer item xs={5}>
      {RightBorderComponent}
      <ExperienceDetails
        experience={experience}
      />
    </S.ExperienceContainer>
  </Grid>
);

export default DesktopCard;
