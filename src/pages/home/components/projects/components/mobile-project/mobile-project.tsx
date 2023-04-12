import cx from 'classnames';
import { Typography, Grid } from '@mui/material';
import SeeMore from 'src/core/components/see-more/see-more';
import { GitHub, OpenInNew, RemoveRedEye } from '@mui/icons-material';
import { useCallback, useState } from 'react';
import { IMobileProjectProps } from './props.interface';

import * as S from './styled';

const MobileProject = ({
  project,
}: IMobileProjectProps) => {
  const [isPreviewOpen, setIsPreviewOpen] = useState<boolean>(false);

  const renderProjectParagraph = useCallback((paragraph: string) => <Typography key={paragraph}>{paragraph}</Typography>, []);

  const openPreview = () => {
    document.body.classList.add('no-scroll');
    setIsPreviewOpen(true);
  };

  const closePreview = () => {
    document.body.classList.remove('no-scroll');
    setIsPreviewOpen(false);
  };

  return (
    <S.ProjectSlideCard>
      <S.ProjectPreview className={cx({
        'is--open': isPreviewOpen,
      })}
      >
        <S.ProjectPreviewImage src={project.background} />
      </S.ProjectPreview>
      <S.ProjectSlideContainer>
        <Grid container xs={12}>
          <Typography variant="h2">{project.title}</Typography>

          <SeeMore>
            {project.paragraphs.map(renderProjectParagraph)}
          </SeeMore>
        </Grid>
        <S.ProjectTechnologiesWrapper container justifyContent="flex-end" xs={12}>
          {project.icons.map((icon, index) => (
            <S.ProjectTechnologyIcon
              key={`${project.title}-${index}`}
              src={icon}
            />
          ))}
        </S.ProjectTechnologiesWrapper>

        <Grid container gap={1} justifyContent="space-between" marginTop={1}>
          {project.canPreviewInMobile ? (
            <S.ActionButton
              onClick={openPreview}
              endIcon={<RemoveRedEye color="primary" />}
              variant="outlined"
            >
              <Typography variant="h6" color="primary">Visualizar</Typography>
            </S.ActionButton>
          ) : null}
          <S.ActionLink href={project.link}>
            <S.ActionButton
              variant="outlined"
              color="secondary"
              endIcon={<OpenInNew color="secondary" fontSize="small" />}
              startIcon={<GitHub htmlColor="white" fontSize="large" />}
            >
              <Typography variant="h6" color="secondary">Github</Typography>
            </S.ActionButton>
          </S.ActionLink>
        </Grid>
      </S.ProjectSlideContainer>
    </S.ProjectSlideCard>
  );
};

export default MobileProject;
