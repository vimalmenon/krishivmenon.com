import React from 'react';

import { context } from '@context';
import { ThemeProvider } from '@mui/material/styles';
import { getTheme } from '@style';
import { ReactChildren, IBaseLayout } from '@types';

import { LoginLayout, AdminLayout } from '../';

export const AppLayout: React.FC<ReactChildren & IBaseLayout> = ({ children, title }) => {
  const { theme: themeValue, isAdmin } = context.useContext();
  const theme = getTheme(themeValue);
  return (
    <ThemeProvider theme={theme}>
      {isAdmin ? (
        <AdminLayout title={title}>{children}</AdminLayout>
      ) : (
        <LoginLayout title="Login Page" />
      )}
    </ThemeProvider>
  );
};
