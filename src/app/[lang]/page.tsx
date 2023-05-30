'use client'

import { LazyLoad } from '@/shared/components';
import { ThemeProvider as MaterialThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import {
  Fragment,
  lazy,
  useCallback,
  useEffect,
  useMemo
} from 'react';

import WelcomeProvider from '@/components/home/welcome/context/welcome-context';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import 'yet-another-react-lightbox/styles.css';

import ProjectsProvider from '@/components/home/projects/context/projects.context';
import { APP } from '@/shared/constants/app';
import { GlobalProvider, useGlobalContext } from '@/shared/contexts';
import { CommonLayout } from '@/shared/layouts';
import { EAppSections } from '@/shared/models';
import { materialTheme } from '@/shared/styles/utils';
import { Roboto, Share_Tech_Mono, Ubuntu_Mono } from 'next/font/google';
import styles from './page.module.scss';
import StackProvider from '@/components/home/stack/components/context/stack.context';
import { useRouter } from 'next/router';
import { ROUTES } from '@/shared/constants/routes';

const Welcome = lazy(() => import('@/components/home/welcome/welcome'));
const About = lazy(() => import('@/components/home/about/about'));
const Experience = lazy(() => import('@/components/home/experience/experience'));
const Stack = lazy(() => import('@/components/home/stack/stack'));
const Academic = lazy(() => import('@/components/home/academic/academic'));
const Projects = lazy(() => import('@/components/home/projects/projects'));
const MyTimeline = lazy(() => import('@/components/home/my-timeline/my-timeline'));

const Root = () => {
  const router = useRouter();
  const { language, messages } = useGlobalContext();
  const components = useMemo(() => ([
    {
      id: EAppSections.WELCOME,
      node: <WelcomeProvider key={EAppSections.WELCOME}><Welcome /></WelcomeProvider>
    },
    {
      id: EAppSections.ABOUT,
      node: <Fragment key={EAppSections.ABOUT}><About /></Fragment>,
    },
    {
      id: EAppSections.EXPERIENCES,
      node: <Fragment key={EAppSections.EXPERIENCES}><Experience /></Fragment>,
    },
    {
      id: EAppSections.STACK,
      node: <StackProvider key={EAppSections.STACK}><Stack /></StackProvider>,
    },
    {
      id: EAppSections.ACADEMIC,
      node: <Fragment key={EAppSections.ACADEMIC}><Academic /></Fragment>,
    },
    {
      id: EAppSections.PROJECTS,
      node: <ProjectsProvider key={EAppSections.PROJECTS}><Projects /></ProjectsProvider>,
    },
    {
      id: EAppSections.MY_TIMELINE,
      node: <Fragment key={EAppSections.MY_TIMELINE}><MyTimeline /></Fragment>,
    },
  ]), []);

  const renderComponent = useCallback(({ node, id }: { id: string, node: JSX.Element }, index: number) => (
    <LazyLoad id={id} key={id}>
      {node}
    </LazyLoad>
  ), []);

  const handleWindowResize = useCallback(({ target }: any) => {
    if (target.innerWidth >= APP.breakpoints.lg || target.innerWidth <= APP.breakpoints.sm) {
      router.push(ROUTES.home);
      return;
    }

    router.push(ROUTES.notAvailable);
  }, []);

  const handleOrientationChange = useCallback((window: Window) => {
    const orientation = window.screen ? window.screen.orientation.type : '';

    switch (orientation) {
      case 'landscape-primary':
      case 'landscape-secondary':
        router.push(ROUTES.notAvailable);
        break;
      default:
        handleWindowResize(window);
    }
  }, []);

  useEffect(() => {
    if (!window) return;

    window.addEventListener('resize', handleWindowResize as any);

    window.addEventListener('orientationchange', handleOrientationChange as any);

    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange as any);
      window.removeEventListener('resize', handleWindowResize as any);
    };
  }, []);

  return (
    <div className={styles.page}>
      {components.map(renderComponent)}
    </div>
  )
};

const shareTechMono = Share_Tech_Mono({ weight: ['400'], subsets: ['latin'], preload: true, style: ['normal'] });
const ubuntuMono = Ubuntu_Mono({ weight: ['400', '700'], subsets: ['latin'], preload: true, style: ['normal'] });
const roboto = Roboto({ weight: ['300', '400', '500', '700'], subsets: ['latin'], preload: true, style: ['normal'] });

export default function Home() {
  return (
    <div className={styles['home-container']}>
      <style jsx global>{`
        :root {
          --font-title: ${shareTechMono.style.fontFamily};
          --font-subtitle: ${ubuntuMono.style.fontFamily};
          --font-general: ${roboto.style.fontFamily};
        }
      `}</style>
      <StyledEngineProvider injectFirst>
        <MaterialThemeProvider theme={materialTheme}>
          <GlobalProvider>
            <CommonLayout>
              <Root />
            </CommonLayout>
          </GlobalProvider>
        </MaterialThemeProvider>
      </StyledEngineProvider>
    </div>
  )
}
