import {
  Business, CalendarMonth, HomeWork, Room,
} from '@mui/icons-material';
import { Grid, Typography } from '@mui/material';
import { FormattedMessage } from 'react-intl';
import { APP } from 'src/core/constants';
import { ExperienceCardProps } from './props';

import * as S from './styled';

const ExperienceCard = ({
  experience,
}: ExperienceCardProps) => (
  <S.ExperienceCard
    elevation={5}
    $direction="left"
  >
    <Grid container flexDirection="column">
      <S.ExperienceHeader container flexDirection="row" flexWrap="nowrap" alignItems="center">
        <S.ExperienceIcon src={`${APP.aws.assets}${experience.icon}`} alt={experience.title} />
        <S.ExperienceTitle variant="h3"><FormattedMessage id={experience.title} /></S.ExperienceTitle>
      </S.ExperienceHeader>

      <S.ExperienceCardContent container flex={1}>
        <S.ExperienceTopic container flexWrap="nowrap">
          <Business htmlColor="#fff" />
          <Typography variant="subtitle1"><FormattedMessage id={experience.company.name} /></Typography>
        </S.ExperienceTopic>

        <S.ExperienceTopic container flexWrap="nowrap">
          <CalendarMonth htmlColor="#fff" />
          <Typography variant="subtitle1"><FormattedMessage id={experience.date} /></Typography>
        </S.ExperienceTopic>

        <S.ExperienceTopic container flexWrap="nowrap">
          <Room htmlColor="#fff" />
          <Typography variant="subtitle1">{experience.location}</Typography>
        </S.ExperienceTopic>

        <S.ExperienceTopic container flexWrap="nowrap">
          <HomeWork htmlColor="#fff" />
          <Typography variant="subtitle1"><FormattedMessage id={experience.type} /></Typography>
        </S.ExperienceTopic>
      </S.ExperienceCardContent>

      <Grid container>
        <Grid item xs={6}>
          <iframe
            width={200}
            height={200}
            title={experience.company.name}
            src={`https://maps.google.com/maps?q=${experience.company.query}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
            frameBorder={0}
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
          />
        </Grid>

        <Grid item xs={6} container alignItems="flex-end" justifyContent="flex-end">
          <S.CompanyLogo src={`${APP.aws.assets}/${experience.company.logo}`} alt={experience.company.name} />
        </Grid>
      </Grid>
    </Grid>
  </S.ExperienceCard>
);

export default ExperienceCard;
