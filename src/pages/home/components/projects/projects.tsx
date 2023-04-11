import {
  Code, DeveloperBoard, GitHub, OpenInNew, RemoveRedEye,
} from '@mui/icons-material';
import { Button, Grid, Typography } from '@mui/material';
import {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { FormattedMessage } from 'react-intl';
import SwipeRightAnimation from 'src/assets/animations/swipe-right.json';
import Responsive from 'src/core/components/responsive/responsive';
import SwipeAnimation from 'src/core/components/swipe-animation/swipe-animation';

import { TECHNOLOGY_ICONS } from 'src/assets/resources/technology-icons';
import { getBucketResource } from 'src/core/functions';
import useResponsive from 'src/core/hooks/useResponsive/useResponsive';
import { Repository, Section } from 'src/core/layouts';
import { EAppSections, EResponsiveType, IGithubRepository } from 'src/core/models';
import { IResponsiveSwiper } from 'src/core/models/responsive-swiper.interface';
import { GithubService } from 'src/core/services';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IProject } from './models/project.interface';

import * as S from './styled';

const Projects = () => {
  const [repositories, setRepositories] = useState<IGithubRepository[]>([]);
  const isMobile = useResponsive({ type: EResponsiveType.smaller });
  const swiperConfig: IResponsiveSwiper = useMemo<IResponsiveSwiper>(() => ({
    desktop: {
      modules: [Navigation],
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    },
    mobile: {
      modules: [Navigation],
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    },
  }), []);

  const projects: IProject[] = useMemo<IProject[]>(() => [
    {
      title: 'Fut Awesome',
      description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
      background: getBucketResource('/projects/futawesome.png'),
      icons: [TECHNOLOGY_ICONS.DART, TECHNOLOGY_ICONS.FLUTTER],
      link: '',
    },
    {
      title: 'Zappy code',
      description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
      background: getBucketResource('/projects/zappy-code.jpeg'),
      icons: [TECHNOLOGY_ICONS.SWIFT],
      link: '',
    },
    {
      title: 'Simple diary',
      description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
      background: getBucketResource('/projects/diary.jpeg'),
      icons: [TECHNOLOGY_ICONS.SWIFT],
      link: '',
    },
    {
      title: 'Petra Assets',
      description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
      background: getBucketResource('/projects/petra.png'),
      icons: [TECHNOLOGY_ICONS.TYPESCRIPT, TECHNOLOGY_ICONS.ANGULAR, TECHNOLOGY_ICONS.SASS, TECHNOLOGY_ICONS.HTML],
      link: '',
    },
    {
      title: 'Restaurant Finder',
      description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
      background: getBucketResource('/projects/restaurant-finder.png'),
      icons: [TECHNOLOGY_ICONS.TYPESCRIPT, TECHNOLOGY_ICONS.SASS, TECHNOLOGY_ICONS.REACT, TECHNOLOGY_ICONS.HTML],
      link: '',
    },
    {
      title: 'Canvas Matrix',
      description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
      background: getBucketResource('/projects/matrix.gif'),
      icons: [TECHNOLOGY_ICONS.JAVASCRIPT, TECHNOLOGY_ICONS.CSS, TECHNOLOGY_ICONS.HTML],
      link: '',
    },
    {
      title: 'Snake Game',
      description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
      background: getBucketResource('/projects/snakegame.gif'),
      icons: [TECHNOLOGY_ICONS.JAVASCRIPT, TECHNOLOGY_ICONS.REACT, TECHNOLOGY_ICONS.SASS, TECHNOLOGY_ICONS.HTML],
      link: '',
    },
    {
      title: 'Solar System',
      description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
      background: getBucketResource('/projects/solar-system.png'),
      icons: [TECHNOLOGY_ICONS.JAVASCRIPT, TECHNOLOGY_ICONS.HTML, TECHNOLOGY_ICONS.CSS],
      link: '',
    },
    {
      title: 'Be the Hero',
      description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
      background: getBucketResource('/projects/be-the-hero.png'),
      icons: [TECHNOLOGY_ICONS.JAVASCRIPT, TECHNOLOGY_ICONS.HTML, TECHNOLOGY_ICONS.CSS, TECHNOLOGY_ICONS.REACT],
      link: '',
    },
  ], []);

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
    <S.ProjectsWrapper id={EAppSections.PROJECTS}>
      <Section
        onTitleShow={(typewriter) => {
          typewriter.typeString('Meus projetos')
            .start();
        }}
        icon={<DeveloperBoard htmlColor="white" fontSize="large" />}
        gridStyle={{
          paddingTop: 50,
          paddingBottom: 50,
        }}
      >
        <Typography>
          Aqui
        </Typography>
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
                <Responsive
                  breakpoint="md"
                  aboveComponent={(
                    <S.RepositoriesList container flexWrap="nowrap" flexDirection="row">
                      {repositories.map(renderRepository)}
                    </S.RepositoriesList>
                  )}
                  belowComponent={(
                    <S.RepositoriesList container flexWrap="nowrap" flexDirection="row">
                      <SwipeAnimation lottieProps={{
                        height: 80,
                        width: 'unset',
                        speed: 1.25,
                        options: {
                          animationData: SwipeRightAnimation,
                        },
                      }}
                      />
                      {repositories.map(renderRepository)}
                    </S.RepositoriesList>
                  )}
                />
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
              {...(isMobile ? swiperConfig.mobile : swiperConfig.desktop)}
            >
              {projects.map((project) => (
                <SwiperSlide
                  style={{ position: 'relative' }}
                  key={project.title}
                >
                  <Responsive
                    breakpoint="md"
                    aboveComponent={(
                      <>
                        <S.ProjectBackgroundImage src={project.background} />
                        <S.ProjectSlideContainer>
                          <S.ProjectSlideOverlay
                            container
                            alignItems="flex-end"
                          >
                            <S.ProjectTechnologiesWrapper container xs={6}>
                              {project.icons.map((icon, index) => (
                                <S.ProjectTechnologyIcon
                                  key={`${project.title}-${index}`}
                                  src={icon}
                                />
                              ))}
                            </S.ProjectTechnologiesWrapper>

                            <Grid container xs={6}>
                              <Typography variant="h3">{project.title}</Typography>

                              <Typography>{project.description}</Typography>
                            </Grid>
                          </S.ProjectSlideOverlay>
                        </S.ProjectSlideContainer>
                      </>
                    )}
                    belowComponent={(
                      <S.ProjectSlideContainer>
                        <Grid container xs={12}>
                          <Typography variant="h2">{project.title}</Typography>
                          <Typography>{project.description}</Typography>
                        </Grid>
                        <S.ProjectTechnologiesWrapper container justifyContent="flex-end" xs={12}>
                          {project.icons.map((icon, index) => (
                            <S.ProjectTechnologyIcon
                              key={`${project.title}-${index}`}
                              src={icon}
                            />
                          ))}
                        </S.ProjectTechnologiesWrapper>

                        <Grid container flexWrap="nowrap" gap={4} justifyContent="space-between" marginTop={1}>
                          <a href={project.link}>
                            <S.ActionButton
                              variant="outlined"
                              color="secondary"
                              endIcon={<OpenInNew color="secondary" fontSize="small" />}
                              startIcon={<GitHub htmlColor="white" fontSize="large" />}
                            >
                              <Typography variant="h6" color="secondary">Github</Typography>
                            </S.ActionButton>
                          </a>
                          <S.ActionButton endIcon={<RemoveRedEye color="primary" />} variant="outlined">
                            <Typography variant="h6" color="primary">Visualizar</Typography>
                          </S.ActionButton>
                        </Grid>
                      </S.ProjectSlideContainer>
                    )}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </S.ProjectsTabs>
        </S.ProjectsContainer>
      </Section>
    </S.ProjectsWrapper>
  );
};

export default Projects;
