import {
  Business, CalendarMonth, HomeWork, Room,
} from '@mui/icons-material';
import { Card, Grid, Typography } from '@mui/material';
import { FormattedMessage, useIntl } from 'react-intl';
import { getBucketResource } from '@/shared/functions';

import { useCallback } from 'react';
import { IMobileCardProps } from './props.interface';

import styles from './mobile-card.module.scss';
import Image from 'next/image';

const MobileCard = ({
  index,
  experience,
}: IMobileCardProps) => {
  const intl = useIntl();

  const renderStackTechnology = useCallback((name: string) => (
    <li
      key={name}
      className={styles["mobile-card-stack-technology-list-item"]}
    >
      <Typography variant="subtitle2">{name}</Typography>
    </li>
  ), []);

  return (
    <Grid container flexDirection="row" flexWrap="nowrap">
      <Grid className={styles["mobile-card-container"]} container item xs={12}>
        {index === 0 && (
          <p className={styles["mobile-card-current-experience"]}>
            <FormattedMessage id="home.experience.current" />
          </p>
        )}
        <Card
          className={styles["mobile-card-experience-card"]}
          elevation={5}
        >
          <Grid container flexDirection="column">
            <Grid className={styles["mobile-card-experience-header"]} container flexDirection="row" flexWrap="nowrap" alignItems="center">
              <Image
                width={50}
                height={50}
                quality={50}
                className={styles["mobile-card-experience-icon"]}
                src={getBucketResource(experience.icon)}
                alt={experience.title}
              />
              <h5 className={styles["mobile-card-experience-title"]}><FormattedMessage id={experience.title} /></h5>
            </Grid>

            <Grid className={styles["mobile-card-experience-infos"]} container flex={1} gap={1}>
              <Grid container item flexWrap="nowrap">
                <Grid className={styles["mobile-card-experience-topic"]} alignItems="center" container flexWrap="nowrap">
                  <Business htmlColor="#fff" />
                  <p className={styles["mobile-card-experience-topic-text"]}><FormattedMessage id={experience.company.name} /></p>
                </Grid>

                <Grid className={styles["mobile-card-experience-topic"]} alignItems="center" container flexWrap="nowrap">
                  <CalendarMonth htmlColor="#fff" />
                  <p className={styles["mobile-card-experience-topic-text"]}><FormattedMessage id={experience.date} /></p>
                </Grid>
              </Grid>

              <Grid container item flexWrap="nowrap">
                <Grid className={styles["mobile-card-experience-topic"]} alignItems="center" container flexWrap="nowrap">
                  <Room htmlColor="#fff" />
                  <p className={styles["mobile-card-experience-topic-text"]}>{experience.location}</p>
                </Grid>

                <Grid className={styles["mobile-card-experience-topic"]} alignItems="center" container flexWrap="nowrap">
                  <HomeWork htmlColor="#fff" />
                  <p className={styles["mobile-card-experience-topic-text"]}><FormattedMessage id={experience.type} /></p>
                </Grid>
              </Grid>
            </Grid>

            <p className={styles["mobile-card-experience-text"]}>
              {experience.description}
            </p>

            <Grid container marginTop="10px">
              <Grid item container xs={8}>
                <ul>
                  {(intl.formatMessage({ id: experience.stack })).split(',').map(renderStackTechnology)}
                </ul>
              </Grid>
              <Grid item xs={4} container alignItems="flex-end" justifyContent="flex-end">
                <Image
                  className={styles["mobile-company-logo"]}
                  src={getBucketResource(`/${experience.company.logo}`)}
                  alt={experience.company.name}
                  width={104}
                  height={45}
                />
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};

export default MobileCard;
