'use client';

import '@fontsource/nunito/300.css';
import '@fontsource/nunito/400.css';
import '@fontsource/nunito/500.css';
import '@fontsource/nunito/700.css';

import { createTheme } from '@mui/material/styles';

const primaryColor = '#03D69D';
const textColor = '#4d4d4d';
const muteColor = '#c1c1c1';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Nunito',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: {
    primary: {
      main: primaryColor,
      contrastText: 'white',
    },
    secondary: {
      main: '#133a6f',
    },
    background: {
      default: '#fff',
    },
    text: {
      primary: textColor,
    },
  },
});

export { primaryColor, textColor, muteColor, theme };
