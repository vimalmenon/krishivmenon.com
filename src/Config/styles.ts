import createCache from '@emotion/cache';
import { createTheme } from '@mui/material/styles';
export const getTheme = (mode: 'dark' | 'light') =>
  createTheme({
    palette: {
      mode: mode,
    },
  });
export const clientSideEmotionCache = createCache({
  key: 'css',
});

export const margin = {
  xs: '',
  sm: '',
  md: '',
  lg: '',
  xl: '',
  xxl: '',
};

export const fontSize = {
  xs: '0.8em',
  sm: '0.9em',
  md: '1em',
  lg: '',
  xl: '',
  xxl: '',
};
