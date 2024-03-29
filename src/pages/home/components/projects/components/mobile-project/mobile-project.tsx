import { GitHub, OpenInNew, RemoveRedEye } from '@mui/icons-material';
import { Grid, Typography } from '@mui/material';
import { useCallback } from 'react';
import SeeMore from 'src/core/components/see-more/see-more';
import { useIntl } from 'react-intl';
import { IMobileProjectProps } from './props.interface';

import * as S from './styled';
import { useProjectsContext } from '../../context/projects.context';

const MobileProject = ({
  project,
  swiperRef,
}: IMobileProjectProps) => {
  const intl = useIntl();
  const { mobile: { lightbox: { setOpen } } } = useProjectsContext();

  const renderProjectParagraph = useCallback((paragraph: string) => <Typography key={paragraph}>{paragraph}</Typography>, []);

  const renderProjectIcons = useCallback((icon: string, index: number) => (
    <S.ProjectTechnologyIcon
      key={`${project.title}-${index}`}
      src={icon}
    />
  ), []);

  return (
    <S.ProjectSlideCard>
      <S.ProjectSlideContainer>
        <Grid container item xs={12}>
          <Typography variant="h2">{project.title}</Typography>

          <SeeMore onToggle={(transitionNumber) => {
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
        <S.ProjectTechnologiesWrapper container justifyContent="flex-end" item xs={12}>
          {project.icons.map(renderProjectIcons)}
        </S.ProjectTechnologiesWrapper>

        <Grid container gap={1} justifyContent="space-between" marginTop={1}>
          <S.ActionButton
            onClick={() => {
              setOpen(true);
            }}
            endIcon={<RemoveRedEye color="primary" />}
            variant="outlined"
          >
            <Typography variant="h6" color="primary">{intl.formatMessage({ id: 'general.button.see' })}</Typography>
          </S.ActionButton>
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
