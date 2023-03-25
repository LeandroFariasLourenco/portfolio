import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider as MaterialThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import Routes from 'src/core/routes/routes';
import { materialTheme } from 'src/styles/utils';
import { IntlProvider } from 'react-intl';

import 'flag-icons/css/flag-icons.min.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import 'react-vertical-timeline-component/style.min.css';

import { observer } from 'mobx-react-lite';
import reportWebVitals from './reportWebVitals';
import GlobalProvider, { useGlobalContext } from './core/store/global/context';
import Global from './styles/global';

const IntlComponent = observer(() => {
  const globalContext = useGlobalContext();

  return (
    <IntlProvider
      locale={globalContext.language}
      messages={globalContext.messages}
    >
      <Global />
      <Routes />
    </IntlProvider>
  );
});

const Providers = () => (
  <StyledEngineProvider injectFirst>
    <MaterialThemeProvider theme={materialTheme}>
      <GlobalProvider>
        <IntlComponent />
      </GlobalProvider>
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
