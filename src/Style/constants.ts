import createCache from '@emotion/cache';
import { grey, blueGrey } from '@mui/material/colors';
import { createTheme, Theme } from '@mui/material/styles';

import { ThemeType, IGeneric } from '@types';

export const getTheme: IGeneric<ThemeType, Theme> = (mode) =>
  createTheme({
    palette: {
      mode: mode,
    },
    custom: {
      background: mode === 'dark' ? grey[900] : blueGrey[50],
    },
  });
export const clientSideEmotionCache = createCache({
  key: 'css',
});

export const fontSize = {
  xs: '0.8em',
  sm: '0.9em',
  md: '1em',
  lg: '1.1em',
  xl: '1.2em',
  xxl: '',
};

export const Spacing = {
  sm: 1,
  md: 2,
  lg: 3,
};

export const DrawerWidth = 240;
export const FooterHeight = 40;
