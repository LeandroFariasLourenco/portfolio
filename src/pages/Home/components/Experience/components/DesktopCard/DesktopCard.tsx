import { Grid } from '@mui/material';
import { FormattedMessage } from 'react-intl';
import ExperienceCard from '../ExperienceCard/ExperienceCard';
import ExperienceDetails from '../ExperienceDetails/ExperienceDetails';

import * as S from './styled';
import { IDesktopCardProps } from './types';

const DesktopCard = ({
  LeftBorderComponent,
  RightBorderComponent,
  index,
  experience,
}: IDesktopCardProps) => (
  <Grid container flexDirection="row" flexWrap="nowrap" gap={10}>
    <S.ExperienceContainer item xs={6}>
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

    <S.ExperienceContainer item xs={6}>
      {RightBorderComponent}
      <ExperienceDetails
        experience={experience}
      />
    </S.ExperienceContainer>
  </Grid>
);

export default DesktopCard;