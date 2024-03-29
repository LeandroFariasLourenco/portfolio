import { createTheme } from '@mui/material/styles';

export const materialTheme = createTheme({
  typography: {
    allVariants: {
      color: '#9AA5C6',
    },
    body1: {
      fontSize: 15,
    },
    h1: {
      fontFamily: "'Share Tech Mono', monospace",
      fontSize: 38,
      textTransform: 'uppercase',
      textShadow: '0 0 5px #06d674',
      color: 'white',
    },
    h2: {
      fontFamily: "'Share Tech Mono', monospace",
      fontSize: 32,
      color: 'white',
    },
    h3: {
      fontSize: 26,
      fontFamily: "'Share Tech Mono', monospace",
      textShadow: '0 0 1px #06d674',
    },
    h4: {
      fontSize: 24,
      fontFamily: "'Share Tech Mono', monospace",
    },
    h5: {
      fontSize: 22,
      fontFamily: "'Share Tech Mono', monospace",
    },
    h6: {
      fontSize: 17,
      fontFamily: "'Ubuntu Mono', monospace",
    },
  },
  palette: {
    background: {
      default: '#1C1630',
      paper: '#1E1F25',
    },
    action: {
      active: '#0aa1cf',
      focus: '#0E1122',
      hover: 'rgba(10, 161, 207, 0.2)',
    },
    primary: {
      main: '#06d674',
    },
    secondary: {
      main: '#1486a8',
    },
  },
});
