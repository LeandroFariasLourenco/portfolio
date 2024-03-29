import {
  Business, CalendarMonth, HomeWork, Room,
} from '@mui/icons-material';
import { Grid, Typography } from '@mui/material';
import { FormattedMessage, useIntl } from 'react-intl';
import { getBucketResource } from 'src/core/functions';
import { ExperienceCardProps } from './props.interface';

import * as S from './styled';

const ExperienceCard = ({
  experience,
}: ExperienceCardProps) => {
  const intl = useIntl();

  return (
    <S.ExperienceCard
      elevation={5}
      $direction="left"
    >
      <Grid container flexDirection="column">
        <S.ExperienceHeader container flexDirection="row" flexWrap="nowrap" alignItems="center">
          <S.ExperienceIcon src={getBucketResource(experience.icon)} alt={experience.title} />
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

        <S.ExperienceStackContainer item xs={12}>
          <Typography variant="h3"><FormattedMessage id="home.experience.stack" /></Typography>

          <S.StackTechnologyListContainer component="ul">
            {intl.formatMessage({ id: experience.stack }).split(',').map((name: string) => (
              <S.StackTechnologyListItem
                key={name}
                component="ul"
              >
                <Typography>{name}</Typography>
              </S.StackTechnologyListItem>
            ))}
          </S.StackTechnologyListContainer>
        </S.ExperienceStackContainer>
        <Grid item xs={12} container alignItems="flex-end" justifyContent="flex-end">
          <S.CompanyLogo src={getBucketResource(`/${experience.company.logo}`)} alt={experience.company.name} />
        </Grid>
      </Grid>
    </S.ExperienceCard>
  );
};

export default ExperienceCard;
