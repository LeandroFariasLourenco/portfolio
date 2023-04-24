import {
  LazyExoticComponent,
  Suspense,
  lazy, useCallback, useMemo,
} from 'react';
import { LazyLoad } from 'src/core/components';
import { CommonLayout } from 'src/core/layouts';

import * as S from './styled';

const Home = () => {
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

  return (
    <S.HomeContainer>
      <CommonLayout>
        {components.map(renderComponent)}
      </CommonLayout>
    </S.HomeContainer>
  );
};

export default Home;
