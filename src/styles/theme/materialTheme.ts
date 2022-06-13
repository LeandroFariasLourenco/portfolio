import { createTheme } from '@mui/material/styles';

export const materialTheme = createTheme({
  typography: {
    allVariants: {
      color: '#9AA5C6',
    },
    h1: {
      fontFamily: "'Share Tech Mono', monospace",
      fontSize: 38,
      textTransform: 'uppercase',
      textShadow: '0 0 5px #00FF87',
      color: 'white',
    },
    h2: {
      fontFamily: "'Share Tech Mono', monospace",
      fontSize: 32,
      color: 'white',
    },
  },
  palette: {
    background: {
      default: '#0E1122',
      paper: '#1A1A1A',
    },
    action: {
      active: '#04F5FF',
      focus: '#0E1122',
    },
    primary: {
      main: '#00FF87',
    },
    secondary: {
      main: '#E90052',
      light: '#ab0a43',
    },
  },
});
