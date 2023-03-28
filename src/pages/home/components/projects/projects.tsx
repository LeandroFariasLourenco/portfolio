import { Code, DeveloperBoard } from '@mui/icons-material';
import { Typography } from '@mui/material';
import {
  useEffect, useMemo, useState, useCallback,
} from 'react';
import { FormattedMessage } from 'react-intl';
import Responsive from 'src/core/components/responsive/responsive';
import { APP } from 'src/core/constants';
import { getBucketResource } from 'src/core/functions';
import useResponsive from 'src/core/hooks/useResponsive/useResponsive';
import { Repository, Section } from 'src/core/layouts';
import { IGithubRepository } from 'src/core/models';
import { GithubService } from 'src/core/services';
import { Pagination } from 'swiper';
import { SwiperSlide, Swiper, SwiperProps } from 'swiper/react';
import { IProject } from './models/project.interface';

import * as S from './styled';

const Projects = () => {
  const [repositories, setRepositories] = useState<IGithubRepository[]>([]);
  const isMobile = useResponsive({});
  const swiperConfig: SwiperProps = useMemo(() => ({
    modules: [Pagination],
    pagination: {
      clickable: true,
    },
  }), []);

  const projects = useMemo(() => [
    { title: '2', description: '', background: getBucketResource('/projects/futawesome.png') },
    { title: '3', description: '', background: getBucketResource('/projects/snakegame.mp4') },
    { title: '4', description: '', background: getBucketResource('/projects/solar-system.png') },
    { title: '5', description: '', background: getBucketResource('/projects/be-the-hero.png') },
  ] as IProject[], []);

  const fetchRepositories = async () => {
    const response = await GithubService.getRepositories();
    setRepositories(response.sort((current, next) => {
      const currentDate = new Date(current.created_at);
      const nextDate = new Date(next.created_at);

      return nextDate.getTime() - currentDate.getTime();
    }));
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

  const renderRepository = useCallback((repository: IGithubRepository) => (
    <Repository
      key={repository.id}
      repository={repository}
    />
  ), [repositories]);

  return (
    <Section
      onTitleShow={(typewriter) => {
        typewriter.typeString('Meus projetos')
          .start();
      }}
      icon={<DeveloperBoard htmlColor="white" fontSize="large" />}
      gridStyle={{
        backgroundImage: `linear-gradient(rgba(28, 22, 48, 0.88), rgba(28, 22, 48,0.95)), url(${getBucketResource('/wallpapers/terminal.png')})`,
        paddingTop: 50,
        paddingBottom: 50,
      }}
    >
      <S.ProjectsContainer container>
        <S.RepositoriesWrapper item xs={12} md={3}>
          <S.RepositoryTitle container flexDirection="row" alignItems="center">
            <Code htmlColor="white" />
            <Typography variant="h4"><FormattedMessage id="home.projects.title" /></Typography>
          </S.RepositoryTitle>
          <Responsive
            breakpoint="md"
            aboveComponent={(
              <S.RepositoriesList container flexWrap="wrap">{repositories.map(renderRepository)}</S.RepositoriesList>
            )}
            belowComponent={(
              <S.RepositoriesList container flexWrap="nowrap" flexDirection="row">{repositories.map(renderRepository)}</S.RepositoriesList>
            )}
          />

        </S.RepositoriesWrapper>
        <S.ProjectsTabs
          item
          xs={12}
          md={9}
          container
          alignItems="center"
          flexDirection="column"
        >
          <Swiper
            style={{
              height: '100%',
              width: '100%',
            }}
            {...swiperConfig}
          >
            {projects.map((project) => (
              <SwiperSlide
                style={{ position: 'relative' }}
                key={project.title}
              >
                <S.ProjectBackgroundVideo src={project.background} autoPlay loop muted />
                <S.ProjectBackgroundImage src={project.background} />
                <S.ProjectSlideContainer>
                  <S.ProjectSlideOverlay
                    container
                    alignItems="flex-end"
                    justifyContent="flex-end"
                    flexDirection="column"
                  >
                    <Typography variant="h3"><FormattedMessage id="home.projects.description.title" /></Typography>

                    <Typography><FormattedMessage id="home.projects.description.content1" /></Typography>
                    <Typography><FormattedMessage id="home.projects.description.content2" /></Typography>
                  </S.ProjectSlideOverlay>
                </S.ProjectSlideContainer>
              </SwiperSlide>
            ))}
          </Swiper>
        </S.ProjectsTabs>
      </S.ProjectsContainer>
    </Section>
  );
};

export default Projects;
