'use client'

import portuguese from '@/../public/intl/portuguese.json';
import { LazyLoad } from '@/shared/components';
import { ThemeProvider as MaterialThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import {
  useCallback,
  useEffect,
  useMemo,
  Fragment,
  lazy
} from 'react';

import WelcomeProvider from '@/components/home/welcome/context/welcome-context';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import 'yet-another-react-lightbox/styles.css';

import 'react-vertical-timeline-component/style.min.css';

import { APP } from '@/shared/constants/app';
import { GlobalProvider, useGlobalContext } from '@/shared/contexts';
import { CommonLayout } from '@/shared/layouts';
import { EAppSections } from '@/shared/models';
import Global from '@/shared/styles/global';
import { materialTheme } from '@/shared/styles/utils';
import { IntlProvider } from 'react-intl';
import './page.scss';
import ProjectsProvider from '@/components/home/projects/context/projects.context';
import { Roboto, Share_Tech_Mono, Ubuntu_Mono } from 'next/font/google';
import dynamic from 'next/dynamic';

const Welcome = lazy(() => import('@/components/home/welcome/welcome'));
const About = lazy(() => import('@/components/home/about/about'));
const Experience = lazy(() => import('@/components/home/experience/experience'));
const Stack = lazy(() => import('@/components/home/stack/stack'));
const Academic = lazy(() => import('@/components/home/academic/academic'));
const Projects = lazy(() => import('@/components/home/projects/projects'));
const MyTimeline = lazy(() => import('@/components/home/my-timeline/my-timeline'));

const Root = () => {
  // const navigate = useNavigate();
  const { language, messages } = useGlobalContext();
  const components = useMemo(() => ([
    <WelcomeProvider key={EAppSections.WELCOME}><Welcome /></WelcomeProvider>,
    <Fragment key={EAppSections.ABOUT}><About /></Fragment>,
    <Fragment key={EAppSections.EXPERIENCES}><Experience /></Fragment>,
    <Fragment key={EAppSections.STACK}><Stack /></Fragment>,
    <Fragment key={EAppSections.ACADEMIC}><Academic /></Fragment>,
    <ProjectsProvider key={EAppSections.PROJECTS}><Projects /></ProjectsProvider>,
    <Fragment key={EAppSections.MY_TIMELINE}><MyTimeline /></Fragment>,
  ]), []);

  const renderComponent = useCallback((Component: any, index: number) => (
    <LazyLoad key={index}>
      {Component}
    </LazyLoad>
  ), []);

  const handleWindowResize = useCallback(({ target }: any) => {
    if (target.innerWidth >= APP.breakpoints.lg || target.innerWidth <= APP.breakpoints.sm) {
      // navigate(ROUTES.home);
      return;
    }

    // navigate(ROUTES.notAvailable);
  }, []);


  const handleOrientationChange = useCallback((window: Window) => {
    const orientation = window.screen ? window.screen.orientation.type : '';

    switch (orientation) {
      case 'landscape-primary':
      case 'landscape-secondary':
        // navigate(ROUTES.notAvailable);
        break;
      default:
        handleWindowResize(window);
    }
  }, []);

  useEffect(() => {
    // window.addEventListener('resize', handleWindowResize as any);

    // window.addEventListener('orientationchange', handleOrientationChange as any);

    // return () => {
    //   window.removeEventListener('orientationchange', handleOrientationChange as any);
    //   window.removeEventListener('resize', handleWindowResize as any);
    // };
  }, []);

  return (
    <>
      <Global />
      {components.map(renderComponent)}
    </>
  )
};

const shareTechMono = Share_Tech_Mono({ weight: ['400'], subsets: ['latin'], preload: true, style: ['normal'] });
const ubuntuMono = Ubuntu_Mono({ weight: ['400'], subsets: ['latin'], preload: true, style: ['normal'] });
const roboto = Roboto({ weight: ['300', '400', '500', '700'], subsets: ['latin'], preload: true, style: ['normal'] });

export default function Home() {
  return (
    <div className="home-container">
      <style jsx global>{`
        :root {
          --font-title: ${shareTechMono.style.fontFamily};
          --font-subtitle: ${ubuntuMono.style.fontFamily};
          --font-general: ${roboto.style.fontFamily};
        }
      `}</style>
      <IntlProvider
        locale="pt-BR"
        messages={portuguese}
      >
        <StyledEngineProvider injectFirst>
          <MaterialThemeProvider theme={materialTheme}>
            <GlobalProvider>
              <CommonLayout>
                <Root />
              </CommonLayout>
            </GlobalProvider>
          </MaterialThemeProvider>
        </StyledEngineProvider>
      </IntlProvider>
    </div>
  )
}
