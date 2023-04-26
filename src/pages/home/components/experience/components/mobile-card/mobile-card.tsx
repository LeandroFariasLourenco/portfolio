import {
  Business, CalendarMonth, HomeWork, Room,
} from '@mui/icons-material';
import { Grid, Typography } from '@mui/material';
import { FormattedMessage, useIntl } from 'react-intl';
import { getBucketResource } from 'src/core/functions';

import { useCallback } from 'react';
import { IMobileCardProps } from './props.interface';
import * as S from './styled';

const MobileCard = ({
  index,
  experience,
  BorderComponent,
}: IMobileCardProps) => {
  const intl = useIntl();

  const renderStackTechnology = useCallback((name: string) => (
    <S.StackTechnologyListItem
      key={name}
      component="ul"
    >
      <Typography variant="subtitle2">{name}</Typography>
    </S.StackTechnologyListItem>
  ), []);

  return (
    <Grid container flexDirection="row" flexWrap="nowrap">
      <S.ExperienceContainer container item xs={12}>
        {BorderComponent}
        {index === 0 && (
          <S.CurrentExperience>
            <FormattedMessage id="home.experience.current" />
          </S.CurrentExperience>
        )}
        <S.ExperienceCard
          elevation={5}
        >
          <Grid container flexDirection="column">
            <S.ExperienceHeader container flexDirection="row" flexWrap="nowrap" alignItems="center">
              <S.ExperienceIcon src={getBucketResource(experience.icon)} alt={experience.title} />
              <S.ExperienceTitle variant="h5"><FormattedMessage id={experience.title} /></S.ExperienceTitle>
            </S.ExperienceHeader>

            <S.ExperienceCardContent container flex={1}>
              <Grid container item flexWrap="nowrap">
                <S.ExperienceTopic alignItems="center" container flexWrap="nowrap">
                  <Business htmlColor="#fff" />
                  <Typography variant="subtitle2"><FormattedMessage id={experience.company.name} /></Typography>
                </S.ExperienceTopic>

                <S.ExperienceTopic alignItems="center" container flexWrap="nowrap">
                  <CalendarMonth htmlColor="#fff" />
                  <Typography variant="subtitle2"><FormattedMessage id={experience.date} /></Typography>
                </S.ExperienceTopic>
              </Grid>

              <Grid container item flexWrap="nowrap">
                <S.ExperienceTopic alignItems="center" container flexWrap="nowrap">
                  <Room htmlColor="#fff" />
                  <Typography variant="subtitle2">{experience.location}</Typography>
                </S.ExperienceTopic>

                <S.ExperienceTopic alignItems="center" container flexWrap="nowrap">
                  <HomeWork htmlColor="#fff" />
                  <Typography variant="subtitle2"><FormattedMessage id={experience.type} /></Typography>
                </S.ExperienceTopic>
              </Grid>
            </S.ExperienceCardContent>

            <S.ExperienceTextDescription>
              {experience.description}
            </S.ExperienceTextDescription>

            <Grid container marginTop="10px">
              <Grid item container xs={8}>
                <S.StackTechnologyListContainer component="ul">
                  {(intl.formatMessage({ id: experience.stack })).split(',').map(renderStackTechnology)}
                </S.StackTechnologyListContainer>
              </Grid>
              <Grid item xs={4} container alignItems="flex-end" justifyContent="flex-end">
                <S.CompanyLogo src={getBucketResource(`/${experience.company.logo}`)} alt={experience.company.name} />
              </Grid>
            </Grid>
          </Grid>
        </S.ExperienceCard>
      </S.ExperienceContainer>
    </Grid>
  );
};

export default MobileCard;
