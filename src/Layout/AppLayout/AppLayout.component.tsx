import React from 'react';

import { AuthStatus } from '@constant';
import { useCommonContext } from '@context';
import { navigation } from '@data';
import { ThemeProvider } from '@mui/material/styles';
import { getTheme } from '@style';
import { ReactChildren, IBaseLayout } from '@types';

import { LoginLayout } from '../';
import { PageLayout } from '../PageLayout';

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
