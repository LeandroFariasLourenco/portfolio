import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Grid, IconButton, Typography } from '@mui/material';
import cx from 'classnames';
import { useCallback, useMemo, useState } from 'react';
import SeeMore from 'src/core/components/see-more/see-more';
import { useLinkTarget } from 'src/core/hooks';
import { GithubIcon } from 'src/core/layouts/footer/styled';
import { IDesktopProjectProps } from './props.interface';
import * as S from './styled';

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
        <S.ProjectBackgroundVideo src={project.image} autoPlay muted loop />
      ) : <S.ProjectBackgroundImage src={project.image} />}
      <S.ProjectSlideContainer>
        <S.ProjectSlideOverlay
          className={cx({
            closed: previewing,
          })}
          container
          alignItems="flex-end"
        >
          <S.Actions>
            <a target={linkTarget} href={project.link} rel="noreferrer">
              <GithubIcon fontSize="small" htmlColor="#fff" />
            </a>
            <IconButton onClick={() => setPreviewing((prevState) => !prevState)}>
              {previewing ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </S.Actions>
          <S.ProjectTechnologiesWrapper container item xs={6}>
            {project.icons.map((icon, index) => (
              <S.ProjectTechnologyIcon
                key={`${project.title}-${index}`}
                src={icon}
              />
            ))}
          </S.ProjectTechnologiesWrapper>

          <Grid container item xs={6}>
            <S.ProjectDescriptionCard>
              <Typography variant="h3">{project.title}</Typography>
              <SeeMore>
                {project.paragraphs.map(renderProjectParagraph)}
              </SeeMore>
            </S.ProjectDescriptionCard>
          </Grid>
        </S.ProjectSlideOverlay>
      </S.ProjectSlideContainer>
    </>
  );
};

export default DesktopProject;
