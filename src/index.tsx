import { StyledEngineProvider, ThemeProvider as MaterialThemeProvider } from '@mui/material/styles';
import ReactDOM from 'react-dom/client';
import { IntlProvider } from 'react-intl';
import Routes from 'src/core/routes/routes';
import { materialTheme } from 'src/styles/utils';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import 'yet-another-react-lightbox/styles.css';

import 'react-vertical-timeline-component/style.min.css';

import GlobalProvider, { useGlobalContext } from './core/context/global/global-context';
import reportWebVitals from './reportWebVitals';
import Global from './styles/global';

const Root = () => {
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
};

const Providers = () => (
  <StyledEngineProvider injectFirst>
    <MaterialThemeProvider theme={materialTheme}>
      <GlobalProvider>
        <Root />
      </GlobalProvider>
    </MaterialThemeProvider>
  </StyledEngineProvider>
);

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <Providers />
  ,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
