import * as React from 'react';
import Head from 'next/head';
import { AppProps as IAppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '@/config/theme';
import createEmotionCache from '@/config/create-emotion-cache';
import Script from 'next/script';
import { IntlProvider } from 'react-intl';
import { useLocale } from '@/shared/hooks';

import './globals.scss';

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends IAppProps {
  emotionCache?: EmotionCache;
}

const App = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const { locale, messages } = useLocale();

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <IntlProvider locale={locale as string} messages={messages}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </IntlProvider>
    </CacheProvider>
  );
}

export default App;
