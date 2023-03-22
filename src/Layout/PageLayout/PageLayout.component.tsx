import React from 'react';

import CssBaseline from '@mui/material/CssBaseline';

import { MetaData, ErrorBoundary, Authenticating } from '@common';
import { AuthStatus } from '@constant';
import { useCommonContext } from '@context';
import { navigation } from '@data';
import { useUser } from '@hook';
import { Login, Unauthorized } from '@page';
import { IBaseLayout, ReactChildren } from '@types';

import { MainLayout, MainPageContent, NoAsideLayout } from './PageLayout.style';
import {
  PageLayoutHeader,
  PageLayoutAside,
  PageLayoutFooter,
  PageLayoutAsideMobile,
  EnvCheck,
} from '../';

export const PageLayout: React.FC<ReactChildren & IBaseLayout> = ({ children, title }) => {
  const { authStatus } = useCommonContext();
  if (authStatus === AuthStatus.NotAuthenticated) {
    return (
      <NotAuthenticatedPage title={navigation.Login.title}>
        <Login />
      </NotAuthenticatedPage>
    );
  }
  if (authStatus === AuthStatus.UnAuthorized) {
    return (
      <AuthorizedPage title={title}>
        <PageLayoutAside />
        <PageLayoutAsideMobile />
        <MainPageContent>
          <ErrorBoundary>
            <Unauthorized />
          </ErrorBoundary>
        </MainPageContent>
      </AuthorizedPage>
    );
  }
  if (authStatus === AuthStatus.Authenticating) {
    return (
      <AuthorizedPage title={title}>
        <PageLayoutAside />
        <PageLayoutAsideMobile />
        <MainPageContent>
          <ErrorBoundary>
            <Authenticating />
          </ErrorBoundary>
        </MainPageContent>
      </AuthorizedPage>
    );
  }
  return (
    <AuthorizedPage title={title}>
      <PageLayoutAside />
      <PageLayoutAsideMobile />
      <MainPageContent>
        <ErrorBoundary>{children}</ErrorBoundary>
      </MainPageContent>
    </AuthorizedPage>
  );
};

const NotAuthenticatedPage: React.FC<ReactChildren & IBaseLayout> = ({ title, children }) => {
  return (
    <NoAsideLayout>
      <CssBaseline />
      <MetaData title={title} />
      <PageLayoutHeader />
      <MainPageContent>{children}</MainPageContent>
      <PageLayoutFooter />
    </NoAsideLayout>
  );
};

const AuthorizedPage: React.FC<ReactChildren & IBaseLayout> = ({ title, children }) => {
  useUser();
  return (
    <MainLayout>
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
        <EnvCheck>{children}</EnvCheck>
      </ErrorBoundary>
      <PageLayoutFooter />
    </MainLayout>
  );
};
