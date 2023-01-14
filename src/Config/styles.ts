import createCache from '@emotion/cache';
import { createTheme } from '@mui/material/styles';
import { ThemeType } from '@types';

export const getTheme = (mode: ThemeType) =>
  createTheme({
    palette: {
      mode: mode,
    },
  });
export const clientSideEmotionCache = createCache({
  key: 'css',
});

export const fontSize = {
  xs: '0.8em',
  sm: '0.9em',
  md: '1em',
  lg: '',
  xl: '',
  xxl: '',
};
