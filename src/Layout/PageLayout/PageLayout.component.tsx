import React from 'react';

import { MetaData, ErrorBoundary } from '@common';
import { AuthStatus } from '@constant';
import { useCommonContext } from '@context';
import { useUser } from '@hook';
import CssBaseline from '@mui/material/CssBaseline';
import { IBaseLayout, ReactChildren } from '@types';

import { MainPageLayout, MainPageContent } from './PageLayout.style';
import {
  PageLayoutHeader,
  PageLayoutAside,
  PageLayoutFooter,
  PageLayoutAsideMobile,
  EnvCheck,
} from '../';

export const PageLayout: React.FC<ReactChildren & IBaseLayout> = ({ children, title }) => {
  useUser();
  const { authStatus } = useCommonContext();
  return (
    <MainPageLayout>
      <CssBaseline />
      <MetaData title={title} />
      <PageLayoutHeader />
      <ErrorBoundary
        sx={{
          gridArea: 'content',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {authStatus === AuthStatus.Authorized && (
          <EnvCheck>
            <PageLayoutAside />
            <PageLayoutAsideMobile />
            <MainPageContent>
              <ErrorBoundary>{children}</ErrorBoundary>
            </MainPageContent>
          </EnvCheck>
        )}
        {authStatus === AuthStatus.NotAuthenticated && <div>You are not authorized</div>}
        {authStatus === AuthStatus.Authenticating && <div>Authenticating...</div>}
      </ErrorBoundary>
      <PageLayoutFooter />
    </MainPageLayout>
  );
};
