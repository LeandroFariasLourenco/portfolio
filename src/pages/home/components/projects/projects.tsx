import {
  Code, DeveloperBoard, Star,
} from '@mui/icons-material';
import {
  Box, Typography,
} from '@mui/material';
import {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import SwipeRightAnimation from 'src/assets/animations/swipe-right.json';
import { TECHNOLOGY_ICONS } from 'src/assets/resources/technology-icons';
import { CustomSwiperControls } from 'src/core/components';
import Responsive from 'src/core/components/responsive/responsive';
import SwipeAnimation from 'src/core/components/swipe-animation/swipe-animation';
import { getBucketResource } from 'src/core/functions';
import { Section } from 'src/core/layouts';
import { EAppSections, EResponsiveType, IGithubRepository } from 'src/core/models';
import { IResponsiveSwiper } from 'src/core/models/responsive-swiper.interface';
import { GithubService } from 'src/core/services';
import {
  EffectCards, Navigation,
  Pagination,
  Swiper as SwiperClass,
} from 'swiper';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import { useResponsive } from 'src/core/hooks';
import SlideTitle from 'src/core/components/slide-title/slide-title';
import { IProject } from './models/project.interface';

import DesktopProject from './components/desktop-project/desktop-project';
import MobileProject from './components/mobile-project/mobile-project';
import Repository from './components/repository/repository';
import * as S from './styled';

const Projects = () => {
  const [repositories, setRepositories] = useState<IGithubRepository[]>([]);
  const [swiper, setSwiper] = useState<SwiperClass>();
  const intl = useIntl();
  const [swiperIndex, setSwiperIndex] = useState<number>(0);
  const isMobile = useResponsive({ type: EResponsiveType.smaller });
  const swiperProps: IResponsiveSwiper = useMemo<IResponsiveSwiper>(() => ({
    desktop: {
      modules: [Navigation, Pagination],
      effect: 'slide',
      grabCursor: true,
      onRealIndexChange: (swiper: SwiperClass) => {
        setSwiperIndex(swiper.realIndex);
      },
      onSwiper: (swiper: SwiperClass) => {
        setSwiper(swiper);
      },
    },
    mobile: {
      modules: [Navigation, EffectCards],
      effect: 'cards',
      onRealIndexChange: (swiper: SwiperClass) => {
        setSwiperIndex(swiper.realIndex);
      },
      onSwiper: (swiper: SwiperClass) => {
        setSwiper(swiper);
      },
      navigation: {
        nextEl: '.projects.swiper-button-next',
        prevEl: '.projects.swiper-button-prev',
      },
    },
  }), []);

  const projects: IProject[] = useMemo<IProject[]>(() => [
    {
      title: 'Fut Awesome',
      paragraphs: [
        'Com o objetivo de aprimorar minhas habilidades em programação para dispositivos móveis, desenvolvi um projeto pessoal em Flutter e Dart voltado para consumo de APIs de futebol. Esse aplicativo permite o acesso a informações sobre jogos de diversas ligas, tais como Brasileirão, Copa do Brasil e Champions League além de disponibilizar notícias sobre o mundo do futebol.',
        'Através da integração com as APIs, o aplicativo é capaz de exibir em tempo real os resultados dos jogos, bem como a tabela de classificação das equipes.',
        'Além disso, é possível visualizar informações sobre os jogadores, tais como estatísticas de gols e assistências, e receber notificações sobre os próximos jogos.',
      ],
      background: getBucketResource('/projects/futawesome.png'),
      icons: [TECHNOLOGY_ICONS.DART, TECHNOLOGY_ICONS.FLUTTER],
      link: '',
      canPreviewInMobile: true,
    },
    {
      title: 'Zappy code',
      paragraphs: ['Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'],
      background: getBucketResource('/projects/zappy-code.jpeg'),
      icons: [TECHNOLOGY_ICONS.SWIFT],
      link: '',
      canPreviewInMobile: true,
    },
    {
      title: 'Simple diary',
      paragraphs: ['Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'],
      background: getBucketResource('/projects/diary.jpeg'),
      icons: [TECHNOLOGY_ICONS.SWIFT],
      link: '',
      canPreviewInMobile: true,
    },
    {
      title: 'Petra Assets',
      paragraphs: ['Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'],
      background: getBucketResource('/projects/petra.png'),
      icons: [TECHNOLOGY_ICONS.TYPESCRIPT, TECHNOLOGY_ICONS.ANGULAR, TECHNOLOGY_ICONS.SASS, TECHNOLOGY_ICONS.HTML],
      link: '',
      canPreviewInMobile: false,
    },
    {
      title: 'Restaurant Finder',
      paragraphs: ['Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'],
      background: getBucketResource('/projects/restaurant-finder.png'),
      icons: [TECHNOLOGY_ICONS.TYPESCRIPT, TECHNOLOGY_ICONS.SASS, TECHNOLOGY_ICONS.REACT, TECHNOLOGY_ICONS.HTML],
      link: '',
      canPreviewInMobile: false,
    },
    {
      title: 'Canvas Matrix',
      paragraphs: ['Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'],
      background: getBucketResource('/projects/matrix.gif'),
      icons: [TECHNOLOGY_ICONS.JAVASCRIPT, TECHNOLOGY_ICONS.CSS, TECHNOLOGY_ICONS.HTML],
      link: '',
      canPreviewInMobile: false,
    },
    {
      title: 'Snake Game',
      paragraphs: ['Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'],
      background: getBucketResource('/projects/snakegame.gif'),
      icons: [TECHNOLOGY_ICONS.JAVASCRIPT, TECHNOLOGY_ICONS.REACT, TECHNOLOGY_ICONS.SASS, TECHNOLOGY_ICONS.HTML],
      link: '',
      canPreviewInMobile: false,
    },
    {
      title: 'Solar System',
      paragraphs: ['Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'],
      background: getBucketResource('/projects/solar-system.png'),
      icons: [TECHNOLOGY_ICONS.JAVASCRIPT, TECHNOLOGY_ICONS.HTML, TECHNOLOGY_ICONS.CSS],
      link: '',
      canPreviewInMobile: false,
    },
    {
      title: 'Be the Hero',
      paragraphs: ['Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'],
      background: getBucketResource('/projects/be-the-hero.png'),
      icons: [TECHNOLOGY_ICONS.JAVASCRIPT, TECHNOLOGY_ICONS.HTML, TECHNOLOGY_ICONS.CSS, TECHNOLOGY_ICONS.REACT],
      link: '',
      canPreviewInMobile: false,
    },
  ], [intl]);

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
        <S.ProjectDescriptionText>
          Este é o local onde você pode encontrar meus projetos pessoais mais notáveis. Caso haja interesse em obter informações mais detalhadas sobre meus projetos profissionais, por favor, entre em contato comigo.
        </S.ProjectDescriptionText>
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
            flexDirection="column"
            flexWrap="nowrap"
          >
            <SlideTitle
              icon={<Star htmlColor="#fff" />}
              onTitleShow={(typewriter) => {
                typewriter.typeString('Em destaque').start();
              }}
            />
            <Swiper
              style={{
                height: '100%',
                width: '100%',
              }}
              {...(isMobile ? swiperProps.mobile : swiperProps.desktop)}
            >
              {projects.map((project) => (
                <SwiperSlide
                  style={{ position: 'relative' }}
                  key={project.title}
                >
                  <Responsive
                    breakpoint="md"
                    aboveComponent={<DesktopProject project={project} />}
                    belowComponent={<MobileProject project={project} />}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <Responsive
              breakpoint="md"
            >
              <CustomSwiperControls
                paginationLayout="vertical"
                swiper={swiper!}
                swiperIndex={swiperIndex}
                totalSlides={projects.length}
              />
            </Responsive>
          </S.ProjectsTabs>
          <Responsive
            breakpoint="md"
            type={EResponsiveType.smaller}
          >
            <CustomSwiperControls
              swiper={swiper!}
              swiperIndex={swiperIndex}
              totalSlides={projects.length}
            />
          </Responsive>
        </S.ProjectsContainer>
      </Section>
    </S.ProjectsWrapper>
  );
};

export default Projects;
