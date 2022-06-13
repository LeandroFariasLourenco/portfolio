import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider as MaterialThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import Routes from 'src/core/routes/Routes';
import { materialTheme } from 'src/styles/theme';
import Global from 'src/styles/Global';
import { IntlProvider } from 'react-intl';
import portuguese from 'src/core/intl/portuguese.json';

import 'flag-icons/css/flag-icons.min.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import reportWebVitals from './reportWebVitals';

const Providers = () => (
  <StyledEngineProvider injectFirst>
    <MaterialThemeProvider theme={materialTheme}>
      <StyledThemeProvider theme={materialTheme}>
        <IntlProvider messages={portuguese} locale="br" defaultLocale="br">
          <Global />
          <Routes />
        </IntlProvider>
      </StyledThemeProvider>
    </MaterialThemeProvider>
  </StyledEngineProvider>
);

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <Providers />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
