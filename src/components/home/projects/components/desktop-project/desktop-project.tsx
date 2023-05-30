import { GitHub, Visibility, VisibilityOff } from '@mui/icons-material';
import { Card, Grid, IconButton, Typography } from '@mui/material';
import cx from 'classnames';
import { useCallback, useMemo, useState } from 'react';
import SeeMore from '@/shared/components/see-more/see-more';
import { useLinkTarget } from '@/shared/hooks';
import { IDesktopProjectProps } from './props.interface';

import styles from './desktop-project.module.scss';

const DesktopProject = ({
  project,
}: IDesktopProjectProps) => {
  const [previewing, setPreviewing] = useState<boolean>(false);
  const renderProjectParagraph = useCallback((paragraph: string) => <Typography key={paragraph}>{paragraph}</Typography>, []);
  const isVideoBackground = useMemo(() => /\.mp4$/.test(project.image), []);
  const linkTarget = useLinkTarget();

  return (
    <>
      {isVideoBackground ? (
        <video className={styles["desktop-project-background-video"]} src={project.image} autoPlay muted loop />
      ) : <img className={styles["desktop-project-background-image"]} src={project.image} />}
      <Grid>
        <Grid
          className={`desktop-project-slide-overlay ${cx({ closed: previewing })}`}
          container
          alignItems="flex-end"
        >
          <Grid className={styles["desktop-project-actions"]}>
            <a target={linkTarget} href={project.link} rel="noreferrer">
              <GitHub fontSize="small" htmlColor="#fff" />
            </a>
            <IconButton onClick={() => setPreviewing((prevState) => !prevState)}>
              {previewing ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </Grid>
          <Grid className={styles["desktop-project-technology-wrapper"]} container item xs={6}>
            {project.icons.map((icon, index) => (
              <img
                className={styles["desktop-project-technology-icon"]}
                key={`${project.title}-${index}`}
                src={icon}
              />
            ))}
          </Grid>

          <Grid container item xs={6}>
            <Card className={styles["desktop-project-description-card"]}>
              <h3>{project.title}</h3>
              <SeeMore>
                {project.paragraphs.map(renderProjectParagraph)}
              </SeeMore>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default DesktopProject;
