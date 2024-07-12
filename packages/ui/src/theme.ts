'use client';

import { createTheme } from '@mui/material/styles';

const primaryColor = '#03D69D';
const textColor = '#4d4d4d';
const muteColor = '#c1c1c1';

const theme = createTheme({
  typography: {
    fontFamily: 'Nunito, Arial, sans-serif',
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
