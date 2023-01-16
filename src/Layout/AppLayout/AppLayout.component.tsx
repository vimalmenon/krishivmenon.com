import React from 'react';

import { useCommonAuthProvider, context } from '@context';
import { ThemeProvider } from '@mui/material/styles';
import { getTheme } from '@style';
import { ReactChildren, IBaseLayout } from '@types';

import { LoginLayout, AdminLayout } from '../';

export const AppLayout: React.FC<ReactChildren & IBaseLayout> = ({ children, title }) => {
  const { theme: themeValue } = context.useContext();
  const { user } = useCommonAuthProvider();
  const theme = getTheme(themeValue);
  return (
    <ThemeProvider theme={theme}>
      {user ? (
        <AdminLayout title={title}>{children}</AdminLayout>
      ) : (
        <LoginLayout title="Login Page" />
      )}
    </ThemeProvider>
  );
};
