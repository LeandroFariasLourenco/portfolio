import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
const theme = createTheme({
  typography: {
    allVariants: {
      color: '#9AA5C6',
    },
    body1: {
      fontSize: 15,
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
export default theme;
