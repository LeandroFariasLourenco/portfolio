import {
  LazyExoticComponent,
  Suspense,
  lazy, useCallback, useMemo,
  useEffect,
} from 'react';
import { LazyLoad } from 'src/core/components';
import { CommonLayout } from 'src/core/layouts';

import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'src/core/constants';
import { useTheme } from '@mui/material';
import * as S from './styled';
import WelcomeProvider from './components/welcome/context/welcome-context';
import ProjectsProvider from './components/projects/context/projects.context';

const Welcome = lazy(() => import('./components/welcome/welcome'));
const About = lazy(() => import('./components/about/about'));
const Experience = lazy(() => import('./components/experience/experience'));
const Stack = lazy(() => import('./components/stack/stack'));
const Academic = lazy(() => import('./components/academic/academic'));
const Projects = lazy(() => import('./components/projects/projects'));
const MyTimeline = lazy(() => import('./components/my-timeline/my-timeline'));

const Home = () => {
  const navigate = useNavigate();
  const { breakpoints } = useTheme();
  const components = useMemo(() => ([
    <WelcomeProvider><Welcome /></WelcomeProvider>,
    <><About /></>,
    <><Experience /></>,
    <><Stack /></>,
    <><Academic /></>,
    <ProjectsProvider><Projects /></ProjectsProvider>,
    <><MyTimeline /></>,
  ]), []);

  const renderComponent = useCallback((Component: any, index: number) => (
    <LazyLoad key={index}>
      {Component}
    </LazyLoad>
  ), []);

  const handleWindowResize = useCallback(({ target }: any) => {
    if (target.innerWidth >= breakpoints.values.lg || target.innerWidth <= breakpoints.values.sm) {
      navigate(ROUTES.home);
      return;
    }

    navigate(ROUTES.notAvailable);
  }, []);

  const handleOrientationChange = useCallback((window: Window) => {
    const orientation = window.screen ? window.screen.orientation.type : '';

    switch (orientation) {
      case 'landscape-primary':
      case 'landscape-secondary':
        navigate(ROUTES.notAvailable);
        break;
      default:
        handleWindowResize(window);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize as any);

    window.addEventListener('orientationchange', handleOrientationChange as any);

    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange as any);
      window.removeEventListener('resize', handleWindowResize as any);
    };
  }, []);

  return (
    <S.HomeContainer>
      <CommonLayout>
        {components.map(renderComponent)}
      </CommonLayout>
    </S.HomeContainer>
  );
};

export default Home;
