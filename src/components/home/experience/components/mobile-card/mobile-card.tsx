import {
  Business, CalendarMonth, HomeWork, Room,
} from '@mui/icons-material';
import { Card, Grid, Typography } from '@mui/material';
import { FormattedMessage, useIntl } from 'react-intl';
import { getBucketResource } from '@/shared/functions';

import { useCallback } from 'react';
import { IMobileCardProps } from './props.interface';

import './mobile-card.scss';

const MobileCard = ({
  index,
  experience,
}: IMobileCardProps) => {
  const intl = useIntl();

  const renderStackTechnology = useCallback((name: string) => (
    <li
      key={name}
      className="mobile-card-stack-technology-list-item"
    >
      <Typography variant="subtitle2">{name}</Typography>
    </li>
  ), []);

  return (
    <Grid container flexDirection="row" flexWrap="nowrap">
      <Grid className="mobile-card-container" container item xs={12}>
        {index === 0 && (
          <p className="mobile-card-current-experience">
            <FormattedMessage id="home.experience.current" />
          </p>
        )}
        <Card
          className="mobile-card-experience-card"
          elevation={5}
        >
          <Grid container flexDirection="column">
            <Grid className="mobile-card-experience-header" container flexDirection="row" flexWrap="nowrap" alignItems="center">
              <img className="mobile-card-experience-icon" src={getBucketResource(experience.icon)} alt={experience.title} />
              <h5 className="mobile-card-experience-title"><FormattedMessage id={experience.title} /></h5>
            </Grid>

            <Grid className="mobile-card-experience-card" container flex={1}>
              <Grid container item flexWrap="nowrap">
                <Grid className="mobile-card-experience-topic" alignItems="center" container flexWrap="nowrap">
                  <Business htmlColor="#fff" />
                  <Typography variant="subtitle2"><FormattedMessage id={experience.company.name} /></Typography>
                </Grid>

                <Grid className="mobile-card-experience-topic" alignItems="center" container flexWrap="nowrap">
                  <CalendarMonth htmlColor="#fff" />
                  <Typography variant="subtitle2"><FormattedMessage id={experience.date} /></Typography>
                </Grid>
              </Grid>

              <Grid container item flexWrap="nowrap">
                <Grid className="mobile-card-experience-topic" alignItems="center" container flexWrap="nowrap">
                  <Room htmlColor="#fff" />
                  <Typography variant="subtitle2">{experience.location}</Typography>
                </Grid>

                <Grid className="mobile-card-experience-topic" alignItems="center" container flexWrap="nowrap">
                  <HomeWork htmlColor="#fff" />
                  <Typography variant="subtitle2"><FormattedMessage id={experience.type} /></Typography>
                </Grid>
              </Grid>
            </Grid>

            <p className="mobile-card-experience-text">
              {experience.description}
            </p>

            <Grid container marginTop="10px">
              <Grid item container xs={8}>
                <ul>
                  {(intl.formatMessage({ id: experience.stack })).split(',').map(renderStackTechnology)}
                </ul>
              </Grid>
              <Grid item xs={4} container alignItems="flex-end" justifyContent="flex-end">
                <img className="mobile-company-logo" src={getBucketResource(`/${experience.company.logo}`)} alt={experience.company.name} />
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};

export default MobileCard;
