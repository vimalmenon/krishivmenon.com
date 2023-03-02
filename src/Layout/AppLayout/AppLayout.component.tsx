import React from 'react';

import { AuthStatus } from '@constant';
import { useCommonContext } from '@context';
import { navigation } from '@data';
import { ThemeProvider } from '@mui/material/styles';
import { getTheme } from '@style';
import { ReactChildren, IBaseLayout } from '@types';
import Router from 'next/router';
import NProgress from 'nprogress';

import { LoginLayout } from '../';
import { PageLayout } from '../PageLayout';

NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false });

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export const AppLayout: React.FC<ReactChildren & IBaseLayout> = ({ children, title }) => {
  const { theme: themeValue, authStatus } = useCommonContext();
  const theme = getTheme(themeValue);
  return (
    <ThemeProvider theme={theme}>
      {authStatus === AuthStatus.NotAuthenticated && <LoginLayout title={navigation.Login.title} />}
      {authStatus !== AuthStatus.NotAuthenticated && (
        <PageLayout title={title}>{children}</PageLayout>
      )}
    </ThemeProvider>
  );
};
