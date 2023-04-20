import {
  Code, DeveloperBoard, Star,
} from '@mui/icons-material';
import {
  Typography,
} from '@mui/material';
import {
  useCallback, useEffect, useMemo, useRef, useState,
} from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import SwipeRightAnimation from 'src/assets/animations/swipe-right.json';
import { TECHNOLOGY_ICONS } from 'src/assets/resources/technology-icons';
import { CustomSwiperControls } from 'src/core/components';
import Responsive from 'src/core/components/responsive/responsive';
import SlideTitle from 'src/core/components/slide-title/slide-title';
import SwipeAnimation from 'src/core/components/swipe-animation/swipe-animation';
import { getBucketResource } from 'src/core/functions';
import { useSwiperProps } from 'src/core/hooks';
import { Section } from 'src/core/layouts';
import { EAppSections, EResponsiveType } from 'src/core/models';
import { GithubService } from 'src/core/services';
import {
  EffectCards, Navigation,
  Pagination,
  Swiper as SwiperClass,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IGithubRepository } from 'src/core/models/github-repository.interface';
import { IProject } from './models/project.interface';

import DesktopProject from './components/desktop-project/desktop-project';
import MobileProject from './components/mobile-project/mobile-project';
import Repository from './components/repository/repository';
import * as S from './styled';

const Projects = () => {
  const [repositories, setRepositories] = useState<IGithubRepository[]>([]);
  const swiperRef = useRef<SwiperClass>();
  const intl = useIntl();
  const [swiperIndex, setSwiperIndex] = useState<number>(0);
  const { swiperProps } = useSwiperProps({
    desktop: {
      effect: 'slide',
      grabCursor: true,
      pagination: true,
    },
    mobile: {
      modules: [EffectCards],
      effect: 'cards',
    },
    commonProps: {
      style: { width: '100%', height: '100%' },
      onRealIndexChange: (swiper: SwiperClass) => {
        setSwiperIndex(swiper.realIndex);
      },
    },
  });

  const projects: IProject[] = useMemo<IProject[]>(() => [
    {
      title: 'Fut Awesome',
      paragraphs: [
        intl.formatMessage({ id: 'home.projects.fut-awesome.paragraph1' }),
        intl.formatMessage({ id: 'home.projects.fut-awesome.paragraph2' }),
        intl.formatMessage({ id: 'home.projects.fut-awesome.paragraph3' }),
      ],
      background: getBucketResource('/projects/futawesome.png'),
      icons: [TECHNOLOGY_ICONS.DART, TECHNOLOGY_ICONS.FLUTTER],
      link: 'https://github.com/LeandroFariasLourenco/futawesome',
      canPreviewInMobile: true,
    },
    {
      title: 'Zappy code',
      paragraphs: [
        intl.formatMessage({ id: 'home.projects.zappy-code.paragraph1' }),
        intl.formatMessage({ id: 'home.projects.zappy-code.paragraph2' }),
      ],
      background: getBucketResource('/projects/zappy-code.jpeg'),
      icons: [TECHNOLOGY_ICONS.SWIFT],
      link: 'https://github.com/LeandroFariasLourenco/ZappyCode',
      canPreviewInMobile: true,
    },
    {
      title: 'Finantial Data Chart',
      paragraphs: [
        intl.formatMessage({ id: 'home.projects.finantial-data-chart.paragraph1' }),
        intl.formatMessage({ id: 'home.projects.finantial-data-chart.paragraph2' }),
      ],
      background: getBucketResource('/projects/petra.png'),
      icons: [TECHNOLOGY_ICONS.TYPESCRIPT, TECHNOLOGY_ICONS.ANGULAR, TECHNOLOGY_ICONS.SASS, TECHNOLOGY_ICONS.HTML],
      link: 'https://github.com/LeandroFariasLourenco/finantial-data-chart',
      canPreviewInMobile: false,
    },
    {
      title: 'Restaurant Finder',
      paragraphs: [
        intl.formatMessage({ id: 'home.projects.restaurant-finder.paragraph1' }),
      ],
      background: getBucketResource('/projects/restaurant-finder.png'),
      icons: [TECHNOLOGY_ICONS.TYPESCRIPT, TECHNOLOGY_ICONS.SASS, TECHNOLOGY_ICONS.REACT, TECHNOLOGY_ICONS.HTML],
      link: 'https://github.com/LeandroFariasLourenco/restaurants-maps-api',
      canPreviewInMobile: false,
    },
    {
      title: 'Daily journal',
      paragraphs: [
        intl.formatMessage({ id: 'home.projects.daily-journal.paragraph1' }),
        intl.formatMessage({ id: 'home.projects.daily-journal.paragraph2' }),
      ],
      background: getBucketResource('/projects/diary.jpeg'),
      icons: [TECHNOLOGY_ICONS.SWIFT],
      link: 'https://github.com/LeandroFariasLourenco/Daily-Journal',
      canPreviewInMobile: true,
    },
    {
      title: 'Canvas Matrix',
      paragraphs: [
        intl.formatMessage({ id: 'home.projects.canvas-matrix.paragraph1' }),
      ],
      background: getBucketResource('/projects/matrix.gif'),
      icons: [TECHNOLOGY_ICONS.JAVASCRIPT, TECHNOLOGY_ICONS.CSS, TECHNOLOGY_ICONS.HTML],
      link: 'https://github.com/LeandroFariasLourenco/matrix',
      canPreviewInMobile: false,
    },
    {
      title: 'Snake Game',
      paragraphs: [
        intl.formatMessage({ id: 'home.projects.snake-game.paragraph1' }),
      ],
      background: getBucketResource('/projects/snakegame.gif'),
      icons: [TECHNOLOGY_ICONS.JAVASCRIPT, TECHNOLOGY_ICONS.REACT, TECHNOLOGY_ICONS.SASS, TECHNOLOGY_ICONS.HTML],
      link: 'https://github.com/LeandroFariasLourenco/snake-game',
      canPreviewInMobile: false,
    },
    {
      title: 'Solar System',
      paragraphs: [
        intl.formatMessage({ id: 'home.projects.solar-system.paragraph1' }),
      ],
      background: getBucketResource('/projects/solar-system.png'),
      icons: [TECHNOLOGY_ICONS.JAVASCRIPT, TECHNOLOGY_ICONS.HTML, TECHNOLOGY_ICONS.CSS],
      link: 'https://github.com/LeandroFariasLourenco/solar-system',
      canPreviewInMobile: false,
    },
    {
      title: 'Be the Hero',
      paragraphs: [
        intl.formatMessage({ id: 'home.projects.be-the-hero.paragraph1' }),
      ],
      background: getBucketResource('/projects/be-the-hero.png'),
      icons: [TECHNOLOGY_ICONS.JAVASCRIPT, TECHNOLOGY_ICONS.HTML, TECHNOLOGY_ICONS.CSS, TECHNOLOGY_ICONS.REACT],
      link: 'https://github.com/LeandroFariasLourenco/be-the-hero',
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

  const renderProject = useCallback((project: IProject) => (
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
  ), []);

  return (
    <S.ProjectsWrapper id={EAppSections.PROJECTS}>
      <Section
        onTitleShow={(typewriter) => {
          typewriter.typeString(intl.formatMessage({ id: 'home.projects.my-projects.title' }))
            .start();
        }}
        icon={<DeveloperBoard htmlColor="white" fontSize="large" />}
        gridStyle={{
          paddingTop: 50,
          paddingBottom: 50,
        }}
      >
        <S.ProjectDescriptionText>
          <FormattedMessage id="home.projects.description" />
        </S.ProjectDescriptionText>
        <S.ProjectsContainer container>
          <S.RepositoriesWrapper item xs={12} md={3}>
            <S.RepositoryTitle container flexDirection="row" alignItems="center">
              <Code htmlColor="white" />
              <Typography variant="h4"><FormattedMessage id="home.projects.title" /></Typography>
            </S.RepositoryTitle>
            <Responsive
              breakpoint="md"
              aboveComponent={<S.RepositoriesList container flexWrap="wrap">{repositories.map(renderRepository)}</S.RepositoriesList>}
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
                typewriter.typeString(intl.formatMessage({ id: 'home.projects.highlights.title' })).start();
              }}
            />
            <Swiper onInit={(swiper) => { swiperRef.current = swiper; }} {...swiperProps}>
              {projects.map(renderProject)}
            </Swiper>
            <Responsive
              breakpoint="md"
            >
              <CustomSwiperControls
                paginationLayout="vertical"
                swiper={swiperRef.current!}
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
              swiper={swiperRef.current!}
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
