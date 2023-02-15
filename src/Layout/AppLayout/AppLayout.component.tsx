import React from 'react';

import { useCommonContext } from '@context';
import { ThemeProvider } from '@mui/material/styles';
import { getTheme } from '@style';
import { ReactChildren, IBaseLayout } from '@types';

import { LoginLayout } from '../';
import { PageLayout } from '../PageLayout';

export const AppLayout: React.FC<ReactChildren & IBaseLayout> = ({ children, title }) => {
  const { theme: themeValue, authorized } = useCommonContext();
  const theme = getTheme(themeValue);
  return (
    <ThemeProvider theme={theme}>
      {authorized === null && <div>Authorizing</div>}
      {authorized === false && <LoginLayout title="Login Page" />}
      {authorized && <PageLayout title={title}>{children}</PageLayout>}
    </ThemeProvider>
  );
};
