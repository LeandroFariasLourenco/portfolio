import { GitHub, OpenInNew, RemoveRedEye } from '@mui/icons-material';
import { Grid, Typography } from '@mui/material';
import { useCallback } from 'react';
import SeeMore from '@/shared/components/see-more/see-more';
import { useIntl } from 'react-intl';
import { IMobileProjectProps } from './props.interface';

import { useProjectsContext } from '../../context/projects.context';

import styles from './mobile-project.module.scss';
import Image from 'next/image';

const MobileProject = ({
  project,
  swiperRef,
}: IMobileProjectProps) => {
  const intl = useIntl();
  const { mobile: { lightbox: { setOpen } } } = useProjectsContext();

  const renderProjectParagraph = useCallback((paragraph: string) => <Typography key={paragraph}>{paragraph}</Typography>, []);

  const renderProjectIcons = useCallback((icon: string, index: number) => (
    <Image
      key={`${project.title}-${index}`}
      src={icon}
      className={styles["mobile-project-icon"]}
      alt={icon}
      quality={45}
      width={40}
      height={40}
    />
  ), []);

  return (
    <div className={styles["mobile-project-slide-card"]}>
      <div className={styles["mobile-project-slide-container"]}>
        <Grid container item xs={12}>
          <h2>{project.title}</h2>

          <SeeMore
            onToggle={(transitionNumber) => {
              const interval = setInterval(() => {
                swiperRef!.updateAutoHeight();
              });

              setTimeout(() => {
                clearInterval(interval);
              }, transitionNumber);
            }}
          >
            {project.paragraphs.map(renderProjectParagraph)}
          </SeeMore>
        </Grid>
        <Grid className={styles["mobile-projects-wrapper"]} container justifyContent="flex-end" item xs={12}>
          {project.icons.map(renderProjectIcons)}
        </Grid>

        <Grid container gap={1} justifyContent="space-between" marginTop={1}>
          <button
            className={`${styles["mobile-project-action-button"]} outlined`}
            onClick={() => {
              setOpen(true);
            }}
          >
            <Typography variant="h6" color="primary">{intl.formatMessage({ id: 'general.button.see' })}</Typography>
            <RemoveRedEye color="primary" fontSize="small" />
          </button>
          <a className={styles["mobile-project-action-link"]} href={project.link}>
            <button
              className={styles["mobile-project-action-button"]}
            >
              <GitHub htmlColor="white" fontSize="small" />
              <Typography variant="h6" color="secondary">Github</Typography>
              <OpenInNew color="secondary" fontSize="small" />
            </button>
          </a>
        </Grid>
      </div>
    </div>
  );
};

export default MobileProject;
