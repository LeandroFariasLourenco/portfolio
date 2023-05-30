import {
  Business, CalendarMonth, HomeWork, Room,
} from '@mui/icons-material';
import { Card, Grid, Typography } from '@mui/material';
import { FormattedMessage, useIntl } from 'react-intl';
import { getBucketResource } from '@/shared/functions';
import { ExperienceCardProps } from './props.interface';

import { useCallback } from 'react';

import styles from './experience-card.module.scss';

const ExperienceCard = ({
  experience,
}: ExperienceCardProps) => {
  const intl = useIntl();

  const renderListItem = useCallback((name: string) => (
    <li
      className={styles["experience-card-list-item"]}
      key={name}
    >
      <p>{name}</p>
    </li>
  ), []);

  return (
    <Card
      className={styles["experience-card"]}
      elevation={5}
    >
      <Grid container flexDirection="column">
        <Grid className={styles["experience-card-header"]} container flexDirection="row" flexWrap="nowrap" alignItems="center">
          <img className={styles["experience-card-icon"]} src={getBucketResource(experience.icon)} alt={experience.title} />
          <h3 className={styles["experience-card-title"]}><FormattedMessage id={experience.title} /></h3>
        </Grid>

        <Grid className={styles["experience-card-container"]} container flex={1}>
          <Grid className={styles["experience-card-topic"]} container flexWrap="nowrap">
            <Business htmlColor="#fff" />
            <Typography variant="subtitle1"><FormattedMessage id={experience.company.name} /></Typography>
          </Grid>

          <Grid className={styles["experience-card-topic"]} container flexWrap="nowrap">
            <CalendarMonth htmlColor="#fff" />
            <Typography variant="subtitle1"><FormattedMessage id={experience.date} /></Typography>
          </Grid>

          <Grid className={styles["experience-card-topic"]} container flexWrap="nowrap">
            <Room htmlColor="#fff" />
            <Typography variant="subtitle1">{experience.location}</Typography>
          </Grid>

          <Grid className={styles["experience-card-topic"]} container flexWrap="nowrap">
            <HomeWork htmlColor="#fff" />
            <Typography variant="subtitle1"><FormattedMessage id={experience.type} /></Typography>
          </Grid>
        </Grid>

        <Grid className={styles["experience-card-stack"]} item xs={12}>
          <h3><FormattedMessage id="home.experience.stack" /></h3>

          <ul className={styles["experience-card-list"]}>
            {intl.formatMessage({ id: experience.stack }).split(',').map(renderListItem)}
          </ul>
        </Grid>
        <Grid item xs={12} container alignItems="flex-end" justifyContent="flex-end">
          <img className={styles["experience-card-company-logo"]} src={getBucketResource(`/${experience.company.logo}`)} alt={experience.company.name} />
        </Grid>
      </Grid>
    </Card>
  );
};

export default ExperienceCard;
