import React from 'react';

import { useCommonContext } from '@context';
import { ThemeProvider } from '@mui/material/styles';
import { getTheme } from '@style';
import { ReactChildren, IBaseLayout } from '@types';

import { LoginLayout, AdminLayout } from '../';

export const AppLayout: React.FC<ReactChildren & IBaseLayout> = ({ children, title }) => {
  const { theme: themeValue, authorized } = useCommonContext();
  const theme = getTheme(themeValue);
  return (
    <ThemeProvider theme={theme}>
      {authorized === null && <div>Authorizing</div>}
      {authorized === true && <AdminLayout title={title}>{children}</AdminLayout>}
      {authorized === false && <LoginLayout title="Login Page" />}
    </ThemeProvider>
  );
};
