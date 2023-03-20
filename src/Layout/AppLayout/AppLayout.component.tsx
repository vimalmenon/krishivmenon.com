import React from 'react';

import { ThemeProvider } from '@mui/material/styles';
import Router from 'next/router';
import NProgress from 'nprogress';

import { useCommonContext } from '@context';
import { getTheme } from '@style';
import { ReactChildren, IBaseLayout } from '@types';

import { PageLayout } from '../PageLayout';

NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false });

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export const AppLayout: React.FC<ReactChildren & IBaseLayout> = ({ children, title }) => {
  const { theme: themeValue, apiCount } = useCommonContext();

  React.useEffect(() => {
    NProgress.start();
    if (apiCount === 0) {
      NProgress.done();
    }
  }, [apiCount]);
  const theme = getTheme(themeValue);
  return (
    <ThemeProvider theme={theme}>
      <PageLayout title={title}>{children}</PageLayout>
    </ThemeProvider>
  );
};
