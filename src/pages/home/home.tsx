import {
  LazyExoticComponent,
  Suspense,
  lazy, useCallback, useMemo,
  useEffect,
} from 'react';
import { LazyLoad } from 'src/core/components';
import { CommonLayout } from 'src/core/layouts';

import { useLayoutEffect } from 'yet-another-react-lightbox/core';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'src/core/constants';
import { useTheme } from '@mui/material';
import * as S from './styled';

const Home = () => {
  const navigate = useNavigate();
  const { breakpoints } = useTheme();
  const components = useMemo(() => ([
    lazy(() => import('./components/welcome/welcome')),
    lazy(() => import('./components/about/about')),
    lazy(() => import('./components/experience/experience')),
    lazy(() => import('./components/stack/stack')),
    lazy(() => import('./components/academic/academic')),
    lazy(() => import('./components/projects/projects')),
    lazy(() => import('./components/my-timeline/my-timeline')),
  ]), []);

  const renderComponent = useCallback((Component: LazyExoticComponent<() => JSX.Element>, index: number) => (
    <LazyLoad key={index}>
      <Component />
    </LazyLoad>
  ), []);

  const handleWindowResize = useCallback((window: Window) => {
    if (window.innerWidth >= breakpoints.values.lg || window.innerWidth <= breakpoints.values.sm) {
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
    window.addEventListener('resize', ({ currentTarget }) => {
      handleWindowResize(currentTarget as Window);
    });

    window.addEventListener('orientationchange', (window) => {
      handleOrientationChange(window as unknown as Window);
    });

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
