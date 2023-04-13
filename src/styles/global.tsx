import { useTheme, GlobalStyles } from '@mui/material';

const Global = () => {
  const theme = useTheme();

  return (
    <GlobalStyles styles={{
      '*': {
        padding: 0,
        margin: 0,
        boxSizing: 'border-box',
      },
      a: {
        textDecoration: 'none',
      },
      img: {
        maxWidth: '100%',
      },
      'no-scroll': {
        overflow: 'hidden !important',
      },
      '::selection': {
        background: 'none',
        color: 'none',
      },
      '::-moz-selection': {
        background: 'none',
        color: 'none',
      },
      '::-webkit-scrollbar': {
        width: 10,
      },
      '::-webkit-scrollbar-thumb': {
        backgroundColor: theme.palette.primary.main,
      },
      '::-webkit-scrollbar-thumb:hover': {
        backgroundColor: theme.palette.secondary.main,
      },
      '::-webkit-scrollbar-track': {
        background: theme.palette.background.paper,
      },
      '.background-canvas': {
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        zIndex: -1,
      },
      // html: {
      //   width: '100vw',
      //   height: '100vh',
      //   position: 'fixed',
      //   top: 0,
      //   left: 0,
      //   overflowY: 'auto',
      // },
      body: {
        backgroundColor: theme.palette.background.default,
        scrollBehavior: 'smooth',
        // width: '100vw',
        // height: '100vh',
        // position: 'fixed',
        // top: 0,
        // left: 0,
        // overflowY: 'auto',
      },
    }}
    />
  );
};

export default Global;
